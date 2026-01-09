#!/usr/bin/env tsx
/**
 * Integrated cascade version script using changesets programmatic API
 *
 * This script replaces `changeset version` with a custom implementation that:
 * 1. Reads pending changesets
 * 2. Cascades major/minor bumps from ANY package to all its dependents
 * 3. Assembles a new release plan with synthetic changesets
 * 4. Applies the modified release plan
 *
 * Cascading rules:
 * - If package A has a major/minor bump, all packages that depend on A
 *   (directly or transitively) get the same bump type
 * - This applies to ALL packages, not just "main" packages
 *
 * Usage: tsx .changeset/scripts/cascade-version.ts [--dry-run]
 */

import assembleReleasePlan from '@changesets/assemble-release-plan';
import applyReleasePlan from '@changesets/apply-release-plan';
import parseChangeset from '@changesets/parse';
import { read as readConfig } from '@changesets/config';
import { getPackages } from '@manypkg/get-packages';
import { getDependentsGraph } from '@changesets/get-dependents-graph';
import type { VersionType, NewChangeset } from '@changesets/types';
import * as fs from 'fs';
import * as path from 'path';

// Bump type priority (higher = more significant)
const BUMP_PRIORITY: Record<VersionType | 'none', number> = {
  major: 3,
  minor: 2,
  patch: 1,
  none: 0,
};

/**
 * Read changesets from .changeset directory, excluding subdirectories
 * This is a custom implementation to avoid reading from .changeset/scripts/
 */
async function readChangesetsFromDir(cwd: string): Promise<NewChangeset[]> {
  const changesetDir = path.join(cwd, '.changeset');
  const entries = fs.readdirSync(changesetDir, { withFileTypes: true });

  const changesets: NewChangeset[] = [];

  for (const entry of entries) {
    // Only read .md files from root of .changeset, skip directories and README
    if (
      entry.isFile() &&
      entry.name.endsWith('.md') &&
      entry.name !== 'README.md'
    ) {
      const filePath = path.join(changesetDir, entry.name);
      const content = fs.readFileSync(filePath, 'utf-8');

      try {
        const parsed = parseChangeset(content);
        const id = entry.name.replace(/\.md$/, '');
        changesets.push({
          id,
          summary: parsed.summary,
          releases: parsed.releases,
        });
      } catch {
        // Skip files that can't be parsed as changesets
        console.warn(`Warning: Could not parse ${entry.name} as a changeset`);
      }
    }
  }

  return changesets;
}

interface BumpInfo {
  type: VersionType;
  source: string;
}

type DependentsGraph = Map<string, string[]>;

/**
 * Get direct dependents of a package (one level only)
 */
function getDirectDependents(packageName: string, dependentsGraph: DependentsGraph): string[] {
  return dependentsGraph.get(packageName) || [];
}

/**
 * Generate a random changeset ID
 */
function generateChangesetId(): string {
  const adjectives = ['cascade', 'auto', 'sync'];
  const nouns = ['bump', 'version', 'update'];
  const random = Math.random().toString(36).substring(2, 8);
  const pick = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
  return `${pick(adjectives)}-${pick(nouns)}-${random}`;
}

/**
 * Propagate bumps through the dependency graph
 * Uses iterative approach to handle transitive dependencies correctly
 */
function propagateBumps(
  initialBumps: Map<string, VersionType>,
  dependentsGraph: DependentsGraph
): Map<string, BumpInfo> {
  // Map of package -> { type, source } for final bump decisions
  const finalBumps = new Map<string, BumpInfo>();

  // Initialize with existing bumps
  initialBumps.forEach((type, pkg) => {
    finalBumps.set(pkg, { type, source: pkg });
  });

  // Keep propagating until no changes
  let changed = true;
  while (changed) {
    changed = false;

    finalBumps.forEach((info, pkg) => {
      // Only cascade major/minor bumps
      if (BUMP_PRIORITY[info.type] < BUMP_PRIORITY.minor) return;

      const dependents = getDirectDependents(pkg, dependentsGraph);

      dependents.forEach((depPkg) => {
        const existing = finalBumps.get(depPkg);

        // If dependent doesn't have a bump, or has a lower priority bump, upgrade it
        if (!existing || BUMP_PRIORITY[info.type] > BUMP_PRIORITY[existing.type]) {
          finalBumps.set(depPkg, {
            type: info.type,
            source: pkg,
          });
          changed = true;
        }
      });
    });
  }

  return finalBumps;
}

