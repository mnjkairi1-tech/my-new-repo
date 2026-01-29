'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { allToolsServer } from '@/lib/all-tools-server';

export const searchAppTools = ai.defineTool(
  {
    name: 'searchAppTools',
    description: "Search for AI tools available within the application's catalog. Use this to answer questions about what tools the app has.",
    inputSchema: z.object({
      query: z.string().describe('A search query describing the tool or category the user is looking for. For example: "video editing", "writing", "productivity".'),
    }),
    outputSchema: z.object({
      results: z.array(z.object({
        name: z.string(),
        category: z.string().optional(),
        description: z.string(),
        url: z.string().url(),
      })),
    }),
  },
  async ({ query }) => {
    const lowerCaseQuery = query.toLowerCase();
    const filteredTools = allToolsServer
      .filter(
        (tool) =>
          tool.name.toLowerCase().includes(lowerCaseQuery) ||
          tool.description.toLowerCase().includes(lowerCaseQuery) ||
          (tool.category && tool.category.toLowerCase().includes(lowerCaseQuery))
      )
      .slice(0, 10);

    const results = filteredTools.map((tool) => ({
        name: tool.name,
        category: tool.category,
        description: tool.description,
        url: tool.url,
    }));

    return { results };
  }
);
