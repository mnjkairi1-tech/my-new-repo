
import type { Tool } from '@/lib/types';

export const versionControlAiTools: Tool[] = [
    { name: 'GitHub', description: 'The complete developer platform.', url: 'https://github.com/', image: 'https://picsum.photos/seed/github-vcs/600/400', dataAiHint: 'git hosting', pricing: 'Freemium' },
    { name: 'GitLab', description: 'The One DevOps Platform.', url: 'https://about.gitlab.com/', image: 'https://picsum.photos/seed/gitlab-vcs/600/400', dataAiHint: 'devops platform', pricing: 'Freemium' },
    { name: 'Bitbucket', description: 'Code & CI/CD, built for teams using Jira.', url: 'https://bitbucket.org/', image: 'https://picsum.photos/seed/bitbucket-vcs/600/400', dataAiHint: 'atlassian git', pricing: 'Freemium' },
    { name: 'Graphite', description: 'Code review for fast-moving teams.', url: 'https://graphite.dev/', image: 'https://picsum.photos/seed/graphite/600/400', dataAiHint: 'stacking diffs', pricing: 'Freemium' },
    { name: 'Tower', description: 'The most powerful Git client for Mac and Windows.', url: 'https://www.git-tower.com/', image: 'https://picsum.photos/seed/tower-vcs/600/400', dataAiHint: 'git client', pricing: 'Paid' },
    { name: 'SourceTree', description: 'A free Git client for Windows and Mac.', url: 'https://www.sourcetreeapp.com/', image: 'https://picsum.photos/seed/sourcetree/600/400', dataAiHint: 'free git client', pricing: 'Free' },
    { name: 'GitKraken', description: 'Legendary Git Tools.', url: 'https://www.gitkraken.com/', image: 'https://picsum.photos/seed/gitkraken/600/400', dataAiHint: 'git gui', pricing: 'Freemium' },
    { name: 'Subversion (SVN)', description: 'An open-source centralized version control system.', url: 'https://subversion.apache.org/', image: 'https://picsum.photos/seed/svn/600/400', dataAiHint: 'centralized vcs', pricing: 'Free' },
    { name: 'Mercurial', description: 'A free, distributed source control management tool.', url: 'https://www.mercurial-scm.org/', image: 'https://picsum.photos/seed/mercurial/600/400', dataAiHint: 'distributed scm', pricing: 'Free' },
    { name: 'Perforce Helix Core', description: 'Version control for developers at scale.', url: 'https://www.perforce.com/products/helix-core', image: 'https://picsum.photos/seed/perforce/600/400', dataAiHint: 'enterprise vcs', pricing: 'Paid' },
];
