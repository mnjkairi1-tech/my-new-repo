'use server';

import { z } from 'zod';


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


export async function suggestAiTool(
  input: SuggestAiToolInput
): Promise<SuggestAiToolOutput> {
  console.log("AI Tool Suggestion is temporarily disabled due to build environment constraints.");
  return {
    suggestions: [],
  };
}
