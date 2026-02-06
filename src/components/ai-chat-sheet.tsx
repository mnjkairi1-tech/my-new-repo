
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Loader2, User, Bot, Menu, Edit, Plus, Mic, ArrowUp, Shuffle, AudioLines, MessageSquare, MoreHorizontal, Square, X } from 'lucide-react';
import { type ChatMessage } from '@/ai/flows/conversational-agent';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import { useUser } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { v4 as uuidv4 } from 'uuid';

// Check if SpeechRecognition is available on the window object
interface IWindow extends Window {
  SpeechRecognition: typeof SpeechRecognition;
  webkitSpeechRecognition: typeof SpeechRecognition;
}

interface ChatHistoryItem {
    id: string;
    title: string;
    messages: ChatMessage[];
}

interface AIChatSheetProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const Sidebar = ({
    isOpen, 
    onOpenChange, 
    chatHistory, 
    onSelectChat, 
    onNewChat,
    activeChatId,
} : {
    isOpen: boolean, 
    onOpenChange: (isOpen: boolean) => void,
    chatHistory: ChatHistoryItem[],
    onSelectChat: (chatId: string) => void,
    onNewChat: () => void,
    activeChatId: string | null,
}) => {
    const { user } = useUser();
    
    const HistoryItem = ({ title, id }: { title: string, id: string }) => (
        <button 
            className={cn(
                "w-full text-left p-2 rounded-lg hover:bg-gray-800 transition-colors text-sm truncate flex items-center gap-2",
                activeChatId === id && "bg-gray-800"
            )}
            onClick={() => onSelectChat(id)}
        >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span className="truncate">{title}</span>
        </button>
    );

    return (
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
            <SheetContent side="left" className="w-72 md:w-80 bg-black text-white p-0 border-r border-gray-800 flex flex-col">
                <SheetHeader className='p-2 flex-shrink-0 border-b border-gray-800'>
                     <SheetTitle className="sr-only">Chat History and Options</SheetTitle>
                     <Button onClick={onNewChat} variant="outline" className="w-full justify-between items-center bg-transparent border-gray-700 hover:bg-gray-800">
                        New chat
                        <Edit size={16} />
                    </Button>
                </SheetHeader>
                <ScrollArea className="flex-grow p-2">
                    <div className="space-y-4">
                        {chatHistory.length > 0 && (
                            <div>
                                <h3 className="text-xs font-semibold text-gray-500 px-2 mb-2">Today</h3>
                                <div className="space-y-1">
                                    {chatHistory.map(chat => <HistoryItem key={chat.id} title={chat.title} id={chat.id} />)}
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>
                 <div className="p-2 border-t border-gray-800 flex-shrink-0">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={user?.photoURL ?? undefined} />
                            <AvatarFallback>{user?.displayName?.charAt(0) ?? 'A'}</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold text-sm flex-grow truncate">{user?.displayName ?? 'Anonymous User'}</span>
                        <MoreHorizontal size={20} className="text-gray-500" />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

const allSuggestions = [
    { icon: '📜', text: 'Which rights in India can and cannot be changed?' },
    { icon: '🇮🇳', text: "Republic Day stories you don't usually hear" },
    { icon: '🎨', text: 'What is the theme of Republic Day 2026?' },
    { icon: '🌕', text: 'What nearly went wrong during Chandrayaan?' },
    { icon: '🤖', text: 'Explain how AI image generators work.' },
    { icon: '💡', text: 'Suggest a good name for a new tech startup focused on sustainability.' },
    { icon: '🎬', text: 'Write a short movie script about a time traveler who meets their younger self.' },
    { icon: '🍲', text: 'Give me a simple recipe for chicken biryani.' },
    { icon: '✈️', text: 'Plan a 5-day backpacking trip to Himachal Pradesh.' },
    { icon: '🏋️', text: 'Create a 4-week workout plan for a beginner focusing on weight loss.' },
    { icon: '🎸', text: 'Write a short, catchy song about friendship.' },
    { icon: '📚', text: 'Summarize the book "Sapiens" by Yuval Noah Harari in 5 bullet points.' },
    { icon: '🌱', text: 'How can I start a small vegetable garden on my balcony?' },
    { icon: '💻', text: 'Write a simple Python script to organize files by extension.' },
];

const shuffleAndPick = (array: typeof allSuggestions, n: number) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

export function AIChatSheet({ isOpen, onOpenChange }: AIChatSheetProps) {
    const { toast } = useToast();
    const [input, setInput] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef<SpeechRecognition | null>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [conversations, setConversations] = useState<Record<string, ChatHistoryItem>>({});
    const [activeChatId, setActiveChatId] = useState<string | null>(null);
    const [suggestions, setSuggestions] = useState<{icon: string, text: string}[]>([]);

    const scrollAreaRef = useRef<HTMLDivElement>(null);
    const requestCancelledRef = useRef(false);
    const activeConversationMessages = activeChatId ? conversations[activeChatId]?.messages || [] : [];
    
    useEffect(() => {
        if (typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
            const SpeechRecognitionAPI = (window as IWindow).SpeechRecognition || (window as IWindow).webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognitionAPI();
            const recognition = recognitionRef.current;

            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'en-US';

            recognition.onresult = (event) => {
                let final_transcript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        final_transcript += event.results[i][0].transcript;
                    }
                }
                if (final_transcript) {
                    setInput(prevInput => prevInput + final_transcript);
                }
            };

            recognition.onerror = (event) => {
                console.error('Speech Recognition Error', event.error);
                toast({
                    variant: "destructive",
                    title: "Voice Error",
                    description: `Could not start voice recognition: ${event.error}`,
                });
                setIsListening(false);
            };

            recognition.onend = () => {
                setIsListening(false);
            };
        }
    }, [toast]);

    const handleMicClick = async () => {
        const recognition = recognitionRef.current;
        if (!recognition) {
            toast({
                variant: "destructive",
                title: "Unsupported",
                description: "Your browser does not support voice recognition.",
            });
            return;
        }

        if (isListening) {
            recognition.stop();
        } else {
            try {
                await navigator.mediaDevices.getUserMedia({ audio: true });
                recognition.start();
                setIsListening(true);
            } catch (err) {
                console.error("Microphone permission denied", err);
                toast({
                    variant: "destructive",
                    title: "Permission Denied",
                    description: "Microphone access is required for voice input.",
                });
            }
        }
    };

    const getNewSuggestions = useCallback(() => {
        setSuggestions(shuffleAndPick(allSuggestions, 4));
    }, []);

    const handleNewChat = useCallback(() => {
        const newChatId = uuidv4();
        setConversations(prev => ({
            ...prev,
            [newChatId]: { id: newChatId, title: 'New Chat', messages: [] }
        }));
        setActiveChatId(newChatId);
        setIsSidebarOpen(false);
    }, []);

    useEffect(() => {
        if (isOpen && Object.keys(conversations).length === 0) {
            handleNewChat();
        }
    }, [isOpen, conversations, handleNewChat]);

    useEffect(() => {
        if (isOpen && activeConversationMessages.length === 0) {
            getNewSuggestions();
        }
    }, [isOpen, activeConversationMessages.length, getNewSuggestions, activeChatId]);


    const handleSelectChat = (chatId: string) => {
        setActiveChatId(chatId);
        setIsSidebarOpen(false);
    };

    const handleSendMessage = useCallback(async (message: string) => {
        if (!message.trim() || !activeChatId) return;

        requestCancelledRef.current = false;
        const newUserMessage: ChatMessage = { role: 'user', content: message };
        
        setConversations(prev => {
            const currentChat = prev[activeChatId];
            const updatedMessages = [...currentChat.messages, newUserMessage];
            
            const newTitle = currentChat.messages.length === 0 
                ? message.substring(0, 40) 
                : currentChat.title;

            return {
                ...prev,
                [activeChatId]: { ...currentChat, messages: updatedMessages, title: newTitle }
            };
        });
        
        setIsLoading(true);

        try {
            const result = { response: "Sorry, the AI chat is temporarily disabled. We are working on a fix." };
            await new Promise(resolve => setTimeout(resolve, 1000));

            if (!requestCancelledRef.current) {
                const newAiMessage: ChatMessage = { role: 'model', content: result.response };
                setConversations(prev => {
                    const currentChat = prev[activeChatId];
                    const updatedMessages = [...currentChat.messages, newAiMessage];
                    return {
                        ...prev,
                        [activeChatId]: { ...currentChat, messages: updatedMessages }
                    };
                });
            }
        } catch (error: any) {
            if (!requestCancelledRef.current) {
                console.error("Error fetching chat response:", error);
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: `Could not fetch response: ${error.message}. Please try again.`,
                });
                 setConversations(prev => {
                    const currentChat = prev[activeChatId];
                    const revertedMessages = currentChat.messages.slice(0, -1);
                    return {
                        ...prev,
                        [activeChatId]: { ...currentChat, messages: revertedMessages }
                    };
                });
            }
        } finally {
            if (!requestCancelledRef.current) {
                setIsLoading(false);
            }
        }
    }, [activeChatId, conversations, toast]);


    const handleSend = () => {
        if (isListening) {
            recognitionRef.current?.stop();
        }
        if (input.trim()) {
            handleSendMessage(input);
            setInput('');
        }
    };

    const handleStop = () => {
        requestCancelledRef.current = true;
        setIsLoading(false);
    };

    useEffect(() => {
        if (isOpen && activeConversationMessages.length > 0 && scrollAreaRef.current) {
            setTimeout(() => {
                 const viewport = scrollAreaRef.current?.querySelector(
                    '[data-radix-scroll-area-viewport]'
                 );
                 if (viewport) {
                    viewport.scrollTop = viewport.scrollHeight;
                 }
            }, 100);
        }
    }, [activeConversationMessages, isOpen]);
    
    const sortedChatHistory = Object.values(conversations).sort((a, b) => {
        if (a.messages.length === 0) return 1;
        if (b.messages.length === 0) return -1;
        return (b.messages.length) - (a.messages.length);
    });


    return (
        <>
        <Sidebar 
            isOpen={isSidebarOpen} 
            onOpenChange={setIsSidebarOpen}
            chatHistory={sortedChatHistory}
            onSelectChat={handleSelectChat}
            onNewChat={handleNewChat}
            activeChatId={activeChatId}
        />
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
          <SheetContent side="bottom" className="h-[100dvh] md:h-[90vh] flex flex-col bg-black text-white border-t-0 rounded-t-3xl p-0">
            <SheetHeader className="flex flex-row items-center justify-between p-4 border-b border-gray-800 flex-shrink-0 text-left">
                <Button variant="ghost" size="icon" className="w-12 h-12" onClick={() => setIsSidebarOpen(true)}>
                    <Menu className="w-6 h-6"/>
                </Button>
                <SheetTitle>AI Atlas</SheetTitle>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="w-12 h-12" onClick={handleNewChat}>
                        <Edit className="w-6 h-6"/>
                    </Button>
                    <Button variant="ghost" size="icon" className="w-12 h-12" onClick={() => onOpenChange(false)}>
                        <X className="w-6 h-6"/>
                    </Button>
                </div>
            </SheetHeader>

            <div className="flex-grow overflow-y-auto relative flex flex-col">
                {activeConversationMessages.length === 0 && !isLoading ? (
                    <div className="flex-grow flex flex-col justify-end p-4">
                        <div className="w-full max-w-md mx-auto mb-4">
                            <div className="flex justify-between items-center mb-2 px-2">
                                <p className="text-sm text-gray-400">Try something new</p>
                                <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-400" onClick={getNewSuggestions}>
                                  <Shuffle className="w-4 h-4" />
                                </Button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {suggestions.map((suggestion, index) => (
                                    <button key={index} onClick={() => handleSendMessage(suggestion.text)} className="bg-gray-900 border border-gray-800 p-3 rounded-lg text-left hover:bg-gray-800 transition-colors">
                                        <p className="text-sm text-gray-300 flex items-start">
                                            <span className="mr-3 mt-1">{suggestion.icon}</span>
                                            <span>{suggestion.text}</span>
                                        </p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <ScrollArea className="flex-grow" ref={scrollAreaRef}>
                        <div className="space-y-6 pb-6 px-4 pt-6">
                            {activeConversationMessages.map((msg, index) => (
                                <div key={index} className={cn("flex w-full items-start gap-3", msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                                     {msg.role === 'model' && (
                                        <Avatar className='w-8 h-8 border-2 border-primary flex-shrink-0'>
                                            <AvatarFallback><Bot className='w-5 h-5'/></AvatarFallback>
                                        </Avatar>
                                    )}
                                     <div className={cn(
                                         "max-w-[85%] rounded-2xl p-3 prose prose-sm prose-p:my-2 prose-ul:my-2 prose-li:my-0 break-words text-white",
                                         msg.role === 'model' ? 'bg-gray-800' : 'bg-primary text-primary-foreground'
                                     )}>
                                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                                    </div>
                                    {msg.role === 'user' && (
                                        <Avatar className='w-8 h-8 flex-shrink-0 bg-gray-700'>
                                            <AvatarFallback><User className='w-5 h-5'/></AvatarFallback>
                                        </Avatar>
                                    )}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex items-start gap-3">
                                     <Avatar className='w-8 h-8 border-2 border-primary flex-shrink-0'>
                                        <AvatarFallback><Bot className='w-5 h-5'/></AvatarFallback>
                                    </Avatar>
                                    <div className="bg-gray-800 p-3 rounded-2xl flex items-center space-x-2">
                                        <Loader2 className="w-5 h-5 animate-spin text-primary" />
                                        <span className="text-sm text-gray-400 italic">Thinking...</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </ScrollArea>
                )}
            </div>

             <div className="p-2 sm:p-4 border-t border-gray-800 bg-black flex-shrink-0">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700">
                        <Plus className="w-6 h-6" />
                    </Button>
                    <div className="relative flex-grow">
                        <Input
                            placeholder="Ask AI Atlas..."
                            className="bg-gray-900 border-gray-800 rounded-full h-12 text-base pl-4 pr-24 text-white placeholder:text-gray-500"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            disabled={isLoading}
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                            {isLoading ? (
                                <Button type="button" size="icon" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-gray-600" onClick={handleStop}>
                                    <Square className="w-5 h-5"/>
                                </Button>
                            ) : input ? (
                                <Button type="button" size="icon" className="w-9 h-9 rounded-full bg-primary" onClick={handleSend}>
                                    <ArrowUp className="w-5 h-5"/>
                                </Button>
                            ) : (
                                <Button type="button" size="icon" variant="ghost" className="w-9 h-9 rounded-full" onClick={handleMicClick} disabled={isLoading}>
                                    {isListening ? (
                                        <AudioLines className="w-5 h-5 text-red-500 animate-pulse" />
                                    ) : (
                                        <Mic className="w-5 h-5 text-gray-400" />
                                    )}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
          </SheetContent>
        </Sheet>
        </>
    );
}
