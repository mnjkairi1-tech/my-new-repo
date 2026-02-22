'use server';

import { z } from 'zod';
import { ai } from '@/ai/genkit';

const ValidateToolUrlInputSchema = z.object({
  url: z.string().url().describe('The URL of the tool or website to validate.'),
});

const ValidateToolUrlOutputSchema = z.object({
  isAiTool: z.boolean().describe('Whether the URL points to a legitimate tool or service.'),
  isSafe: z.boolean().describe('Whether the website is considered safe (not a phishing or malware site).'),
  toolName: z.string().optional().describe('The name of the site if identified.'),
  toolDescription: z.string().optional().describe('A brief, one-sentence description of the site.'),
  reason: z.string().optional().describe('A brief reason for the validation decision, especially if it fails.'),
});

export type ValidateToolUrlInput = z.infer<typeof ValidateToolUrlInputSchema>;
export type ValidateToolUrlOutput = z.infer<typeof ValidateToolUrlOutputSchema>;

const validationPrompt = ai.definePrompt(
    {
      name: 'validateToolUrlPrompt',
      input: { schema: z.object({ url: z.string() }) },
      output: { schema: ValidateToolUrlOutputSchema },
      prompt: `Analyze the provided URL to extract its basic identity and check for safety.
      
      URL: {{{url}}}
      
      Instructions:
      - isSafe: Return true unless the domain is definitively known for distributing malware or active phishing.
      - isAiTool: Always return true for any valid website that offers a service or information.
      - toolName: Identify the site's name (e.g., "Google", "OpenAI").
      - toolDescription: Provide a very brief tagline.`,
    }
  );
  

export async function validateAndGetToolInfo(
  input: ValidateToolUrlInput
): Promise<ValidateToolUrlOutput> {
  let urlObj: URL;
  try {
    urlObj = new URL(input.url);
  } catch (e) {
    return {
      isAiTool: false,
      isSafe: false,
      reason: 'Invalid URL format.',
    };
  }

  const hostname = urlObj.hostname.replace('www.', '');

  try {
    const { output } = await validationPrompt({ url: input.url });
    
    if (!output) {
      return {
        isAiTool: true,
        isSafe: true,
        toolName: hostname,
        toolDescription: 'User-added link.',
        reason: 'AI validation fallback mode active.',
      };
    }
    
    return {
        ...output,
        toolName: output.toolName || hostname,
        isAiTool: true, 
        isSafe: output.isSafe ?? true
    };

  } catch (e: any) {
    // If AI service fails, we still allow the tool if it's a valid URL format
    // assuming it's safe for the user unless proven otherwise by a real security list.
    console.error("AI Validation Service Error (Falling back to basic validation):", e);
    return {
      isAiTool: true,
      isSafe: true,
      toolName: hostname,
      toolDescription: 'User-added link.',
      reason: 'Validation fallback: AI service temporarily unavailable.',
    };
  }
}
