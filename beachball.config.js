const { changelog } = require('./.beachball/beach-utils.js');

module.exports = {
  // Enable markdown changelog generation
  generateChangelog: 'md',

  // Branch configuration
  branch: 'dev',

  // Automatically update dependent packages when dependencies change
  bumpDeps: true,

  // Changelog configuration
  changelog: {
    customRenderers: changelog,
  },
};
