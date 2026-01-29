
import type { Tool } from '@/lib/types';

export const aiDebuggingTools: Tool[] = [
    { name: 'Sentry', description: 'Application monitoring and error tracking.', url: 'https://sentry.io/', image: 'https://picsum.photos/seed/sentry-debug/600/400', dataAiHint: 'error tracking', pricing: 'Freemium' },
    { name: 'Rollbar', description: 'Real-time error monitoring and debugging.', url: 'https://rollbar.com/', image: 'https://picsum.photos/seed/rollbar-debug/600/400', dataAiHint: 'real-time error', pricing: 'Freemium' },
    { name: 'Bugsnag', description: 'Monitor application stability.', url: 'https://www.bugsnag.com/', image: 'https://picsum.photos/seed/bugsnag-debug/600/400', dataAiHint: 'app stability', pricing: 'Freemium' },
    { name: 'Jam', description: 'Developer-friendly bug reports in 1-click.', url: 'https://jam.dev/', image: 'https://picsum.photos/seed/jam-debug/600/400', dataAiHint: 'bug reports', pricing: 'Freemium' },
    { name: 'DebugBear', description: 'Website and API monitoring.', url: 'https://www.debugbear.com/', image: 'https://picsum.photos/seed/debugbear/600/400', dataAiHint: 'website monitoring', pricing: 'Paid' },
    { name: 'Lightrun', description: 'Add logs, metrics, and traces to live applications without redeploying.', url: 'https://www.lightrun.com/', image: 'https://picsum.photos/seed/lightrun-debug/600/400', dataAiHint: 'live debugging', pricing: 'Freemium' },
    { name: 'Ozcode', description: 'A debugging tool for C# that provides visibility into your code execution.', url: 'https://oz-code.com/', image: 'https://picsum.photos/seed/ozcode-debug/600/400', dataAiHint: 'c-sharp debugging', pricing: 'Paid' },
    { name: 'Rookout', description: 'Fetch any piece of data from your live code, on-demand.', url: 'https://www.rookout.com/', image: 'https://picsum.photos/seed/rookout-debug/600/400', dataAiHint: 'live data', pricing: 'Paid' },
    { name: 'RevDeBug', description: 'Reverse debugging for .NET and Java.', url: 'https://revdebug.com/', image: 'https://picsum.photos/seed/revdebug/600/400', dataAiHint: 'reverse debugging', pricing: 'Paid' },
    { name: 'Undo', description: 'Time-travel debugging for Linux.', url: 'https://undo.io/', image: 'https://picsum.photos/seed/undo-debug/600/400', dataAiHint: 'time travel', pricing: 'Paid' },
];
