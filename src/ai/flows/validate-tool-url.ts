'use server';

import { z } from 'zod';

const ValidateToolUrlInputSchema = z.object({
  url: z.string().url().describe('The URL of the AI tool to validate.'),
});

const ValidateToolUrlOutputSchema = z.object({
  isAiTool: z.boolean().describe('Whether the URL points to a legitimate AI tool or service.'),
  isSafe: z.boolean().describe('Whether the website is considered safe (not a phishing or malware site).'),
  toolName: z.string().optional().describe('The name of the AI tool if identified.'),
  toolDescription: z.string().optional().describe('A brief, one-sentence description of the tool.'),
  reason: z.string().optional().describe('A brief reason for the validation decision, especially if it fails.'),
});

export type ValidateToolUrlInput = z.infer<typeof ValidateToolUrlInputSchema>;
export type ValidateToolUrlOutput = z.infer<typeof ValidateToolUrlOutputSchema>;

// Dummy function to avoid build errors in edge environment
export async function validateAndGetToolInfo(
  input: ValidateToolUrlInput
): Promise<ValidateToolUrlOutput> {
  console.log("Tool validation is temporarily disabled due to deployment constraints.");
  // Return a default "valid" response to not block the UX
  try {
    const url = new URL(input.url);
    return {
      isAiTool: true,
      isSafe: true,
      toolName: url.hostname,
      toolDescription: 'User-added AI tool.',
      reason: 'AI validation is temporarily disabled.',
    };
  } catch (e) {
    return {
      isAiTool: false,
      isSafe: false,
      reason: 'Invalid URL format.',
    }
  }
}
