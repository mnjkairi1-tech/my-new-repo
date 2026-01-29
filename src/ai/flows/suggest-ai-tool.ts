
'use server';

import { ai } from '@/ai/genkit';
import { allTools } from '@/lib/tools-data';
import { z } from 'zod';


const searchTools = ai.defineTool(
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
    const filteredTools = allTools
      .filter(
        (tool) =>
          tool.name.toLowerCase().includes(lowerCaseQuery) ||
          tool.description.toLowerCase().includes(lowerCaseQuery) ||
          tool.category?.toLowerCase().includes(lowerCaseQuery)
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


const SuggestAiToolInputSchema = z.object({
  query: z.string().describe('The user\'s request or question about what AI tool they are looking for.'),
});

const SuggestionSchema = z.object({
  toolName: z.string().describe('The name of the suggested AI tool.'),
  reason: z.string().describe('A brief, one-sentence explanation of why this tool is a good fit for the user\'s query.'),
  url: z.string().url().describe('The direct URL to the AI tool\'s website.'),
});

const SuggestAiToolOutputSchema = z.object({
  suggestions: z
    .array(SuggestionSchema)
    .describe('A list of up to 10 AI tool suggestions.'),
});

export type SuggestAiToolInput = z.infer<typeof SuggestAiToolInputSchema>;
export type SuggestAiToolOutput = z.infer<typeof SuggestAiToolOutputSchema>;

const suggestToolFlow = ai.defineFlow(
  {
    name: 'suggestToolFlow',
    inputSchema: SuggestAiToolInputSchema,
    outputSchema: SuggestAiToolOutputSchema,
  },
  async ({ query }) => {
    const llmResponse = await ai.generate({
      prompt: `Based on the user's query, suggest up to 10 relevant AI tools. For each tool, provide its name, a short reason for the suggestion, and its URL. Query: "${query}"`,
      model: 'googleai/gemini-1.5-flash',
      tools: [searchTools],
      output: {
          schema: SuggestAiToolOutputSchema,
      }
    });

    const output = llmResponse.output;

    if (!output) {
      throw new Error('Failed to get structured output from the model.');
    }

    return output;
  }
);

export async function suggestAiTool(
  input: SuggestAiToolInput
): Promise<SuggestAiToolOutput> {
  return suggestToolFlow(input);
}
