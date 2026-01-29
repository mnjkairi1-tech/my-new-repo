'use server';

import { z } from 'genkit';

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
    const { history, message } = input;

    const messages = [
        ...history.map((msg: ChatMessage) => ({
            role: msg.role === 'model' ? 'assistant' : msg.role,
            content: msg.content
        })),
        { role: 'user', content: message }
    ];

    const apiKey = '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';

    if (!apiKey) {
        const errorMsg = "OpenRouter API key is not configured. Please set the OPENROUTER_API_KEY environment variable.";
        console.error(errorMsg);
        return { response: `Sorry, the AI service is not configured correctly. ${errorMsg}` };
    }

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://studio-vert-seven.vercel.app/",
                "X-Title": "AI Atlas"
            },
            body: JSON.stringify({
                "model": "google/gemma-3-27b-it:free",
                "messages": messages,
                "max_tokens": 1024
            })
        });
        
        const responseBodyText = await response.text();

        if (!response.ok) {
            console.error("OpenRouter API Error:", response.status, responseBodyText);
            return { response: `Sorry, the AI service returned an error: ${response.status} ${response.statusText}. Please try again. Details: ${responseBodyText}` };
        }

        let jsonResponse;
        try {
            jsonResponse = JSON.parse(responseBodyText);
        } catch (parseError) {
            console.error("Failed to parse JSON response from OpenRouter:", responseBodyText);
            return { response: `Sorry, I received an unreadable response from the AI. Details: ${responseBodyText}` };
        }
        
        if (jsonResponse.error) {
            console.error("OpenRouter API Error in JSON:", jsonResponse.error);
            return { response: `Sorry, the AI service returned an error: ${jsonResponse.error.message}` };
        }

        if (!jsonResponse.choices || jsonResponse.choices.length === 0 || !jsonResponse.choices[0].message.content) {
            console.error("Invalid response structure from OpenRouter:", jsonResponse);
             return { response: "Sorry, I received an invalid response from the AI. Please try again." };
        }

        const textResponse = jsonResponse.choices[0].message.content;
        
        return { response: textResponse };

    } catch (error: any) {
        console.error("Failed to fetch from OpenRouter:", error);
        return { response: `Sorry, I couldn't connect to the AI service. Please check your network or API key. Error: ${error.message}` };
    }
}
