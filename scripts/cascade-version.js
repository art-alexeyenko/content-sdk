#!/usr/bin/env node
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
 * Usage: node scripts/cascade-version.js [--dry-run]
 */

const assembleReleasePlan = require('@changesets/assemble-release-plan').default;
const applyReleasePlan = require('@changesets/apply-release-plan').default;
const readChangesets = require('@changesets/read').default;
const { read: readConfig } = require('@changesets/config');
const { getPackages } = require('@manypkg/get-packages');
const { getDependentsGraph } = require('@changesets/get-dependents-graph');

// Bump type priority (higher = more significant)
const BUMP_PRIORITY = {
  major: 3,
  minor: 2,
  patch: 1,
  none: 0,
};

/**
 * Get direct dependents of a package (one level only)
 */
function getDirectDependents(packageName, dependentsGraph) {
  return dependentsGraph.get(packageName) || [];
}

/**
 * Generate a random changeset ID
 */
function generateChangesetId() {
  const adjectives = ['cascade', 'auto', 'sync'];
  const nouns = ['bump', 'version', 'update'];
  const random = Math.random().toString(36).substring(2, 8);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  return `${pick(adjectives)}-${pick(nouns)}-${random}`;
}

/**
 * Propagate bumps through the dependency graph
 * Uses iterative approach to handle transitive dependencies correctly
 */
function propagateBumps(initialBumps, dependentsGraph) {
  // Map of package -> { type, source } for final bump decisions
  const finalBumps = new Map();

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

async function main() {
  const dryRun = process.argv.includes('--dry-run');
  const cwd = process.cwd();

  if (dryRun) {
    console.log('🔍 DRY RUN MODE - No changes will be made\n');
  }

  console.log('📦 Reading changesets and packages...\n');

  // Read all necessary data
  const packages = await getPackages(cwd);
  const config = await readConfig(cwd, packages);
  const changesets = await readChangesets(cwd);

  if (changesets.length === 0) {
    console.log('No pending changesets found.');
    return;
  }

  // Build dependents graph
  const dependentsGraph = getDependentsGraph(packages);

  // Collect initial bumps from all changesets (highest priority per package)
  const initialBumps = new Map();
  changesets.forEach((changeset) => {
    changeset.releases.forEach((release) => {
      const existing = initialBumps.get(release.name);
      if (!existing || BUMP_PRIORITY[release.type] > BUMP_PRIORITY[existing]) {
        initialBumps.set(release.name, release.type);
      }
    });
  });

  // Find packages with major/minor bumps (these will cascade)
  const cascadeSources = new Map();
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
  const syntheticChangesets = [];

  finalBumps.forEach((info, pkgName) => {
    const originalBump = initialBumps.get(pkgName);

    // Create synthetic changeset if:
    // 1. Package didn't have an original changeset, OR
    // 2. The cascaded bump is higher priority than the original
    if (!originalBump || BUMP_PRIORITY[info.type] > BUMP_PRIORITY[originalBump]) {
      const syntheticChangeset = {
        id: generateChangesetId(),
        summary: `Cascading ${info.type} bump from ${info.source}`,
        releases: [{ name: pkgName, type: info.type }],
      };
      syntheticChangesets.push(syntheticChangeset);
      console.log(
        `  🔄 ${pkgName}: ${originalBump || 'none'} → ${info.type} (from ${info.source})`
      );
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

main().catch((error) => {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
});
