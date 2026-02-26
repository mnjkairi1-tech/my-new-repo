'use server';

import { ai, geminiModel } from '@/ai/genkit';
import { z } from 'zod';
import { searchAppTools } from '@/ai/tools/search-app-tools';

export type ChatMessage = {
    role: 'user' | 'model';
    content: string;
};

const ConversationalAgentInputSchema = z.object({
    history: z.array(z.custom<ChatMessage>()),
    message: z.string(),
});
export type ConversationalAgentInput = z.infer<typeof ConversationalAgentInputSchema>;

const ConversationalAgentOutputSchema = z.object({
    response: z.string(),
});
export type ConversationalAgentOutput = z.infer<typeof ConversationalAgentOutputSchema>;

const systemInstruction = `You are Ai Atlas, a friendly and helpful guide to the world of AI tools. Your main goal is to help users discover the best AI tools for their needs based on the app's internal catalog.

- When a user asks for a tool, a category of tools, or describes a task they want to accomplish, you MUST use the \`searchAppTools\` tool to find relevant tools.
- Do not make up tools or URLs. Only use the information returned from the \`searchAppTools\` tool.
- When presenting tools, format them nicely. For example, use a list with bolded tool names and links.
- If the search tool returns no results, inform the user and ask if they want to try a different search.
- For general conversation, be friendly and engaging.
- If the user asks about you, explain that you are Ai Atlas, an AI assistant for this app.
- Keep your responses concise and easy to understand.
- Use markdown for formatting your responses.`;


export async function conversationalAgent(input: ConversationalAgentInput): Promise<ConversationalAgentOutput> {
  const { history, message } = input;

  const response = await ai.generate({
    model: geminiModel,
    tools: [searchAppTools],
    system: systemInstruction,
    history,
    prompt: message,
  });

  return {
    response: response.text,
  };
}