async function main(): Promise<void> {
  const dryRun = process.argv.includes('--dry-run');
  const cwd = process.cwd();

  if (dryRun) {
    console.log('🔍 DRY RUN MODE - No changes will be made\n');
  }

  console.log('📦 Reading changesets and packages...\n');

  // Read all necessary data
  const packages = await getPackages(cwd);
  const config = await readConfig(cwd, packages);
  // Use custom reader to avoid reading from .changeset/scripts/ subdirectory
  const changesets = await readChangesetsFromDir(cwd);

  if (changesets.length === 0) {
    console.log('No pending changesets found.');
    return;
  }

  // Build dependents graph
  const dependentsGraph = getDependentsGraph(packages) as DependentsGraph;

  // Collect initial bumps from all changesets (highest priority per package)
  const initialBumps = new Map<string, VersionType>();
  changesets.forEach((changeset) => {
    changeset.releases.forEach((release) => {
      const existing = initialBumps.get(release.name);
      if (!existing || BUMP_PRIORITY[release.type] > BUMP_PRIORITY[existing]) {
        initialBumps.set(release.name, release.type);
      }
    });
  });

  // Find packages with major/minor bumps (these will cascade)
  const cascadeSources = new Map<string, VersionType>();
  initialBumps.forEach((type, pkg) => {
    if (BUMP_PRIORITY[type] >= BUMP_PRIORITY.minor) {
      cascadeSources.set(pkg, type);
    }
  });

  if (cascadeSources.size === 0) {
    console.log('No major/minor bumps found. Proceeding with standard changeset version...\n');

    const releasePlan = assembleReleasePlan(changesets, packages, config, undefined);

    if (!dryRun) {
      await applyReleasePlan(releasePlan, packages, config);
      console.log('✅ Version updates applied.');
    }
    return;
  }

  console.log('📊 Packages with major/minor bumps (will cascade to dependents):');
  cascadeSources.forEach((type, name) => {
    console.log(`  ${name}: ${type}`);
  });
  console.log('');

  // Propagate bumps through dependency graph
  const finalBumps = propagateBumps(initialBumps, dependentsGraph);

  // Determine which packages need synthetic changesets (cascade bumps)
  const syntheticChangesets: NewChangeset[] = [];

  finalBumps.forEach((info, pkgName) => {
    const originalBump = initialBumps.get(pkgName);

    // Create synthetic changeset if:
    // 1. Package didn't have an original changeset, OR
    // 2. The cascaded bump is higher priority than the original
    if (!originalBump || BUMP_PRIORITY[info.type] > BUMP_PRIORITY[originalBump]) {
      const syntheticChangeset: NewChangeset = {
        id: generateChangesetId(),
        summary: `Cascading ${info.type} bump from ${info.source}`,
        releases: [{ name: pkgName, type: info.type }],
      };
      syntheticChangesets.push(syntheticChangeset);
      console.log(`  🔄 ${pkgName}: ${originalBump || 'none'} → ${info.type} (from ${info.source})`);
    }
  });

  if (syntheticChangesets.length === 0) {
    console.log('✅ All dependent packages already have appropriate changesets.');
    const releasePlan = assembleReleasePlan(changesets, packages, config, undefined);

    if (!dryRun) {
      await applyReleasePlan(releasePlan, packages, config);
      console.log('✅ Version updates applied.');
    }
    return;
  }

  // Combine original and synthetic changesets
  const allChangesets = [...changesets, ...syntheticChangesets];

  // Assemble release plan with all changesets
  const releasePlan = assembleReleasePlan(allChangesets, packages, config, undefined);

  console.log('\n📋 Final release plan:');
  releasePlan.releases
    .filter((r) => r.type !== 'none')
    .forEach((r) => {
      console.log(`  ${r.name}: ${r.oldVersion} → ${r.newVersion} (${r.type})`);
    });

  if (dryRun) {
    console.log('\n🔍 DRY RUN complete. No changes made.');
    console.log('\nNote: Synthetic changesets would be:');
    syntheticChangesets.forEach((cs) => {
      console.log(`  - ${cs.id}: ${cs.summary}`);
    });
    return;
  }

  console.log('\n🚀 Applying release plan...\n');

  await applyReleasePlan(releasePlan, packages, config);

  console.log('✅ Version updates applied with cascading bumps.');
}

main().catch((error: Error) => {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
});

