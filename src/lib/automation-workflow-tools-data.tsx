
'use client';

import React from 'react';
import { 
    Workflow, Bot, Database, Puzzle, Mail, Calendar, BrainCircuit, ShoppingCart, TrendingUp, Users, Wallet,
    Cpu, CloudCog, TestTube, FileText, ShieldCheck, Phone, Globe, Link2, BookUser, GitBranch,
    FileLock2, Box, Smartphone, Video, File, ListChecks, Bell, Folder, Handshake, BookOpen, Clock,
    User, Server, Mic, Truck
} from 'lucide-react';

export type Tool = {
    name: string;
    description: string;
    url: string;
    image: string;
    dataAiHint: string;
    pricing: 'Free' | 'Paid' | 'Freemium';
};

export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const automationWorkflowToolData: ToolCategory[] = [
    {
        title: "Business Process Automation (BPA)",
        icon: <Workflow className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Kissflow', description: 'Work platform to manage all of your work.', url: 'https://kissflow.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kissflow.com', dataAiHint: 'bpa software', pricing: 'Paid' },
            { name: 'ProcessMaker', description: 'Low-code business process management.', url: 'https://www.processmaker.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=processmaker.com', dataAiHint: 'low-code bpm', pricing: 'Paid' },
            { name: 'Nintex', description: 'Process management and automation platform.', url: 'https://www.nintex.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=nintex.com', dataAiHint: 'process automation', pricing: 'Paid' },
            { name: 'Appian', description: 'Low-code automation platform for business processes.', url: 'https://appian.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=appian.com', dataAiHint: 'low-code platform', pricing: 'Paid' },
        ]
    },
    {
        title: "Robotic Process Automation (RPA)",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'UiPath', description: 'Leading platform for enterprise automation.', url: 'https://www.uipath.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=uipath.com', dataAiHint: 'rpa platform', pricing: 'Paid' },
            { name: 'Automation Anywhere', description: 'Cloud-native intelligent automation platform.', url: 'https://www.automationanywhere.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=automationanywhere.com', dataAiHint: 'intelligent automation', pricing: 'Paid' },
            { name: 'Blue Prism', description: 'Intelligent automation for the enterprise.', url: 'https://www.blueprism.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=blueprism.com', dataAiHint: 'enterprise rpa', pricing: 'Paid' },
            { name: 'Robocorp', description: 'Open-source stack for robotic process automation.', url: 'https://robocorp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=robocorp.com', dataAiHint: 'open source rpa', pricing: 'Freemium' },
        ]
    },
    {
        title: "Data Integration & Sync",
        icon: <Database className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zapier', description: 'Automation for busy people, connecting your apps.', url: 'https://zapier.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zapier.com', dataAiHint: 'app integration', pricing: 'Freemium' },
            { name: 'Make', description: 'Visually create, build, and automate.', url: 'https://www.make.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=make.com', dataAiHint: 'visual automation', pricing: 'Freemium' },
            { name: 'n8n', description: 'Extendable workflow automation.', url: 'https://n8n.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=n8n.io', dataAiHint: 'open-source automation', pricing: 'Freemium' },
            { name: 'Airbyte', description: 'Open-source data integration platform.', url: 'https://airbyte.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=airbyte.com', dataAiHint: 'open-source etl', pricing: 'Free' },
        ]
    },
    {
        title: "No-Code / Low-Code Automation",
        icon: <Puzzle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Airtable', description: 'Low-code platform for building collaborative apps.', url: 'https://www.airtable.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=airtable.com', dataAiHint: 'database spreadsheet', pricing: 'Freemium' },
            { name: 'Glide', description: 'Create apps from Google Sheets, no code required.', url: 'https://www.glideapps.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=glideapps.com', dataAiHint: 'apps from sheets', pricing: 'Freemium' },
            { name: 'Bubble', description: 'Build production-ready web apps without code.', url: 'https://bubble.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bubble.io', dataAiHint: 'no-code web apps', pricing: 'Freemium' },
            { name: 'Retool', description: 'Build internal tools, remarkably fast.', url: 'https://retool.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=retool.com', dataAiHint: 'internal tools', pricing: 'Paid' },
        ]
    },
    {
        title: "Email Automation",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ActiveCampaign', description: 'Customer experience automation platform.', url: 'https://www.activecampaign.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=activecampaign.com', dataAiHint: 'email automation', pricing: 'Paid' },
            { name: 'Mailchimp', description: 'Email marketing and automation platform.', url: 'https://mailchimp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mailchimp.com', dataAiHint: 'email marketing', pricing: 'Freemium' },
            { name: 'ConvertKit', description: 'The email marketing platform for creators.', url: 'https://convertkit.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=convertkit.com', dataAiHint: 'creator marketing', pricing: 'Freemium' },
            { name: 'HubSpot', description: 'Email marketing software.', url: 'https://www.hubspot.com/products/marketing/email', image: 'https://www.google.com/s2/favicons?sz=128&domain=hubspot.com', dataAiHint: 'crm email', pricing: 'Freemium' },
        ]
    },
    {
        title: "Task & Workflow Scheduling",
        icon: <Calendar className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Asana', description: 'Work management platform for teams.', url: 'https://asana.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=asana.com', dataAiHint: 'project management', pricing: 'Freemium' },
            { name: 'Trello', description: 'A visual collaboration tool for your team.', url: 'https://trello.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=trello.com', dataAiHint: 'kanban boards', pricing: 'Freemium' },
            { name: 'Monday.com', description: 'Work OS that powers teams to run projects.', url: 'https://monday.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=monday.com', dataAiHint: 'work os', pricing: 'Paid' },
            { name: 'Notion', description: 'The all-in-one workspace for tasks and projects.', url: 'https://www.notion.so/', image: 'https://www.google.com/s2/favicons?sz=128&domain=notion.so', dataAiHint: 'workspace app', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI-Powered Automation",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Levity', description: 'No-code AI workflow automation platform.', url: 'https://levity.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=levity.ai', dataAiHint: 'no-code ai', pricing: 'Paid' },
            { name: 'Akkio', description: 'No-code AI platform for real-time decisioning.', url: 'https://www.akkio.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=akkio.com', dataAiHint: 'ai decisioning', pricing: 'Paid' },
            { name: 'Bardeen', description: 'AI meets automations. Automate manual workflows.', url: 'https://www.bardeen.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bardeen.ai', dataAiHint: 'workflow automation', pricing: 'Freemium' },
            { name: 'DataRobot', description: 'Enterprise AI platform that democratizes data science.', url: 'https://www.datarobot.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=datarobot.com', dataAiHint: 'enterprise ai', pricing: 'Paid' },
        ]
    },
    {
        title: "E-Commerce Automation",
        icon: <ShoppingCart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Shopify Flow', description: 'E-commerce automation for Shopify Plus.', url: 'https://www.shopify.com/plus/flow', image: 'https://www.google.com/s2/favicons?sz=128&domain=shopify.com', dataAiHint: 'shopify automation', pricing: 'Paid' },
            { name: 'Klaviyo', description: 'Email & SMS marketing automation for e-commerce.', url: 'https://www.klaviyo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=klaviyo.com', dataAiHint: 'ecommerce marketing', pricing: 'Freemium' },
            { name: 'Alloy Automation', description: 'E-commerce automation platform.', url: 'https://runalloy.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=runalloy.com', dataAiHint: 'ecommerce ipaas', pricing: 'Paid' },
            { name: 'Mesa', description: 'Workflow automation for Shopify.', url: 'https://www.getmesa.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=getmesa.com', dataAiHint: 'shopify workflow', pricing: 'Paid' },
        ]
    },
    {
        title: "Marketing Automation",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'HubSpot', description: 'Marketing, sales, and service software.', url: 'https://www.hubspot.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hubspot.com', dataAiHint: 'marketing automation', pricing: 'Freemium' },
            { name: 'Marketo', description: 'Marketing automation software.', url: 'https://business.adobe.com/products/marketo/adobe-marketo.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=adobe.com', dataAiHint: 'b2b marketing', pricing: 'Paid' },
            { name: 'Pardot', description: 'B2B marketing automation by Salesforce.', url: 'https://www.salesforce.com/products/marketing-cloud/account-engagement/', image: 'https://www.google.com/s2/favicons?sz=128&domain=salesforce.com', dataAiHint: 'salesforce marketing', pricing: 'Paid' },
            { name: 'Customer.io', description: 'Automated messaging platform for tech-savvy marketers.', url: 'https://customer.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=customer.io', dataAiHint: 'messaging platform', pricing: 'Paid' },
        ]
    },
    {
        title: "CRM Automation",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Salesforce Sales Cloud', description: 'Sales force automation solution.', url: 'https://www.salesforce.com/products/sales-cloud/overview/', image: 'https://www.google.com/s2/favicons?sz=128&domain=salesforce.com', dataAiHint: 'sales crm', pricing: 'Paid' },
            { name: 'HubSpot Sales Hub', description: 'Sales CRM software.', url: 'https://www.hubspot.com/products/sales', image: 'https://www.google.com/s2/favicons?sz=128&domain=hubspot.com', dataAiHint: 'sales software', pricing: 'Freemium' },
            { name: 'Zoho CRM', description: 'Online Customer Relationship Management software.', url: 'https://www.zoho.com/crm/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zoho.com', dataAiHint: 'online crm', pricing: 'Freemium' },
            { name: 'Pipedrive', description: 'Sales CRM and pipeline management tool.', url: 'https://www.pipedrive.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pipedrive.com', dataAiHint: 'pipeline management', pricing: 'Paid' },
        ]
    },
    {
        title: "Accounting & Finance Automation",
        icon: <Wallet className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'QuickBooks Online', description: 'Smart, simple online accounting software.', url: 'https://quickbooks.intuit.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=intuit.com', dataAiHint: 'accounting software', pricing: 'Paid' },
            { name: 'Xero', description: 'Online accounting software for your business.', url: 'https://www.xero.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=xero.com', dataAiHint: 'business accounting', pricing: 'Paid' },
            { name: 'Ramp', description: 'Finance automation platform.', url: 'https://ramp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ramp.com', dataAiHint: 'corporate cards', pricing: 'Free' },
            { name: 'Brex', description: 'Financial stack for startups.', url: 'https://www.brex.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=brex.com', dataAiHint: 'startup finance', pricing: 'Paid' },
        ]
    },
    {
        title: "HR & Payroll Automation",
        icon: <BookUser className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Gusto', description: 'Payroll, benefits, and HR for small businesses.', url: 'https://gusto.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gusto.com', dataAiHint: 'payroll hr', pricing: 'Paid' },
            { name: 'Rippling', description: 'Employee management platform for HR and IT.', url: 'https://www.rippling.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rippling.com', dataAiHint: 'employee management', pricing: 'Paid' },
            { name: 'BambooHR', description: 'HR software for small and medium businesses.', url: 'https://www.bamboohr.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bamboohr.com', dataAiHint: 'hr software', pricing: 'Paid' },
            { name: 'Paychex', description: 'Payroll and HR solutions.', url: 'https://www.paychex.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=paychex.com', dataAiHint: 'hr solutions', pricing: 'Paid' },
        ]
    },
    { 
        title: "DevOps & CI/CD Automation", 
        icon: <GitBranch className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Jenkins', description: 'Open source automation server.', url: 'https://www.jenkins.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jenkins.io', dataAiHint: 'automation server', pricing: 'Free' },
            { name: 'GitLab CI/CD', description: 'Automate building, testing, and deployment.', url: 'https://docs.gitlab.com/ee/ci/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gitlab.com', dataAiHint: 'devops platform', pricing: 'Freemium' },
            { name: 'GitHub Actions', description: 'Automate your workflow from idea to production.', url: 'https://github.com/features/actions', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'workflow automation', pricing: 'Freemium' },
            { name: 'CircleCI', description: 'Continuous integration and delivery platform.', url: 'https://circleci.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=circleci.com', dataAiHint: 'ci cd platform', pricing: 'Freemium' },
        ] 
    },
    { 
        title: "IT Automation & Orchestration", 
        icon: <Cpu className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Ansible', description: 'Simple, agentless IT automation.', url: 'https://www.ansible.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ansible.com', dataAiHint: 'it automation', pricing: 'Free' },
            { name: 'Puppet', description: 'Infrastructure automation and delivery.', url: 'https://www.puppet.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=puppet.com', dataAiHint: 'infrastructure automation', pricing: 'Paid' },
            { name: 'Chef', description: 'Automate infrastructure, compliance, and applications.', url: 'https://www.chef.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=chef.io', dataAiHint: 'devsecops', pricing: 'Paid' },
            { name: 'Salt', description: 'Intelligent IT automation.', url: 'https://www.saltstack.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=saltstack.com', dataAiHint: 'event-driven automation', pricing: 'Free' },
        ]
    },
    { 
        title: "Cloud Automation", 
        icon: <CloudCog className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Terraform', description: 'Infrastructure as Code software tool.', url: 'https://www.terraform.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=terraform.io', dataAiHint: 'iac tool', pricing: 'Free' },
            { name: 'Pulumi', description: 'Infrastructure as code in any language.', url: 'https://www.pulumi.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pulumi.com', dataAiHint: 'cloud engineering', pricing: 'Freemium' },
            { name: 'AWS CloudFormation', description: 'Model and provision all your cloud infrastructure resources.', url: 'https://aws.amazon.com/cloudformation/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'aws iac', pricing: 'Paid' },
        ] 
    },
    { 
        title: "Security Automation (SOAR)", 
        icon: <ShieldCheck className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Splunk SOAR', description: 'Security Orchestration and Automation.', url: 'https://www.splunk.com/en_us/products/splunk-soar.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=splunk.com', dataAiHint: 'security automation', pricing: 'Paid' },
            { name: 'Palo Alto Cortex XSOAR', description: 'Security orchestration, automation, and response.', url: 'https://www.paloaltonetworks.com/cortex/cortex-xsoar', image: 'https://www.google.com/s2/favicons?sz=128&domain=paloaltonetworks.com', dataAiHint: 'xsoar', pricing: 'Paid' },
        ] 
    },
    { 
        title: "Document Processing Automation (IDP)", 
        icon: <FileText className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'UiPath Document Understanding', description: 'Extract information from documents.', url: 'https://www.uipath.com/product/document-understanding', image: 'https://www.google.com/s2/favicons?sz=128&domain=uipath.com', dataAiHint: 'document understanding', pricing: 'Paid' },
            { name: 'ABBYY', description: 'Intelligent Document Processing solutions.', url: 'https://www.abbyy.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=abbyy.com', dataAiHint: 'idp solutions', pricing: 'Paid' },
        ] 
    },
    { 
        title: "Personal Productivity Automation", 
        icon: <User className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Alfred', description: 'Productivity application for macOS.', url: 'https://www.alfredapp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=alfredapp.com', dataAiHint: 'macos productivity', pricing: 'Freemium' },
            { name: 'TextExpander', description: 'Insert snippets of text from a repository of emails, and other content.', url: 'https://textexpander.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=textexpander.com', dataAiHint: 'text snippet', pricing: 'Paid' },
        ]
    }
];
