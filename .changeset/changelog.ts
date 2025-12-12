import defaultRelease from '@changesets/cli/changelog';
import { type NewChangesetWithCommit, type ModCompWithPackage } from '@changesets/types';
/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable jsdoc/require-param */

async function getDependencyReleaseLine(
  changesets: NewChangesetWithCommit[],
  dependenciesUpdated: ModCompWithPackage[]
) {
  const dependencyString = dependenciesUpdated.reduce((acc, dep) => {
    return `${acc}[${dep.name}]`;
  }, '');
  const changelogEntry = changesets.reduce((acc, changeset) => {
    return `${acc}\n
    * ${dependencyString} ${changeset.summary}\n`;
  }, '');

  return changelogEntry;
}

const defaultChangelogFunctions = {
  getReleaseLine: defaultRelease.getReleaseLine,
  getDependencyReleaseLine,
};

export default defaultChangelogFunctions;
