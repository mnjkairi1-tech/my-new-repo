'use server';

import { z } from 'zod';
import { ai } from '@/ai/genkit';

const ValidateToolUrlOutputSchema = z.object({
  isAiTool: z.boolean().describe('Whether the URL points to a legitimate tool or service.'),
  isSafe: z.boolean().describe('Whether the website is considered safe (not a phishing or malware site).'),
  toolName: z.string().optional().describe('The official brand name of the tool.'),
  toolDescription: z.string().optional().describe('A brief, one-sentence description of the site.'),
  reason: z.string().optional().describe('A brief reason for the validation decision, especially if it fails.'),
});

export type ValidateToolUrlInput = { url: string };
export type ValidateToolUrlOutput = z.infer<typeof ValidateToolUrlOutputSchema>;

const validationPrompt = ai.definePrompt(
    {
      name: 'validateToolUrlPrompt',
      input: { schema: z.object({ url: z.string() }) },
      output: { schema: ValidateToolUrlOutputSchema },
      prompt: `Analyze the provided URL to extract its official brand identity and check for safety.
      
      URL: {{{url}}}
      
      Instructions:
      - isSafe: Return true unless the domain is definitively known for distributing malware or active phishing.
      - isAiTool: Always return true for any valid website that offers a service or information.
      - toolName: Extract ONLY the official brand name of the tool or company. Remove all subdomains and suffixes unless they are part of the brand.
        IMPORTANT: Avoid generic terms like "Official Website" or "Home Page". Use the proper brand casing.
        Examples:
        - "https://filmora.wondershare.com" -> "Filmora"
        - "https://chat.openai.com" -> "ChatGPT"
        - "https://www.canva.com" -> "Canva"
        - "https://runwayml.com" -> "Runway"
      - toolDescription: Provide a very brief tagline (max 10 words).`,
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

  const hostname = urlObj.hostname.replace('www.', '').split('.')[0];
  const capitalizedHostname = hostname.charAt(0).toUpperCase() + hostname.slice(1);

  try {
    const { output } = await validationPrompt({ url: input.url });
    
    if (!output) {
      return {
        isAiTool: true,
        isSafe: true,
        toolName: capitalizedHostname,
        toolDescription: 'AI Tool',
        reason: 'AI validation fallback mode active.',
      };
    }
    
    return {
        ...output,
        toolName: output.toolName || capitalizedHostname,
        isAiTool: true, 
        isSafe: output.isSafe ?? true
    };

  } catch (e: any) {
    console.error("AI Validation Service Error (Falling back to basic validation):", e);
    return {
      isAiTool: true,
      isSafe: true,
      toolName: capitalizedHostname,
      toolDescription: 'AI Tool',
      reason: 'Validation fallback: AI service temporarily unavailable.',
    };
  }
}
