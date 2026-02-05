
'use client';

import React from 'react';
import { 
    Bot, MessageSquare, BrainCircuit, Users, Mic, Briefcase, ShoppingCart, Send, Phone, GitBranch, Languages, Puzzle, Key, HelpCircle, User, Star, Calendar, Zap, Workflow, Settings, BarChart, Shield, LayoutDashboard, Terminal, BookOpen, Globe
} from 'lucide-react';
import type { Tool } from '@/lib/types';
import { aiChatbotsTools } from './chatbot-assistant-tools-data/ai-chatbots';
import { aiVirtualAssistantsTools } from './chatbot-assistant-tools-data/ai-virtual-assistants';
import { aiCustomerSupportChatbotsTools } from './chatbot-assistant-tools-data/ai-customer-support-chatbots';
import { aiSalesChatbotsTools } from './chatbot-assistant-tools-data/ai-sales-chatbots';
import { aiLeadGenerationChatbotsTools } from './chatbot-assistant-tools-data/ai-lead-generation-chatbots';
import { aiWebsiteChatbotsTools } from './chatbot-assistant-tools-data/ai-website-chatbots';
import { aiEcommerceChatbotsTools } from './chatbot-assistant-tools-data/ai-ecommerce-chatbots';
import { aiWhatsAppChatbotsTools } from './chatbot-assistant-tools-data/ai-whatsapp-chatbots';
import { aiTelegramChatbotsTools } from './chatbot-assistant-tools-data/ai-telegram-chatbots';
import { aiMessengerChatbotsTools } from './chatbot-assistant-tools-data/ai-messenger-chatbots';
import { aiConversationalAIPlatformsTools } from './chatbot-assistant-tools-data/ai-conversational-ai-platforms';
import { aiMultilingualChatbotsTools } from './chatbot-assistant-tools-data/ai-multilingual-chatbots';
import { aiNoCodeChatbotBuildersTools } from './chatbot-assistant-tools-data/ai-no-code-chatbot-builders';
import { aiCustomChatbotDevelopmentTools } from './chatbot-assistant-tools-data/ai-custom-chatbot-development';
import { aiHelpdeskAssistantsTools } from './chatbot-assistant-tools-data/ai-helpdesk-assistants';
import { aiInternalTeamAssistantsTools } from './chatbot-assistant-tools-data/ai-internal-team-assistants';
import { aiKnowledgeBaseChatbotsTools } from './chatbot-assistant-tools-data/ai-knowledge-base-chatbots';
import { aiFaqChatbotsTools } from './chatbot-assistant-tools-data/ai-faq-chatbots';
import { aiBookingSchedulingBotsTools } from './chatbot-assistant-tools-data/ai-booking-scheduling-bots';
import { aiCrmChatbotsTools } from './chatbot-assistant-tools-data/ai-crm-chatbots';
import { aiAnalyticsForChatbotsTools } from './chatbot-assistant-tools-data/ai-analytics-for-chatbots';
import { aiSentimentAwareChatbotsTools } from './chatbot-assistant-tools-data/ai-sentiment-aware-chatbots';
import { aiTaskAutomationAssistantsTools } from './chatbot-assistant-tools-data/ai-task-automation-assistants';
import { aiWorkflowAssistantsTools } from './chatbot-assistant-tools-data/ai-workflow-assistants';
import { aiContextAwareAssistantsTools } from './chatbot-assistant-tools-data/ai-context-aware-assistants';
import { aiSecurePrivateChatbotsTools } from './chatbot-assistant-tools-data/ai-secure-private-chatbots';
import { aiAgentsTools } from './chatbot-assistant-tools-data/ai-agents';


export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const chatbotAssistantToolData: ToolCategory[] = [
    {
        title: "AI Chatbots",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: aiChatbotsTools
    },
    {
        title: "AI Virtual Assistants",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: aiVirtualAssistantsTools
    },
    {
        title: "AI Customer Support Chatbots",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: aiCustomerSupportChatbotsTools
    },
    {
        title: "AI Sales Chatbots",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: aiSalesChatbotsTools
    },
    {
        title: "AI Lead Generation Chatbots",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: aiLeadGenerationChatbotsTools
    },
    {
        title: "AI Website Chatbots",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: aiWebsiteChatbotsTools
    },
    {
        title: "AI E-commerce Chatbots",
        icon: <ShoppingCart className="w-5 h-5 text-primary"/>,
        tools: aiEcommerceChatbotsTools
    },
    {
        title: "AI WhatsApp Chatbots",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: aiWhatsAppChatbotsTools
    },
    {
        title: "AI Telegram Chatbots",
        icon: <Send className="w-5 h-5 text-primary"/>,
        tools: aiTelegramChatbotsTools
    },
    {
        title: "AI Messenger Chatbots",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: aiMessengerChatbotsTools
    },
    {
        title: "AI Conversational AI Platforms",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: aiConversationalAIPlatformsTools
    },
    {
        title: "AI Multilingual Chatbots",
        icon: <Languages className="w-5 h-5 text-primary"/>,
        tools: aiMultilingualChatbotsTools
    },
    {
        title: "AI No-Code Chatbot Builders",
        icon: <Puzzle className="w-5 h-5 text-primary"/>,
        tools: aiNoCodeChatbotBuildersTools
    },
    {
        title: "AI Custom Chatbot Development",
        icon: <Terminal className="w-5 h-5 text-primary"/>,
        tools: aiCustomChatbotDevelopmentTools
    },
    {
        title: "AI Helpdesk Assistants",
        icon: <HelpCircle className="w-5 h-5 text-primary"/>,
        tools: aiHelpdeskAssistantsTools
    },
    {
        title: "AI Internal Team Assistants",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: aiInternalTeamAssistantsTools
    },
    {
        title: "AI Knowledge Base Chatbots",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: aiKnowledgeBaseChatbotsTools
    },
    {
        title: "AI FAQ Chatbots",
        icon: <HelpCircle className="w-5 h-5 text-primary"/>,
        tools: aiFaqChatbotsTools
    },
    {
        title: "AI Booking & Scheduling Bots",
        icon: <Calendar className="w-5 h-5 text-primary"/>,
        tools: aiBookingSchedulingBotsTools
    },
    {
        title: "AI CRM Chatbots",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: aiCrmChatbotsTools
    },
    {
        title: "AI Analytics for Chatbots",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: aiAnalyticsForChatbotsTools
    },
    {
        title: "AI Sentiment-Aware Chatbots",
        icon: <Star className="w-5 h-5 text-primary"/>,
        tools: aiSentimentAwareChatbotsTools
    },
    {
        title: "AI Task Automation Assistants",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: aiTaskAutomationAssistantsTools
    },
    {
        title: "AI Workflow Assistants",
        icon: <Workflow className="w-5 h-5 text-primary"/>,
        tools: aiWorkflowAssistantsTools
    },
    {
        title: "AI Context-Aware Assistants",
        icon: <Settings className="w-5 h-5 text-primary"/>,
        tools: aiContextAwareAssistantsTools
    },
    {
        title: "AI Secure & Private Chatbots",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: aiSecurePrivateChatbotsTools
    },
    {
        title: "AI Agents",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: aiAgentsTools
    }
];
