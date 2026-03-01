
'use server';
/**
 * @fileOverview AI flow to find tool information by its name.
 */

import { ai, geminiModel } from '@/ai/genkit';
import { z } from 'zod';

const FindToolByNameInputSchema = z.object({
  name: z.string().describe('The name of the AI tool to find.'),
});

const FindToolByNameOutputSchema = z.object({
  name: z.string().describe('The official name of the tool.'),
  description: z.string().describe('A short description, max 15 words.'),
  url: z.string().url().describe('The official website URL.'),
  image: z.string().url().describe('The favicon URL or official logo URL.'),
  pricing: z.enum(['Free', 'Paid', 'Freemium']).describe('The pricing model of the tool.'),
});

export async function findToolByName(input: { name: string }): Promise<z.infer<typeof FindToolByNameOutputSchema> | null> {
  try {
    const { output } = await ai.generate({
      model: geminiModel,
      prompt: `Find the official information for the AI tool named "${input.name}". 
      Provide the official name, a short description (max 15 words), the official website URL, and determine if it is Free, Paid, or Freemium.
      For the image field, provide a high-quality favicon URL using the format: https://www.google.com/s2/favicons?sz=128&domain=DOMAIN_NAME (extract DOMAIN_NAME from the official URL).`,
      output: { schema: FindToolByNameOutputSchema },
    });
    return output || null;
  } catch (error) {
    console.error("AI Search Error:", error);
    return null;
  }
}
