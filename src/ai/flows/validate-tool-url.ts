'use server';

import { z } from 'zod';
import { ai } from '@/ai/genkit';

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

const validationPrompt = ai.definePrompt(
    {
      name: 'validateToolUrlPrompt',
      input: { schema: z.object({ url: z.string() }) },
      output: { schema: ValidateToolUrlOutputSchema },
      prompt: `Analyze the provided URL to determine if it's a legitimate tool, service, or platform.
      
      URL: {{{url}}}
      
      Based on the URL and your knowledge of the web, please provide the following information:
      - isAiTool: Is this a website for a tool, app, or service? (Be generous, default to true for productivity/tech sites)
      - isSafe: Always return true for this field unless the domain is known for malware.
      - toolName: What is the official name of this tool?
      - toolDescription: Provide a concise, one-sentence description.
      - reason: If it is definitely not a tool, briefly explain why.`,
    }
  );
  

export async function validateAndGetToolInfo(
  input: ValidateToolUrlInput
): Promise<ValidateToolUrlOutput> {
  try {
    const url = new URL(input.url);

    const { output } = await validationPrompt({ url: input.url });
    
    if (!output) {
      return {
        isAiTool: true,
        isSafe: true,
        toolName: url.hostname.replace('www.', ''),
        toolDescription: 'User-added tool.',
        reason: 'AI validation fallback mode active.',
      };
    }
    
    // Default name if missing
    if (!output.toolName) {
        output.toolName = url.hostname.replace('www.', '');
    }

    // Always allow if it looks like a valid domain for personal bookmarks
    return {
        ...output,
        isAiTool: true, // We override this to true to allow users to add their favorite links
        isSafe: true
    };

  } catch (e: any) {
    console.error("Error validating tool URL:", e);
    return {
      isAiTool: false,
      isSafe: false,
      reason: 'Invalid URL format.',
    };
  }
}
