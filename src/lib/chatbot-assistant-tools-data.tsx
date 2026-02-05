
'use client';

import React from 'react';
import { 
    Bot, MessageSquare, BrainCircuit, Users, Mic, Briefcase, ShoppingCart, Send, Phone, GitBranch, Languages, Puzzle, Key, HelpCircle, User, Star, Calendar, Zap, Workflow, Settings, BarChart, Shield, LayoutDashboard, Terminal, BookOpen, Globe
} from 'lucide-react';
import type { Tool } from '@/lib/types';

export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const chatbotAssistantToolData: ToolCategory[] = [
    {
        title: "AI Chatbots",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ChatGPT', description: 'Conversational AI by OpenAI for a wide range of tasks.', url: 'https://chat.openai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=openai.com', dataAiHint: 'openai chat', pricing: 'Freemium' },
            { name: 'Google Gemini', description: 'Google\'s creative and helpful AI collaborator.', url: 'https://gemini.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'google ai', pricing: 'Free' },
            { name: 'Claude', description: 'A next-generation AI assistant by Anthropic.', url: 'https://claude.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=anthropic.com', dataAiHint: 'anthropic ai', pricing: 'Freemium' },
            { name: 'Poe by Quora', description: 'Platform to ask questions and get instant answers from various AI bots.', url: 'https://poe.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=poe.com', dataAiHint: 'ai chat', pricing: 'Freemium' },
            { name: 'Perplexity AI', description: 'An answer engine that provides sources for its answers.', url: 'https://www.perplexity.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=perplexity.ai', dataAiHint: 'answer engine', pricing: 'Freemium' },
            { name: 'Hugging Face Chat', description: 'An open-source alternative to ChatGPT.', url: 'https://huggingface.co/chat/', image: 'https://www.google.com/s2/favicons?sz=128&domain=huggingface.co', dataAiHint: 'open source chat', pricing: 'Free' },
            { name: 'You.com', description: 'AI chatbot and search engine.', url: 'https://you.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=you.com', dataAiHint: 'search engine', pricing: 'Free' },
            { name: 'Character.ai', description: 'Create and talk to AI characters.', url: 'https://character.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=character.ai', dataAiHint: 'ai characters', pricing: 'Freemium' },
            { name: 'Pi, your personal AI', description: 'A supportive and smart AI companion.', url: 'https://pi.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pi.ai', dataAiHint: 'personal ai', pricing: 'Free' },
            { name: 'Jasper Chat', description: 'A conversational AI chatbot for business applications.', url: 'https://www.jasper.ai/chat', image: 'https://www.google.com/s2/favicons?sz=128&domain=jasper.ai', dataAiHint: 'business chat', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Virtual Assistants",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Microsoft Copilot', description: 'Your everyday AI companion integrated into Microsoft products.', url: 'https://copilot.microsoft.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'ai companion', pricing: 'Free' },
            { name: 'Siri', description: 'Apple\'s intelligent assistant built into its devices.', url: 'https://www.apple.com/siri/', image: 'https://www.google.com/s2/favicons?sz=128&domain=apple.com', dataAiHint: 'apple assistant', pricing: 'Free' },
            { name: 'Amazon Alexa', description: 'The voice service that powers Echo devices and more.', url: 'https://www.amazon.com/alexa', image: 'https://www.google.com/s2/favicons?sz=128&domain=amazon.com', dataAiHint: 'smart speaker', pricing: 'Free' },
            { name: 'Google Assistant', description: 'Your personal Google, always ready to help.', url: 'https://assistant.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=assistant.google.com', dataAiHint: 'voice assistant', pricing: 'Free' },
            { name: 'Cortana', description: 'Microsoft\'s personal productivity assistant.', url: 'https://www.microsoft.com/en-us/cortana', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'productivity assistant', pricing: 'Free' },
            { name: 'Bixby', description: 'Samsung\'s intelligent assistant.', url: 'https://www.samsung.com/global/galaxy/apps/bixby/', image: 'https://www.google.com/s2/favicons?sz=128&domain=samsung.com', dataAiHint: 'samsung assistant', pricing: 'Free' },
            { name: 'Mycroft', description: 'The open source voice assistant.', url: 'https://mycroft.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mycroft.ai', dataAiHint: 'open source voice', pricing: 'Free' },
            { name: 'Hound', description: 'A faster and smarter voice assistant.', url: 'https://soundhound.com/hound/', image: 'https://www.google.com/s2/favicons?sz=128&domain=soundhound.com', dataAiHint: 'natural language', pricing: 'Free' },
            { name: 'DataBot', description: 'Virtual talking robot assistant.', url: 'https://www.databotapp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=databot.app', dataAiHint: 'virtual robot', pricing: 'Freemium' },
            { name: 'Lyra', description: 'A personal AI assistant for your device.', url: 'https://lyra-assistant.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'personal assistant', pricing: 'Free' },
        ]
    },
    {
        title: "AI Customer Support Chatbots",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Intercom', description: 'The customer service platform for scaling businesses.', url: 'https://www.intercom.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=intercom.com', dataAiHint: 'customer service', pricing: 'Paid' },
            { name: 'Zendesk', description: 'Customer service software and sales CRM with AI capabilities.', url: 'https://www.zendesk.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zendesk.com', dataAiHint: 'support crm', pricing: 'Paid' },
            { name: 'Tidio', description: 'A comprehensive live chat and chatbot solution for small businesses.', url: 'https://www.tidio.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tidio.com', dataAiHint: 'live chat', pricing: 'Freemium' },
            { name: 'LiveChat', description: 'Live chat software with chatbot capabilities for customer service.', url: 'https://www.livechat.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=livechat.com', dataAiHint: 'website chat', pricing: 'Paid' },
            { name: 'Freshchat', description: 'Modern messaging software for sales and customer engagement teams.', url: 'https://www.freshworks.com/live-chat-software/', image: 'https://www.google.com/s2/favicons?sz=128&domain=freshworks.com', dataAiHint: 'customer engagement', pricing: 'Freemium' },
            { name: 'Drift', description: 'Conversational AI for sales and support.', url: 'https://www.drift.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=drift.com', dataAiHint: 'conversational ai', pricing: 'Paid' },
            { name: 'Help Scout', description: 'A delightful, human-centered customer service platform.', url: 'https://www.helpscout.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=helpscout.com', dataAiHint: 'shared inbox', pricing: 'Paid' },
            { name: 'LivePerson', description: 'AI-powered conversational cloud.', url: 'https://www.liveperson.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=liveperson.com', dataAiHint: 'conversational cloud', pricing: 'Paid' },
            { name: 'Bold360', description: 'Now Genesys DX. AI-powered customer engagement.', url: 'https://www.genesys.com/genesys-cloud-cx', image: 'https://www.google.com/s2/favicons?sz=128&domain=bold360.com', dataAiHint: 'customer engagement', pricing: 'Paid' },
            { name: 'Genesys DX', description: 'AI-powered experience orchestration.', url: 'https://www.genesys.com/genesys-cloud-cx', image: 'https://www.google.com/s2/favicons?sz=128&domain=genesys.com', dataAiHint: 'experience orchestration', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Sales Chatbots",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Drift', description: 'Revenue acceleration platform with conversational AI for sales.', url: 'https://www.drift.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=drift.com', dataAiHint: 'conversational sales', pricing: 'Paid' },
            { name: 'Salesforce Einstein', description: 'AI for the world\'s #1 CRM to guide sales reps.', url: 'https://www.salesforce.com/products/einstein/', image: 'https://www.google.com/s2/favicons?sz=128&domain=salesforce.com', dataAiHint: 'sales ai', pricing: 'Paid' },
            { name: 'Exceed.ai', description: 'AI-powered sales assistant for qualifying and nurturing leads.', url: 'https://www.exceed.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=exceed.ai', dataAiHint: 'lead nurturing', pricing: 'Paid' },
            { name: 'Verse', description: '24/7 lead conversion platform with human-touch.', url: 'https://verse.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=verse.io', dataAiHint: 'lead conversion', pricing: 'Paid' },
            { name: 'Tidio', description: 'Increase sales with AI-powered chatbots.', url: 'https://www.tidio.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tidio.com', dataAiHint: 'sales chatbots', pricing: 'Freemium' },
            { name: 'MobileMonkey', description: 'OmniChat marketing platform for sales.', url: 'https://mobilemonkey.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mobilemonkey.com', dataAiHint: 'omnichat', pricing: 'Paid' },
            { name: 'HubSpot Chatbot Builder', description: 'Automate lead qualification and book meetings.', url: 'https://www.hubspot.com/products/marketing/chatbot-builder', image: 'https://www.google.com/s2/favicons?sz=128&domain=hubspot.com', dataAiHint: 'chatbot builder', pricing: 'Free' },
            { name: 'Botsify', description: 'Create automated chatbots for sales.', url: 'https://botsify.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=botsify.com', dataAiHint: 'automated chatbots', pricing: 'Paid' },
            { name: 'Verloop.io', description: 'Conversational AI platform for customer support and sales.', url: 'https://verloop.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=verloop.io', dataAiHint: 'conversational platform', pricing: 'Paid' },
            { name: 'Qualified', description: 'The conversational sales & marketing platform for Salesforce.', url: 'https://www.qualified.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=qualified.com', dataAiHint: 'salesforce chat', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Lead Generation Chatbots",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'MobileMonkey', description: 'OmniChat marketing platform with lead generation bots.', url: 'https://mobilemonkey.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mobilemonkey.com', dataAiHint: 'lead generation', pricing: 'Paid' },
            { name: 'Tars', description: 'Create chatbot landing pages for higher lead conversion.', url: 'https://hellotars.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tars.com', dataAiHint: 'chatbot landing page', pricing: 'Paid' },
            { name: 'Collect.chat', description: 'Interactive chatbot for websites to collect data.', url: 'https://collect.chat/', image: 'https://www.google.com/s2/favicons?sz=128&domain=collect.chat', dataAiHint: 'data collection', pricing: 'Freemium' },
            { name: 'Landbot', description: 'Build conversational experiences to capture more leads.', url: 'https://landbot.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=landbot.io', dataAiHint: 'no-code builder', pricing: 'Freemium' },
            { name: 'Drift', description: 'Conversational marketing for lead capture.', url: 'https://www.drift.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=drift.com', dataAiHint: 'conversational marketing', pricing: 'Paid' },
            { name: 'Intercom', description: 'Capture and qualify leads with targeted messages.', url: 'https://www.intercom.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=intercom.com', dataAiHint: 'lead qualification', pricing: 'Paid' },
            { name: 'Botsify', description: 'Create lead generation chatbots for your website.', url: 'https://botsify.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=botsify.com', dataAiHint: 'website chatbot', pricing: 'Paid' },
            { name: 'Chatfuel', description: 'Automate lead generation on social media.', url: 'https://chatfuel.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=chatfuel.com', dataAiHint: 'social media bot', pricing: 'Freemium' },
            { name: 'ManyChat', description: 'Automate interactive conversations in Instagram DMs, Facebook Messenger.', url: 'https://manychat.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=manychat.com', dataAiHint: 'messenger marketing', pricing: 'Freemium' },
            { name: 'Gobot', description: 'Turn more website visitors into qualified leads.', url: 'https://getgobot.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gobot.io', dataAiHint: 'qualified leads', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Website Chatbots",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ChatBot.com', description: 'All-in-one platform to create and manage chatbots for your website.', url: 'https://www.chatbot.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=chatbot.com', dataAiHint: 'chatbot builder', pricing: 'Paid' },
            { name: 'Ada', description: 'An AI-powered customer service automation platform.', url: 'https://www.ada.cx/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ada.cx', dataAiHint: 'service automation', pricing: 'Paid' },
            { name: 'HubSpot Chatbot Builder', description: 'Free chatbot builder to automate lead generation and support.', url: 'https://www.hubspot.com/products/marketing/chatbot-builder', image: 'https://www.google.com/s2/favicons?sz=128&domain=hubspot.com', dataAiHint: 'free chatbot', pricing: 'Free' },
            { name: 'Drift', description: 'Conversational AI for sales and marketing on your website.', url: 'https://www.drift.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=drift.com', dataAiHint: 'conversational marketing', pricing: 'Paid' },
            { name: 'Tidio', description: 'Live chat and chatbots for website engagement.', url: 'https://www.tidio.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tidio.com', dataAiHint: 'website chat', pricing: 'Freemium' },
            { name: 'LiveChat', description: 'Add a chat widget with AI capabilities to your site.', url: 'https://www.livechat.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=livechat.com', dataAiHint: 'chat widget', pricing: 'Paid' },
            { name: 'Botsify', description: 'Create automated chatbots for your website.', url: 'https://botsify.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=botsify.com', dataAiHint: 'website bots', pricing: 'Paid' },
            { name: 'Freshchat', description: 'Modern messaging software for your website.', url: 'https://www.freshworks.com/live-chat-software/', image: 'https://www.google.com/s2/favicons?sz=128&domain=freshworks.com', dataAiHint: 'messaging software', pricing: 'Freemium' },
            { name: 'Verloop.io', description: 'Conversational AI platform for customer engagement.', url: 'https://verloop.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=verloop.io', dataAiHint: 'customer engagement', pricing: 'Paid' },
            { name: 'Landbot', description: 'Build conversational experiences for your website.', url: 'https://landbot.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=landbot.io', dataAiHint: 'conversational experiences', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI E-commerce Chatbots",
        icon: <ShoppingCart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Gorgias', description: 'Customer service platform designed for e-commerce stores.', url: 'https://www.gorgias.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gorgias.com', dataAiHint: 'ecommerce support', pricing: 'Paid' },
            { name: 'Chatfuel', description: 'No-code chatbot platform for Facebook, Instagram, and your website.', url: 'https://chatfuel.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=chatfuel.com', dataAiHint: 'no-code chatbot', pricing: 'Freemium' },
            { name: 'Octane AI', description: 'Quiz and conversational marketing for Shopify.', url: 'https://www.octaneai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=octaneai.com', dataAiHint: 'shopify quiz', pricing: 'Paid' },
            { name: 'Tidio', description: 'Engage e-commerce customers with live chat and chatbots.', url: 'https://www.google.com/s2/favicons?sz=128&domain=tidio.com', image: 'https://www.google.com/s2/favicons?sz=128&domain=tidio.com', dataAiHint: 'live chat', pricing: 'Freemium' },
            { name: 'LiveChat', description: 'AI chatbot for e-commerce sales and support.', url: 'https://www.livechat.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=livechat.com', dataAiHint: 'ecommerce sales', pricing: 'Paid' },
            { name: 'Verloop.io', description: 'Conversational AI for e-commerce brands.', url: 'https://verloop.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=verloop.io', dataAiHint: 'conversational commerce', pricing: 'Paid' },
            { name: 'Botsify', description: 'Create AI chatbots for your online store.', url: 'https://botsify.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=botsify.com', dataAiHint: 'online store bot', pricing: 'Paid' },
            { name: 'MobileMonkey', description: 'OmniChat marketing platform for e-commerce.', url: 'https://mobilemonkey.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mobilemonkey.com', dataAiHint: 'omnichat marketing', pricing: 'Paid' },
            { name: 'ManyChat', description: 'Automate conversations on Instagram and Facebook for e-commerce.', url: 'https://manychat.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=manychat.com', dataAiHint: 'social commerce', pricing: 'Freemium' },
            { name: 'Jumper.ai', description: 'The all-in-one conversational commerce platform.', url: 'https://jumper.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jumper.ai', dataAiHint: 'conversational commerce', pricing: 'Paid' },
        ]
    },
    {
        title: "AI WhatsApp Chatbots",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'WATI', description: 'WhatsApp API for customer communication and engagement.', url: 'https://www.wati.io/', image: 'https://picsum.photos/seed/wati/600/400', dataAiHint: 'whatsapp api', pricing: 'Paid' },
            { name: 'Twilio', description: 'Build WhatsApp chatbots and more on a flexible API platform.', url: 'https://www.twilio.com/whatsapp', image: 'https://picsum.photos/seed/twilio-whatsapp/600/400', dataAiHint: 'communication api', pricing: 'Paid' },
            { name: 'MessageBird', description: 'Omnichannel communications platform including WhatsApp.', url: 'https://www.messagebird.com/', image: 'https://picsum.photos/seed/messagebird/600/400', dataAiHint: 'omnichannel', pricing: 'Paid' },
            { name: 'Intercom', description: 'Integrate WhatsApp for customer support.', url: 'https://www.intercom.com/whatsapp', image: 'https://picsum.photos/seed/intercom-whatsapp/600/400', dataAiHint: 'customer support', pricing: 'Paid' },
            { name: 'Zendesk', description: 'Connect with customers on WhatsApp.', url: 'https://www.zendesk.com/whatsapp/', image: 'https://picsum.photos/seed/zendesk-whatsapp/600/400', dataAiHint: 'zendesk chat', pricing: 'Paid' },
            { name: 'Freshworks', description: 'WhatsApp Business for customer engagement.', url: 'https://www.freshworks.com/whatsapp-business/', image: 'https://picsum.photos/seed/freshworks-whatsapp/600/400', dataAiHint: 'customer engagement', pricing: 'Paid' },
            { name: 'Gupshup', description: 'Conversational messaging platform.', url: 'https://www.gupshup.io/', image: 'https://picsum.photos/seed/gupshup-whatsapp/600/400', dataAiHint: 'messaging platform', pricing: 'Paid' },
            { name: 'Yellow.ai', description: 'Conversational AI platform for automating chats on WhatsApp.', url: 'https://yellow.ai/', image: 'https://picsum.photos/seed/yellowai-whatsapp/600/400', dataAiHint: 'conversational ai', pricing: 'Paid' },
            { name: 'Verloop.io', description: 'Build automated chatbots for WhatsApp.', url: 'https://verloop.io/', image: 'https://picsum.photos/seed/verloop-whatsapp/600/400', dataAiHint: 'whatsapp automation', pricing: 'Paid' },
            { name: 'Botsify', description: 'Create a chatbot for WhatsApp without any code.', url: 'https://botsify.com/whatsapp-chatbot', image: 'https://picsum.photos/seed/botsify-whatsapp/600/400', dataAiHint: 'no-code chatbot', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Telegram Chatbots",
        icon: <Send className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ManyChat', description: 'Build chatbot for Telegram and other platforms.', url: 'https://manychat.com/', image: 'https://picsum.photos/seed/manychat-tele/600/400', dataAiHint: 'telegram bot', pricing: 'Freemium' },
            { name: 'Chatfuel', description: 'No-code chatbot builder for Telegram.', url: 'https://chatfuel.com/', image: 'https://picsum.photos/seed/chatfuel-tele/600/400', dataAiHint: 'telegram builder', pricing: 'Freemium' },
            { name: 'Bots.Business', description: 'A platform to build chatbots for Telegram.', url: 'https://bots.business/', image: 'https://picsum.photos/seed/bots-business/600/400', dataAiHint: 'chatbot platform', pricing: 'Freemium' },
            { name: 'TARS', description: 'Create chatbot landing pages and Telegram bots.', url: 'https://hellotars.com/', image: 'https://picsum.photos/seed/tars-telegram/600/400', dataAiHint: 'landing page bot', pricing: 'Paid' },
            { name: 'Xenioo', description: 'Multichannel chatbot platform with Telegram support.', url: 'https://www.xenioo.com/', image: 'https://picsum.photos/seed/xenioo-telegram/600/400', dataAiHint: 'multichannel bot', pricing: 'Paid' },
            { name: 'Flow XO', description: 'Build and deploy chatbots for different platforms, including Telegram.', url: 'https://flowxo.com/', image: 'https://picsum.photos/seed/flowxo-telegram/600/400', dataAiHint: 'multi-platform bot', pricing: 'Freemium' },
            { name: 'SnatchBot', description: 'Create smart chatbots for any channel.', url: 'https://snatchbot.me/', image: 'https://picsum.photos/seed/snatchbot-telegram/600/400', dataAiHint: 'smart chatbot', pricing: 'Freemium' },
            { name: 'MobileMonkey', description: 'Build chatbots for Telegram.', url: 'https://mobilemonkey.com/', image: 'https://picsum.photos/seed/mobilemonkey-tele/600/400', dataAiHint: 'omnichat', pricing: 'Paid' },
            { name: 'Rebot.me', description: 'Create your own personal chatbot for free.', url: 'https://www.rebot.me/', image: 'https://picsum.photos/seed/rebotme-telegram/600/400', dataAiHint: 'personal chatbot', pricing: 'Free' },
            { name: 'Pandorabots', description: 'A platform for building and deploying chatbots.', url: 'https://www.pandorabots.com/', image: 'https://picsum.photos/seed/pandorabots-tele/600/400', dataAiHint: 'aiml chatbot', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Messenger Chatbots",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ManyChat', description: 'Leading chatbot builder for Facebook Messenger.', url: 'https://manychat.com/', image: 'https://picsum.photos/seed/manychat-msg/600/400', dataAiHint: 'messenger bot', pricing: 'Freemium' },
            { name: 'Chatfuel', description: 'Create bots for Messenger without coding.', url: 'https://chatfuel.com/', image: 'https://picsum.photos/seed/chatfuel-msg/600/400', dataAiHint: 'no-code bot', pricing: 'Freemium' },
            { name: 'MobileMonkey', description: 'OmniChat marketing platform for Messenger.', url: 'https://mobilemonkey.com/', image: 'https://picsum.photos/seed/mobilemonkey-msg/600/400', dataAiHint: 'omnichat marketing', pricing: 'Paid' },
            { name: 'Tidio', description: 'Integrate live chat and chatbots with Messenger.', url: 'https://www.tidio.com/', image: 'https://picsum.photos/seed/tidio-msg/600/400', dataAiHint: 'live chat', pricing: 'Freemium' },
            { name: 'Botsify', description: 'Create AI chatbots for Facebook Messenger.', url: 'https://botsify.com/', image: 'https://picsum.photos/seed/botsify-msg/600/400', dataAiHint: 'ai chatbot', pricing: 'Paid' },
            { name: 'Flow XO', description: 'Build and deploy chatbots for different platforms.', url: 'https://flowxo.com/', image: 'https://picsum.photos/seed/flowxo-msg/600/400', dataAiHint: 'multi-platform bot', pricing: 'Freemium' },
            { name: 'ChatBot.com', description: 'Create chatbots for Messenger and other channels.', url: 'https://www.chatbot.com/', image: 'https://picsum.photos/seed/chatbotcom-msg/600/400', dataAiHint: 'chatbot platform', pricing: 'Paid' },
            { name: 'Gupshup', description: 'Conversational messaging platform for Messenger.', url: 'https://www.gupshup.io/', image: 'https://picsum.photos/seed/gupshup-msg/600/400', dataAiHint: 'messaging platform', pricing: 'Paid' },
            { name: 'ActiveChat', description: 'Live chat and chatbot tool for websites and messengers.', url: 'https://activechat.ai/', image: 'https://picsum.photos/seed/activechat-msg/600/400', dataAiHint: 'live chat tool', pricing: 'Paid' },
            { name: 'SnatchBot', description: 'Create smart chatbots for any channel.', url: 'https://snatchbot.me/', image: 'https://picsum.photos/seed/snatchbot-msg/600/400', dataAiHint: 'smart chatbot', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Conversational AI Platforms",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Rasa', description: 'Open source conversational AI to build text- and voice-based assistants.', url: 'https://rasa.com/', image: 'https://picsum.photos/seed/rasa-convo/600/400', dataAiHint: 'open source ai', pricing: 'Freemium' },
            { name: 'Google Dialogflow', description: 'A natural language understanding platform to design and integrate conversational user interfaces.', url: 'https://cloud.google.com/dialogflow', image: 'https://picsum.photos/seed/dialogflow/600/400', dataAiHint: 'google nlu', pricing: 'Paid' },
            { name: 'Amazon Lex', description: 'Service for building conversational interfaces using voice and text.', url: 'https://aws.amazon.com/lex/', image: 'https://picsum.photos/seed/amazon-lex/600/400', dataAiHint: 'aws chatbot', pricing: 'Paid' },
            { name: 'Kore.ai', description: 'Enterprise conversational AI platform.', url: 'https://kore.ai/', image: 'https://picsum.photos/seed/koreai/600/400', dataAiHint: 'enterprise ai', pricing: 'Paid' },
            { name: 'Amelia', description: 'The leading enterprise conversational AI.', url: 'https://amelia.ai/', image: 'https://picsum.photos/seed/amelia-ai/600/400', dataAiHint: 'conversational ai', pricing: 'Paid' },
            { name: 'Haptik', description: 'Conversational AI for businesses.', url: 'https://haptik.ai/', image: 'https://picsum.photos/seed/haptik-ai/600/400', dataAiHint: 'business ai', pricing: 'Paid' },
            { name: 'Cognigy', description: 'Enterprise conversational AI.', url: 'https://www.cognigy.com/', image: 'https://picsum.photos/seed/cognigy/600/400', dataAiHint: 'enterprise conversation', pricing: 'Paid' },
            { name: 'Verloop.io', description: 'Conversational AI platform for customer support.', url: 'https://verloop.io/', image: 'https://picsum.photos/seed/verloop-convo/600/400', dataAiHint: 'customer support', pricing: 'Paid' },
            { name: 'Yellow.ai', description: 'Total Experience Automation Platform.', url: 'https://yellow.ai/', image: 'https://picsum.photos/seed/yellowai-convo/600/400', dataAiHint: 'experience automation', pricing: 'Paid' },
            { name: 'IBM Watson Assistant', description: 'Build powerful AI assistants for any channel.', url: 'https://www.ibm.com/products/watson-assistant', image: 'https://picsum.photos/seed/watson-assistant/600/400', dataAiHint: 'ibm ai', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Multilingual Chatbots",
        icon: <Languages className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Solvvy', description: 'Effortless, next-gen chatbot and automation platform.', url: 'https://solvvy.com/', image: 'https://picsum.photos/seed/solvvy/600/400', dataAiHint: 'multilingual chatbot', pricing: 'Paid' },
            { name: 'Mindsay', description: 'Build better customer relationships with conversational AI.', url: 'https://mindsay.com/', image: 'https://picsum.photos/seed/mindsay/600/400', dataAiHint: 'customer relationships', pricing: 'Paid' },
            { name: 'Tidio', description: 'Live chat and chatbots supporting multiple languages.', url: 'https://www.tidio.com/', image: 'https://picsum.photos/seed/tidio-multi/600/400', dataAiHint: 'live chat', pricing: 'Freemium' },
            { name: 'Zendesk', description: 'Customer service platform with multilingual capabilities.', url: 'https://www.zendesk.com/', image: 'https://picsum.photos/seed/zendesk-multi/600/400', dataAiHint: 'customer service', pricing: 'Paid' },
            { name: 'Intercom', description: 'Customer service platform with multilingual support.', url: 'https://www.intercom.com/', image: 'https://picsum.photos/seed/intercom-multi/600/400', dataAiHint: 'customer support', pricing: 'Paid' },
            { name: 'Drift', description: 'Conversational AI with language detection.', url: 'https://www.drift.com/', image: 'https://picsum.photos/seed/drift-multi/600/400', dataAiHint: 'language detection', pricing: 'Paid' },
            { name: 'Verloop.io', description: 'Conversational AI platform with multilingual chatbots.', url: 'https://verloop.io/', image: 'https://picsum.photos/seed/verloop-multi/600/400', dataAiHint: 'conversational platform', pricing: 'Paid' },
            { name: 'Yellow.ai', description: 'Automate conversations in 100+ languages.', url: 'https://yellow.ai/', image: 'https://picsum.photos/seed/yellowai-multi/600/400', dataAiHint: 'ai automation', pricing: 'Paid' },
            { name: 'Botsify', description: 'Create chatbots in multiple languages.', url: 'https://botsify.com/', image: 'https://picsum.photos/seed/botsify-multi/600/400', dataAiHint: 'chatbot creator', pricing: 'Paid' },
            { name: 'Gupshup', description: 'Conversational messaging platform for multiple languages.', url: 'https://www.gupshup.io/', image: 'https://picsum.photos/seed/gupshup-multi/600/400', dataAiHint: 'messaging platform', pricing: 'Paid' },
        ]
    },
    {
        title: "AI No-Code Chatbot Builders",
        icon: <Puzzle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Landbot', description: 'No-code chatbot builder for creating conversational experiences.', url: 'https://landbot.io/', image: 'https://picsum.photos/seed/landbot-nocode/600/400', dataAiHint: 'no-code builder', pricing: 'Freemium' },
            { name: 'Voiceflow', description: 'Design, prototype, and launch voice & chat assistants.', url: 'https://www.voiceflow.com/', image: 'https://picsum.photos/seed/voiceflow/600/400', dataAiHint: 'voice design', pricing: 'Freemium' },
            { name: 'Tars', description: 'Chatbot platform to create conversational landing pages.', url: 'https://hellotars.com/', image: 'https://picsum.photos/seed/tars-builder/600/400', dataAiHint: 'landing page', pricing: 'Paid' },
            { name: 'Tidio', description: 'Create chatbots with a visual editor, no coding needed.', url: 'https://www.tidio.com/', image: 'https://picsum.photos/seed/tidio-nocode/600/400', dataAiHint: 'visual editor', pricing: 'Freemium' },
            { name: 'Drift', description: 'No-code chatbot builder for sales and marketing.', url: 'https://www.drift.com/', image: 'https://picsum.photos/seed/drift-nocode/600/400', dataAiHint: 'sales marketing', pricing: 'Paid' },
            { name: 'Intercom', description: 'Build custom bots with a no-code editor.', url: 'https://www.intercom.com/', image: 'https://picsum.photos/seed/intercom-nocode/600/400', dataAiHint: 'custom bots', pricing: 'Paid' },
            { name: 'Botsify', description: 'Create chatbots for various platforms without coding.', url: 'https://botsify.com/', image: 'https://picsum.photos/seed/botsify-nocode/600/400', dataAiHint: 'chatbot creator', pricing: 'Paid' },
            { name: 'Chatfuel', description: 'No-code chatbot platform for social media.', url: 'https://chatfuel.com/', image: 'https://picsum.photos/seed/chatfuel-nocode/600/400', dataAiHint: 'social media bots', pricing: 'Freemium' },
            { name: 'MobileMonkey', description: 'Build chatbots for multiple channels without code.', url: 'https://mobilemonkey.com/', image: 'https://picsum.photos/seed/mobilemonkey-nocode/600/400', dataAiHint: 'omnichat', pricing: 'Paid' },
            { name: 'Flow XO', description: 'Build and deploy chatbots for different platforms.', url: 'https://flowxo.com/', image: 'https://picsum.photos/seed/flowxo-nocode/600/400', dataAiHint: 'multi-platform', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Custom Chatbot Development",
        icon: <Terminal className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Botpress', description: 'The open-source, extensible chatbot builder for developers.', url: 'https://botpress.com/', image: 'https://picsum.photos/seed/botpress/600/400', dataAiHint: 'developer chatbot', pricing: 'Freemium' },
            { name: 'Microsoft Bot Framework', description: 'Build and connect intelligent bots.', url: 'https://dev.botframework.com/', image: 'https://picsum.photos/seed/ms-bot-framework/600/400', dataAiHint: 'intelligent bots', pricing: 'Free' },
            { name: 'Rasa', description: 'Open source conversational AI for developers.', url: 'https://rasa.com/', image: 'https://picsum.photos/seed/rasa-dev/600/400', dataAiHint: 'open source ai', pricing: 'Freemium' },
            { name: 'Google Dialogflow', description: 'A natural language understanding platform for building conversational AI.', url: 'https://cloud.google.com/dialogflow', image: 'https://picsum.photos/seed/dialogflow-dev/600/400', dataAiHint: 'google nlu', pricing: 'Paid' },
            { name: 'Amazon Lex', description: 'Service for building conversational interfaces.', url: 'https://aws.amazon.com/lex/', image: 'https://picsum.photos/seed/lex-dev/600/400', dataAiHint: 'aws chatbot', pricing: 'Paid' },
            { name: 'IBM Watson Assistant', description: 'Build AI assistants for any channel.', url: 'https://www.ibm.com/products/watson-assistant', image: 'https://picsum.photos/seed/watson-dev/600/400', dataAiHint: 'ibm ai', pricing: 'Freemium' },
            { name: 'Kore.ai', description: 'Enterprise conversational AI platform.', url: 'https://kore.ai/', image: 'https://picsum.photos/seed/koreai-dev/600/400', dataAiHint: 'enterprise ai', pricing: 'Paid' },
            { name: 'Cognigy', description: 'Enterprise conversational AI for developers.', url: 'https://www.cognigy.com/', image: 'https://picsum.photos/seed/cognigy-dev/600/400', dataAiHint: 'enterprise conversation', pricing: 'Paid' },
            { name: 'Haptik', description: 'Conversational AI for businesses.', url: 'https://haptik.ai/', image: 'https://picsum.photos/seed/haptik-dev/600/400', dataAiHint: 'business ai', pricing: 'Paid' },
            { name: 'Yellow.ai', description: 'Total Experience Automation Platform for developers.', url: 'https://yellow.ai/', image: 'https://picsum.photos/seed/yellowai-dev/600/400', dataAiHint: 'experience automation', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Helpdesk Assistants",
        icon: <HelpCircle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'AnswerIQ', description: 'AI for customer support teams.', url: 'https://www.answeriq.com/', image: 'https://picsum.photos/seed/answeriq/600/400', dataAiHint: 'triage support', pricing: 'Paid' },
            { name: 'Zendesk', description: 'Customer service software with AI-powered automations.', url: 'https://www.zendesk.com/', image: 'https://picsum.photos/seed/zendesk-help/600/400', dataAiHint: 'customer service', pricing: 'Paid' },
            { name: 'Freshdesk', description: 'AI-powered helpdesk software.', url: 'https://freshdesk.com/', image: 'https://picsum.photos/seed/freshdesk-help/600/400', dataAiHint: 'ai helpdesk', pricing: 'Freemium' },
            { name: 'Help Scout', description: 'Help desk software with AI features.', url: 'https://www.helpscout.com/', image: 'https://picsum.photos/seed/helpscout-help/600/400', dataAiHint: 'shared inbox', pricing: 'Paid' },
            { name: 'LiveChat', description: 'Live chat with AI-powered chatbot capabilities.', url: 'https://www.livechat.com/', image: 'https://picsum.photos/seed/livechat-help/600/400', dataAiHint: 'live chat', pricing: 'Paid' },
            { name: 'Intercom', description: 'Conversational support with AI chatbots.', url: 'https://www.intercom.com/', image: 'https://picsum.photos/seed/intercom-help/600/400', dataAiHint: 'conversational support', pricing: 'Paid' },
            { name: 'Tidio', description: 'AI-powered chatbots for customer support.', url: 'https://www.tidio.com/', image: 'https://picsum.photos/seed/tidio-help/600/400', dataAiHint: 'ai chatbots', pricing: 'Freemium' },
            { name: 'Gorgias', description: 'Helpdesk for e-commerce stores with automation.', url: 'https://www.gorgias.com/', image: 'https://picsum.photos/seed/gorgias-help/600/400', dataAiHint: 'ecommerce helpdesk', pricing: 'Paid' },
            { name: 'Kustomer', description: 'Omnichannel CRM for customer service.', url: 'https://www.kustomer.com/', image: 'https://picsum.photos/seed/kustomer-help/600/400', dataAiHint: 'omnichannel crm', pricing: 'Paid' },
            { name: 'HappyFox', description: 'Help desk and ticketing software.', url: 'https://www.happyfox.com/', image: 'https://picsum.photos/seed/happyfox-help/600/400', dataAiHint: 'ticketing software', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Internal Team Assistants",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Spoke', description: 'A modern ticketing system for internal teams.', url: 'https://www.askspoke.com/', image: 'https://picsum.photos/seed/spoke-internal/600/400', dataAiHint: 'internal ticketing', pricing: 'Paid' },
            { name: 'Moveworks', description: 'AI platform for employee support.', url: 'https://www.moveworks.com/', image: 'https://picsum.photos/seed/moveworks/600/400', dataAiHint: 'employee support', pricing: 'Paid' },
            { name: 'AnswerIQ', description: 'AI for internal support teams.', url: 'https://www.answeriq.com/', image: 'https://picsum.photos/seed/answeriq-internal/600/400', dataAiHint: 'internal support', pricing: 'Paid' },
            { name: 'Leena AI', description: 'AI-powered employee experience platform.', url: 'https://leena.ai/', image: 'https://picsum.photos/seed/leena-ai/600/400', dataAiHint: 'employee experience', pricing: 'Paid' },
            { name: 'Clevy', description: 'Build chatbots for internal use.', url: 'https://www.clevy.io/', image: 'https://picsum.photos/seed/clevy/600/400', dataAiHint: 'internal chatbots', pricing: 'Paid' },
            { name: 'atSpoke', description: 'Now part of Samson. Internal ticketing system.', url: 'https://www.samsonco.com/atspoke', image: 'https://picsum.photos/seed/atspoke/600/400', dataAiHint: 'ticketing system', pricing: 'Paid' },
            { name: 'Talla', description: 'AI-powered knowledge and automation platform.', url: 'https://www.talla.com/', image: 'https://picsum.photos/seed/talla/600/400', dataAiHint: 'knowledge platform', pricing: 'Paid' },
            { name: 'Capacity', description: 'AI-powered support automation platform.', url: 'https://capacity.com/', image: 'https://picsum.photos/seed/capacity/600/400', dataAiHint: 'support automation', pricing: 'Paid' },
            { name: 'Guru', description: 'A knowledge management solution that works in your workflow.', url: 'https://www.getguru.com/', image: 'https://picsum.photos/seed/guru-internal/600/400', dataAiHint: 'company wiki', pricing: 'Freemium' },
            { name: 'Slab', description: 'A knowledge hub for the modern workplace.', url: 'https://slab.com/', image: 'https://picsum.photos/seed/slab-internal/600/400', dataAiHint: 'knowledge hub', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Knowledge Base Chatbots",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Stonly', description: 'Create interactive knowledge bases and guides.', url: 'https://stonly.com/', image: 'https://picsum.photos/seed/stonly/600/400', dataAiHint: 'interactive guides', pricing: 'Paid' },
            { name: 'Helpjuice', description: 'Easy-to-use knowledge base software.', url: 'https://helpjuice.com/', image: 'https://picsum.photos/seed/helpjuice/600/400', dataAiHint: 'knowledge base', pricing: 'Paid' },
            { name: 'Zendesk Guide', description: 'Smart knowledge base software.', url: 'https://www.zendesk.com/guide/', image: 'https://picsum.photos/seed/zendesk-guide/600/400', dataAiHint: 'smart knowledge base', pricing: 'Paid' },
            { name: 'Intercom Articles', description: 'Build a help center for your customers.', url: 'https://www.intercom.com/help-center-software', image: 'https://picsum.photos/seed/intercom-articles/600/400', dataAiHint: 'help center', pricing: 'Paid' },
            { name: 'Help Scout Docs', description: 'Create a self-service knowledge base.', url: 'https://www.helpscout.com/docs/', image: 'https://picsum.photos/seed/helpscout-docs/600/400', dataAiHint: 'self-service', pricing: 'Paid' },
            { name: 'Guru', description: 'A knowledge management solution that works in your workflow.', url: 'https://www.getguru.com/', image: 'https://picsum.photos/seed/guru-kb/600/400', dataAiHint: 'company wiki', pricing: 'Freemium' },
            { name: 'Document360', description: 'Knowledge base software for your customers and team.', url: 'https://document360.com/', image: 'https://picsum.photos/seed/document360/600/400', dataAiHint: 'team knowledge', pricing: 'Paid' },
            { name: 'Bloomfire', description: 'Knowledge engagement platform.', url: 'https://bloomfire.com/', image: 'https://picsum.photos/seed/bloomfire-kb/600/400', dataAiHint: 'knowledge sharing', pricing: 'Paid' },
            { name: 'Tettra', description: 'A simple, smart wiki for your team.', url: 'https://tettra.com/', image: 'https://picsum.photos/seed/tettra-kb/600/400', dataAiHint: 'internal wiki', pricing: 'Freemium' },
            { name: 'Slab', description: 'A knowledge hub for the modern workplace.', url: 'https://slab.com/', image: 'https://picsum.photos/seed/slab-kb/600/400', dataAiHint: 'knowledge hub', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI FAQ Chatbots",
        icon: <HelpCircle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Flow XO', description: 'Build and deploy chatbots for different platforms.', url: 'https://flowxo.com/', image: 'https://picsum.photos/seed/flowxo/600/400', dataAiHint: 'multi-platform', pricing: 'Freemium' },
            { name: 'Tidio', description: 'Use chatbots to answer common questions instantly.', url: 'https://www.tidio.com/', image: 'https://picsum.photos/seed/tidio-faq/600/400', dataAiHint: 'faq bot', pricing: 'Freemium' },
            { name: 'Drift', description: 'Automate answers to frequently asked questions.', url: 'https://www.drift.com/', image: 'https://picsum.photos/seed/drift-faq/600/400', dataAiHint: 'conversational ai', pricing: 'Paid' },
            { name: 'Intercom', description: 'Build bots to resolve common customer questions.', url: 'https://www.intercom.com/', image: 'https://picsum.photos/seed/intercom-faq/600/400', dataAiHint: 'customer questions', pricing: 'Paid' },
            { name: 'Zendesk', description: 'Use AI to deflect common questions and guide customers.', url: 'https://www.zendesk.com/', image: 'https://picsum.photos/seed/zendesk-faq/600/400', dataAiHint: 'ai support', pricing: 'Paid' },
            { name: 'LiveChat', description: 'Automate FAQs with chatbots.', url: 'https://www.livechat.com/', image: 'https://picsum.photos/seed/livechat-faq/600/400', dataAiHint: 'chat automation', pricing: 'Paid' },
            { name: 'Botsify', description: 'Create FAQ chatbots for your website or Messenger.', url: 'https://botsify.com/', image: 'https://picsum.photos/seed/botsify-faq/600/400', dataAiHint: 'messenger bot', pricing: 'Paid' },
            { name: 'ChatBot.com', description: 'Build chatbots to handle frequently asked questions.', url: 'https://www.chatbot.com/', image: 'https://picsum.photos/seed/chatbotcom-faq/600/400', dataAiHint: 'chatbot builder', pricing: 'Paid' },
            { name: 'Freshchat', description: 'Deploy chatbots to answer common queries.', url: 'https://www.freshworks.com/live-chat-software/', image: 'https://picsum.photos/seed/freshchat-faq/600/400', dataAiHint: 'messaging software', pricing: 'Freemium' },
            { name: 'Verloop.io', description: 'Automate your customer support with FAQ bots.', url: 'https://verloop.io/', image: 'https://picsum.photos/seed/verloop-faq/600/400', dataAiHint: 'support automation', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Booking & Scheduling Bots",
        icon: <Calendar className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Calendly', description: 'Automated scheduling software.', url: 'https://calendly.com/', image: 'https://picsum.photos/seed/calendly-bot/600/400', dataAiHint: 'appointment scheduling', pricing: 'Freemium' },
            { name: 'x.ai', description: 'AI scheduling assistant (acquired by Bizzabo).', url: 'https://www.bizzabo.com/x-ai-acquisition', image: 'https://picsum.photos/seed/xai/600/400', dataAiHint: 'ai scheduling', pricing: 'Paid' },
            { name: 'Drift', description: 'Book meetings with leads through a chatbot.', url: 'https://www.drift.com/', image: 'https://picsum.photos/seed/drift-booking/600/400', dataAiHint: 'meeting booking', pricing: 'Paid' },
            { name: 'Tidio', description: 'Use chatbots to schedule appointments.', url: 'https://www.tidio.com/', image: 'https://picsum.photos/seed/tidio-booking/600/400', dataAiHint: 'appointment bot', pricing: 'Freemium' },
            { name: 'HubSpot Meetings', description: 'Free meeting and appointment scheduler.', url: 'https://www.hubspot.com/products/sales/meeting-scheduler', image: 'https://picsum.photos/seed/hubspot-meetings/600/400', dataAiHint: 'free scheduler', pricing: 'Free' },
            { name: 'Zoom.ai', description: 'AI-powered meeting scheduling assistant.', url: 'https://zoom.ai/', image: 'https://picsum.photos/seed/zoomai-booking/600/400', dataAiHint: 'meeting assistant', pricing: 'Paid' },
            { name: 'Clara', description: 'An AI employee that schedules meetings.', url: 'https://claralabs.com/', image: 'https://picsum.photos/seed/clara-booking/600/400', dataAiHint: 'ai employee', pricing: 'Paid' },
            { name: 'Sembly', description: 'AI meeting assistant with scheduling capabilities.', url: 'https://www.sembly.ai/', image: 'https://picsum.photos/seed/sembly-booking/600/400', dataAiHint: 'meeting assistant', pricing: 'Freemium' },
            { name: 'Vyte', description: 'All-in-one scheduling tool.', url: 'https://vyte.in/', image: 'https://picsum.photos/seed/vyte-booking/600/400', dataAiHint: 'scheduling tool', pricing: 'Freemium' },
            { name: 'Acuity Scheduling', description: 'Online appointment scheduling software.', url: 'https://www.acuityscheduling.com/', image: 'https://picsum.photos/seed/acuity-booking/600/400', dataAiHint: 'online appointments', pricing: 'Paid' },
        ]
    },
    {
        title: "AI CRM Chatbots",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'HubSpot Chatbot Builder', description: 'Free chatbot builder integrated with your CRM.', url: 'https://www.hubspot.com/products/marketing/chatbot-builder', image: 'https://picsum.photos/seed/hubspot-crmbot/600/400', dataAiHint: 'crm chatbot', pricing: 'Free' },
            { name: 'Zendesk', description: 'Integrate AI chatbots with your customer service CRM.', url: 'https://www.zendesk.com/', image: 'https://picsum.photos/seed/zendesk-crm/600/400', dataAiHint: 'customer service', pricing: 'Paid' },
            { name: 'Salesforce Einstein', description: 'AI for the world\'s #1 CRM.', url: 'https://www.salesforce.com/products/einstein/', image: 'https://picsum.photos/seed/einstein-crm/600/400', dataAiHint: 'sales ai', pricing: 'Paid' },
            { name: 'Intercom', description: 'Conversational support platform with CRM capabilities.', url: 'https://www.intercom.com/', image: 'https://picsum.photos/seed/intercom-crm/600/400', dataAiHint: 'conversational support', pricing: 'Paid' },
            { name: 'Drift', description: 'Conversational marketing and sales platform.', url: 'https://www.drift.com/', image: 'https://picsum.photos/seed/drift-crm/600/400', dataAiHint: 'conversational marketing', pricing: 'Paid' },
            { name: 'Tidio', description: 'Live chat and chatbot solution with simple CRM.', url: 'https://www.tidio.com/', image: 'https://picsum.photos/seed/tidio-crm/600/400', dataAiHint: 'live chat', pricing: 'Freemium' },
            { name: 'Gorgias', description: 'Helpdesk for e-commerce stores with deep CRM integration.', url: 'https://www.gorgias.com/', image: 'https://picsum.photos/seed/gorgias-crm/600/400', dataAiHint: 'ecommerce helpdesk', pricing: 'Paid' },
            { name: 'LiveChat', description: 'Live chat with built-in CRM.', url: 'https://www.livechat.com/', image: 'https://picsum.photos/seed/livechat-crm/600/400', dataAiHint: 'chat crm', pricing: 'Paid' },
            { name: 'Freshworks', description: 'Customer service suite with CRM and chatbots.', url: 'https://www.freshworks.com/', image: 'https://picsum.photos/seed/freshworks-crm/600/400', dataAiHint: 'customer suite', pricing: 'Paid' },
            { name: 'Zoho CRM', description: 'Online CRM with AI-powered assistant, Zia.', url: 'https://www.zoho.com/crm/', image: 'https://picsum.photos/seed/zoho-crm-bot/600/400', dataAiHint: 'zia ai', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Analytics for Chatbots",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Dashbot', description: 'Analytics for chatbots and voice assistants.', url: 'https://www.dashbot.io/', image: 'https://picsum.photos/seed/dashbot/600/400', dataAiHint: 'chatbot analytics', pricing: 'Freemium' },
            { name: 'Chatbase', description: 'Analytics for any bot.', url: 'https://chatbase.com/', image: 'https://picsum.photos/seed/chatbase-analytics/600/400', dataAiHint: 'bot analytics', pricing: 'Paid' },
            { name: 'Botanalytics', description: 'Conversational analytics for bots.', url: 'https://botanalytics.co/', image: 'https://picsum.photos/seed/botanalytics/600/400', dataAiHint: 'conversational analytics', pricing: 'Paid' },
            { name: 'Janis', description: 'AI assistant for managing chatbots with analytics.', url: 'https://www.janis.ai/', image: 'https://picsum.photos/seed/janis-analytics/600/400', dataAiHint: 'ai assistant', pricing: 'Paid' },
            { name: 'Dialogflow Analytics', description: 'Built-in analytics for Google Dialogflow bots.', url: 'https://cloud.google.com/dialogflow/docs/analytics-overview', image: 'https://picsum.photos/seed/dialogflow-analytics/600/400', dataAiHint: 'dialogflow', pricing: 'Paid' },
            { name: 'Rasa X', description: 'A toolset to learn from real conversations and improve your AI assistant.', url: 'https://rasa.com/docs/rasa-x/', image: 'https://picsum.photos/seed/rasa-x/600/400', dataAiHint: 'rasa toolset', pricing: 'Free' },
            { name: 'Azure Bot Analytics', description: 'Analytics for bots built with Microsoft Bot Framework.', url: 'https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-telemetry-analytics', image: 'https://picsum.photos/seed/azure-bot-analytics/600/400', dataAiHint: 'azure analytics', pricing: 'Paid' },
            { name: 'Amazon Lex Analytics', description: 'Monitor and analyze your Lex bots.', url: 'https://aws.amazon.com/lex/', image: 'https://picsum.photos/seed/lex-analytics/600/400', dataAiHint: 'aws lex', pricing: 'Paid' },
            { name: 'Intercom Reports', description: 'Analytics for your Intercom bots and support.', url: 'https://www.intercom.com/reports', image: 'https://picsum.photos/seed/intercom-analytics/600/400', dataAiHint: 'support reports', pricing: 'Paid' },
            { name: 'Zendesk Explore', description: 'Analytics for customer service, including chatbot interactions.', url: 'https://www.zendesk.com/explore/', image: 'https://picsum.photos/seed/zendesk-analytics/600/400', dataAiHint: 'service analytics', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Sentiment-Aware Chatbots",
        icon: <Star className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'MonkeyLearn', description: 'Text analysis with machine learning.', url: 'https://monkeylearn.com/', image: 'https://picsum.photos/seed/monkeylearn/600/400', dataAiHint: 'text analysis', pricing: 'Freemium' },
            { name: 'IBM Watson Tone Analyzer', description: 'Uses linguistic analysis to detect emotional and language tones.', url: 'https://www.ibm.com/cloud/watson-tone-analyzer', image: 'https://picsum.photos/seed/watson-tone/600/400', dataAiHint: 'emotional tone', pricing: 'Freemium' },
            { name: 'Google Cloud Natural Language API', description: 'Analyze text for sentiment, entities, and syntax.', url: 'https://cloud.google.com/natural-language', image: 'https://picsum.photos/seed/gcp-nlp/600/400', dataAiHint: 'natural language', pricing: 'Paid' },
            { name: 'Amazon Comprehend', description: 'A natural language processing (NLP) service.', url: 'https://aws.amazon.com/comprehend/', image: 'https://picsum.photos/seed/comprehend/600/400', dataAiHint: 'aws nlp', pricing: 'Paid' },
            { name: 'Azure Text Analytics', description: 'NLP service for text mining and analysis.', url: 'https://azure.microsoft.com/en-us/products/cognitive-services/text-analytics/', image: 'https://picsum.photos/seed/azure-text/600/400', dataAiHint: 'text mining', pricing: 'Paid' },
            { name: 'Brandwatch', description: 'Consumer intelligence platform with sentiment analysis.', url: 'https://www.brandwatch.com/', image: 'https://picsum.photos/seed/brandwatch/600/400', dataAiHint: 'consumer intelligence', pricing: 'Paid' },
            { name: 'Talkwalker', description: 'Social listening and analytics platform.', url: 'https://www.talkwalker.com/', image: 'https://picsum.photos/seed/talkwalker/600/400', dataAiHint: 'social listening', pricing: 'Paid' },
            { name: 'Repustate', description: 'Sentiment analysis and text analytics API.', url: 'https://www.repustate.com/', image: 'https://picsum.photos/seed/repustate/600/400', dataAiHint: 'text analytics api', pricing: 'Paid' },
            { name: 'Clarabridge', description: 'Customer experience management.', url: 'https://www.clarabridge.com/', image: 'https://picsum.photos/seed/clarabridge/600/400', dataAiHint: 'cx management', pricing: 'Paid' },
            { name: 'Lexalytics', description: 'Text analytics and natural language processing.', url: 'https://www.lexalytics.com/', image: 'https://picsum.photos/seed/lexalytics/600/400', dataAiHint: 'text analytics', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Task Automation Assistants",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zapier', description: 'Automation for busy people.', url: 'https://zapier.com/', image: 'https://picsum.photos/seed/zapier-task/600/400', dataAiHint: 'app integration', pricing: 'Freemium' },
            { name: 'Make', description: 'Visually create, build, and automate.', url: 'https://www.make.com/', image: 'https://picsum.photos/seed/make-task/600/400', dataAiHint: 'visual automation', pricing: 'Freemium' },
            { name: 'IFTTT', description: 'If This Then That. Simple app connections.', url: 'https://ifttt.com/', image: 'https://picsum.photos/seed/ifttt-task/600/400', dataAiHint: 'applets', pricing: 'Freemium' },
            { name: 'n8n', description: 'Extendable workflow automation.', url: 'https://n8n.io/', image: 'https://picsum.photos/seed/n8n-task/600/400', dataAiHint: 'open source automation', pricing: 'Freemium' },
            { name: 'Bardeen', description: 'AI meets automations. Automate manual workflows.', url: 'https://www.bardeen.ai/', image: 'https://picsum.photos/seed/bardeen-task/600/400', dataAiHint: 'browser automation', pricing: 'Freemium' },
            { name: 'Microsoft Power Automate', description: 'Automate tasks and processes.', url: 'https://powerautomate.microsoft.com/', image: 'https://picsum.photos/seed/powerautomate-task/600/400', dataAiHint: 'process automation', pricing: 'Freemium' },
            { name: 'UiPath', description: 'Leading platform for enterprise automation.', url: 'https://www.uipath.com/', image: 'https://picsum.photos/seed/uipath-task/600/400', dataAiHint: 'rpa platform', pricing: 'Paid' },
            { name: 'Automation Anywhere', description: 'Cloud-native intelligent automation platform.', url: 'https://www.automationanywhere.com/', image: 'https://picsum.photos/seed/aa-task/600/400', dataAiHint: 'intelligent automation', pricing: 'Paid' },
            { name: 'Blue Prism', description: 'Intelligent automation for the enterprise.', url: 'https://www.blueprism.com/', image: 'https://picsum.photos/seed/blueprism-task/600/400', dataAiHint: 'enterprise rpa', pricing: 'Paid' },
            { name: 'Robocorp', description: 'Open-source stack for robotic process automation.', url: 'https://robocorp.com/', image: 'https://picsum.photos/seed/robocorp-task/600/400', dataAiHint: 'open source rpa', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Workflow Assistants",
        icon: <Workflow className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'n8n', description: 'Extendable workflow automation.', url: 'https://n8n.io/', image: 'https://picsum.photos/seed/n8n-workflow/600/400', dataAiHint: 'open source automation', pricing: 'Freemium' },
            { name: 'Zapier', description: 'Connect your apps and automate workflows.', url: 'https://zapier.com/', image: 'https://picsum.photos/seed/zapier-workflow/600/400', dataAiHint: 'app integration', pricing: 'Freemium' },
            { name: 'Make', description: 'Visually create, build, and automate workflows.', url: 'https://www.make.com/', image: 'https://picsum.photos/seed/make-workflow/600/400', dataAiHint: 'visual automation', pricing: 'Freemium' },
            { name: 'Trello', description: 'Automate tasks with Butler.', url: 'https://trello.com/butler', image: 'https://picsum.photos/seed/trello-workflow/600/400', dataAiHint: 'kanban automation', pricing: 'Freemium' },
            { name: 'Asana', description: 'Automate routine tasks and workflows in your projects.', url: 'https://asana.com/product/workflow-automation', image: 'https://picsum.photos/seed/asana-workflow/600/400', dataAiHint: 'project automation', pricing: 'Paid' },
            { name: 'Monday.com', description: 'Build custom workflows to automate your work.', url: 'https://monday.com/automations', image: 'https://picsum.photos/seed/monday-workflow/600/400', dataAiHint: 'work os', pricing: 'Paid' },
            { name: 'ClickUp', description: 'Automate tasks and save time.', url: 'https://clickup.com/features/automations', image: 'https://picsum.photos/seed/clickup-workflow/600/400', dataAiHint: 'productivity platform', pricing: 'Freemium' },
            { name: 'Kissflow', description: 'Work platform to manage all of your work.', url: 'https://kissflow.com/', image: 'https://picsum.photos/seed/kissflow-workflow/600/400', dataAiHint: 'bpm software', pricing: 'Paid' },
            { name: 'ProcessMaker', description: 'Low-code business process management.', url: 'https://www.processmaker.com/', image: 'https://picsum.photos/seed/processmaker-workflow/600/400', dataAiHint: 'low-code bpm', pricing: 'Paid' },
            { name: 'Nintex', description: 'Process management and automation platform.', url: 'https://www.nintex.com/', image: 'https://picsum.photos/seed/nintex-workflow/600/400', dataAiHint: 'process automation', pricing: 'Paid' },
        ]
    }
];
