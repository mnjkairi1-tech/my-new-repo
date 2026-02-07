import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

// Centralized model configuration
export const geminiModel = 'googleai/gemini-pro';

export const ai = genkit({
  plugins: [
    googleAI({
      // The API key is automatically read from the GEMINI_API_KEY
      // environment variable in your .env file.
    }),
  ],
  model: geminiModel,
});
