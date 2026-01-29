
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { unsafe } from 'genkit';

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

const validateToolFlow = ai.defineFlow(
  {
    name: 'validateToolFlow',
    inputSchema: ValidateToolUrlInputSchema,
    outputSchema: ValidateToolUrlOutputSchema,
  },
  async ({ url }) => {
    const llmResponse = await ai.generate({
        prompt: `Analyze the following URL to determine if it represents a legitimate AI tool. 
        
        URL: ${url}
        
        Based on the URL and your knowledge of the web, please determine the following:
        1. Is this a website for a real AI tool or service?
        2. Is the site generally considered safe (no signs of phishing, malware, or being an empty/parked domain)?
        3. What is the name of the tool?
        4. Provide a one-sentence description of the tool.`,
        model: 'googleai/gemini-1.5-flash',
        output: {
            schema: ValidateToolUrlOutputSchema,
        },
        // Decrease safety settings to avoid blocking legitimate tool sites
        config: unsafe({
            safetySettings: [
                { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
                { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
            ],
        }),
    });
    
    const output = llmResponse.output;

    if (!output) {
      return {
        isAiTool: false,
        isSafe: false,
        reason: 'The AI model could not determine the validity of the tool from the URL.',
      };
    }

    return output;
  }
);


export async function validateAndGetToolInfo(
  input: ValidateToolUrlInput
): Promise<ValidateToolUrlOutput> {
  return validateToolFlow(input);
}
