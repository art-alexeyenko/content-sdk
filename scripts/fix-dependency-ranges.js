#!/usr/bin/env node
/**
 * Post-changeset-version script
 * Adds caret (^) to stable internal dependency versions
 * Keeps exact versions for prerelease/canary versions
 *
 * Run after: npx changeset version
 */

const fs = require('fs');
const path = require('path');

const packagesDir = path.join(__dirname, '..', 'packages');

// Internal package prefixes to process
const internalPrefixes = ['@sitecore-content-sdk/', 'create-content-sdk-app'];

// Get all package directories
const packageDirs = fs.readdirSync(packagesDir).filter((dir) => {
  const pkgPath = path.join(packagesDir, dir, 'package.json');
  return fs.existsSync(pkgPath);
});

let updatedCount = 0;

packageDirs.forEach((dir) => {
  const pkgPath = path.join(packagesDir, dir, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  let modified = false;

  // Process dependencies and devDependencies
  ['dependencies', 'devDependencies', 'peerDependencies'].forEach((depType) => {
    if (!pkg[depType]) return;

    Object.keys(pkg[depType]).forEach((depName) => {
      // Check if this is an internal dependency
      const isInternal = internalPrefixes.some(
        (prefix) => depName.startsWith(prefix) || depName === prefix
      );

      if (!isInternal) return;

      const version = pkg[depType][depName];

      // Skip if already has a range modifier (^, ~, >, <, etc.)
      if (/^[\^~><]/.test(version)) return;

      // Skip workspace protocol
      if (version.startsWith('workspace:')) return;

      // Check if it's a stable version (no prerelease tag like -canary, -alpha, -beta, -rc)
      const isStable = !/-/.test(version);

      if (isStable) {
        // Add caret for stable versions
        pkg[depType][depName] = `^${version}`;
        modified = true;
        console.log(`  ${dir}: ${depName} "${version}" -> "^${version}"`);
      }
    });
  });

  if (modified) {
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
    updatedCount++;
  }
});

if (updatedCount > 0) {
  console.log(`\n✅ Updated ${updatedCount} package(s) with caret ranges for stable versions.`);
} else {
  console.log('No dependency range updates needed.');
}

