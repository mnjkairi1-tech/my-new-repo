import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

// HIGH SECURITY GUARD: Ensure Genkit and Gemini API keys are NEVER exposed to the frontend.
// This check prevents the file from being bundled or executed in the browser.
if (typeof window !== 'undefined') {
  throw new Error('SECURITY ALERT: Genkit and Gemini API must only be used on the server side. Check your imports.');
}

// Centralized model configuration - Using gemini-1.5-flash for high rate limits
export const geminiModel = 'googleai/gemini-1.5-flash';

export const ai = genkit({
  plugins: [
    googleAI({
      // The API key is read from the server-only GEMINI_API_KEY environment variable.
      // Since this file is only executed on the server, the key remains invisible to users.
      apiKey: process.env.GEMINI_API_KEY,
    }),
  ],
  model: geminiModel,
});
