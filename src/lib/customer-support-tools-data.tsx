'use client';

import React from 'react';
import { 
    Handshake, Bot, MessageSquare, BookOpen, Heart, Users, Phone, Smile
} from 'lucide-react';
import type { Tool } from '@/lib/types';
import { helpDeskTicketingTools } from './customer-support-tools-data/help-desk-ticketing';
import { liveChatSoftwareTools } from './customer-support-tools-data/live-chat-software';
import { aiChatbotsSupportTools } from './customer-support-tools-data/ai-chatbots-support';
import { knowledgeBaseSoftwareTools } from './customer-support-tools-data/knowledge-base-software';
import { customerFeedbackSurveysTools } from './customer-support-tools-data/customer-feedback-surveys';
import { socialCustomerServiceTools } from './customer-support-tools-data/social-customer-service';
import { callCenterSoftwareTools } from './customer-support-tools-data/call-center-software';


export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const customerSupportToolData: ToolCategory[] = [
    {
        title: "Help Desk & Ticketing",
        icon: <Handshake className="w-5 h-5 text-primary"/>,
        tools: helpDeskTicketingTools
    },
    {
        title: "Live Chat Software",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: liveChatSoftwareTools
    },
    {
        title: "AI Chatbots for Support",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: aiChatbotsSupportTools
    },
    {
        title: "Knowledge Base Software",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: knowledgeBaseSoftwareTools
    },
    {
        title: "Customer Feedback & Surveys",
        icon: <Smile className="w-5 h-5 text-primary"/>,
        tools: customerFeedbackSurveysTools
    },
    {
        title: "Social Customer Service",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: socialCustomerServiceTools
    },
    {
        title: "Call Center Software",
        icon: <Phone className="w-5 h-5 text-primary"/>,
        tools: callCenterSoftwareTools
    },
];
