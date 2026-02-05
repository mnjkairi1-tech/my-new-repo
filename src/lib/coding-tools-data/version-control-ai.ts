
import type { Tool } from '@/lib/types';

export const versionControlAiTools: Tool[] = [
    { name: 'GitHub', description: 'The complete developer platform.', url: 'https://github.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'git hosting', pricing: 'Freemium' },
    { name: 'GitLab', description: 'The One DevOps Platform.', url: 'https://about.gitlab.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=about.gitlab.com', dataAiHint: 'devops platform', pricing: 'Freemium' },
    { name: 'Bitbucket', description: 'Code & CI/CD, built for teams using Jira.', url: 'https://bitbucket.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bitbucket.org', dataAiHint: 'atlassian git', pricing: 'Freemium' },
    { name: 'Graphite', description: 'Code review for fast-moving teams.', url: 'https://graphite.dev/', image: 'https://www.google.com/s2/favicons?sz=128&domain=graphite.dev', dataAiHint: 'stacking diffs', pricing: 'Freemium' },
    { name: 'Tower', description: 'The most powerful Git client for Mac and Windows.', url: 'https://www.git-tower.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=git-tower.com', dataAiHint: 'git client', pricing: 'Paid' },
    { name: 'SourceTree', description: 'A free Git client for Windows and Mac.', url: 'https://www.sourcetreeapp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sourcetreeapp.com', dataAiHint: 'free git client', pricing: 'Free' },
    { name: 'GitKraken', description: 'Legendary Git Tools.', url: 'https://www.gitkraken.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gitkraken.com', dataAiHint: 'git gui', pricing: 'Freemium' },
    { name: 'Subversion (SVN)', description: 'An open-source centralized version control system.', url: 'https://subversion.apache.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=subversion.apache.org', dataAiHint: 'centralized vcs', pricing: 'Free' },
    { name: 'Mercurial', description: 'A free, distributed source control management tool.', url: 'https://www.mercurial-scm.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mercurial-scm.org', dataAiHint: 'distributed scm', pricing: 'Free' },
    { name: 'Perforce Helix Core', description: 'Version control for developers at scale.', url: 'https://www.perforce.com/products/helix-core', image: 'https://www.google.com/s2/favicons?sz=128&domain=perforce.com', dataAiHint: 'enterprise vcs', pricing: 'Paid' },
];
