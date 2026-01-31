'use server';

import { z } from 'zod';

const ConversationalAgentInputSchema = z.object({
    history: z.array(z.any()), // Using `any` for simplicity to pass ChatMessage
    message: z.string(),
});
export type ConversationalAgentInput = z.infer<typeof ConversationalAgentInputSchema>;

export type ChatMessage = {
    role: 'user' | 'model';
    content: string;
};

const ConversationalAgentOutputSchema = z.object({
    response: z.string(),
});
export type ConversationalAgentOutput = z.infer<typeof ConversationalAgentOutputSchema>;


export async function conversationalAgent(input: ConversationalAgentInput): Promise<ConversationalAgentOutput> {
    console.log("Conversational agent is temporarily disabled due to deployment constraints.");
    return {
        response: "I'm sorry, the conversational AI is temporarily disabled. Please try again later.",
    };
}
