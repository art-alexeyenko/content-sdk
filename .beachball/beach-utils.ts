import { type ChangelogEntry } from 'beachball';

export const changelog = {
  renderEntry: (entry: ChangelogEntry) => {
    return `[${entry.package}] ${entry.comment}`;
  },
};
