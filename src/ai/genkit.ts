import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

// Centralized model configuration - Using gemini-1.5-flash for 1500 requests/day free tier
export const geminiModel = 'googleai/gemini-1.5-flash';

export const ai = genkit({
  plugins: [
    googleAI({
      // The API key is automatically read from the GEMINI_API_KEY
      // environment variable in your .env file.
    }),
  ],
  model: geminiModel,
});
