import type {
  ChangelogFunctions,
  NewChangesetWithCommit,
  ModCompWithPackage,
} from '@changesets/types';

/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable jsdoc/require-param */

const REPO = 'sitecore/content-sdk';

/**
 * Custom changelog entry renderer that includes commit links
 */
async function getReleaseLine(changeset: NewChangesetWithCommit, _type: string): Promise<string> {
  const [firstLine, ...remainingLines] = changeset.summary.split('\n').map((l) => l.trimEnd());

  let commitLink = '';

  if (changeset.commit) {
    const shortCommit = changeset.commit.substring(0, 7);
    commitLink = ` ([${shortCommit}](https://github.com/${REPO}/commit/${changeset.commit}))`;
  }

  // Format the entry with commit link
  let entry = `- ${firstLine}${commitLink}`;

  // Add remaining lines with proper indentation
  if (remainingLines.length > 0) {
    const formattedRemainingLines = remainingLines.map((l) => `  ${l}`).join('\n');
    entry += `\n${formattedRemainingLines}`;
  }

  return entry;
}

/**
 * Custom dependency update renderer
 * Shows the actual change descriptions from dependencies instead of "Updated dependencies"
 */
async function getDependencyReleaseLine(
  changesets: NewChangesetWithCommit[],
  dependenciesUpdated: ModCompWithPackage[]
): Promise<string> {
  if (dependenciesUpdated.length === 0 || changesets.length === 0) {
    return '';
  }

  // Get all the change descriptions from the dependency changesets
  const changeEntries = changesets.map((changeset) => {
    const [firstLine] = changeset.summary.split('\n').map((l) => l.trimEnd());

    let commitLink = '';
    if (changeset.commit) {
      const shortCommit = changeset.commit.substring(0, 7);
      commitLink = ` ([${shortCommit}](https://github.com/${REPO}/commit/${changeset.commit}))`;
    }

    return `- ${firstLine}${commitLink}`;
  });

  return changeEntries.join('\n');
}

const changelogFunctions: ChangelogFunctions = {
  getReleaseLine,
  getDependencyReleaseLine,
};

export default changelogFunctions;
