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
            { name: 'Kissflow', description: 'Work platform to manage all of your work.', url: 'https://kissflow.com/', image: 'https://picsum.photos/seed/kissflow-bpa/600/400', dataAiHint: 'bpa software', pricing: 'Paid' },
            { name: 'ProcessMaker', description: 'Low-code business process management.', url: 'https://www.processmaker.com/', image: 'https://picsum.photos/seed/processmaker-bpa/600/400', dataAiHint: 'low-code bpm', pricing: 'Paid' },
            { name: 'Nintex', description: 'Process management and automation platform.', url: 'https://www.nintex.com/', image: 'https://picsum.photos/seed/nintex-bpa/600/400', dataAiHint: 'process automation', pricing: 'Paid' },
            { name: 'Appian', description: 'Low-code automation platform for business processes.', url: 'https://appian.com/', image: 'https://picsum.photos/seed/appian-bpa/600/400', dataAiHint: 'low-code platform', pricing: 'Paid' },
        ]
    },
    {
        title: "Robotic Process Automation (RPA)",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'UiPath', description: 'Leading platform for enterprise automation.', url: 'https://www.uipath.com/', image: 'https://picsum.photos/seed/uipath-rpa/600/400', dataAiHint: 'rpa platform', pricing: 'Paid' },
            { name: 'Automation Anywhere', description: 'Cloud-native intelligent automation platform.', url: 'https://www.automationanywhere.com/', image: 'https://picsum.photos/seed/aa-rpa/600/400', dataAiHint: 'intelligent automation', pricing: 'Paid' },
            { name: 'Blue Prism', description: 'Intelligent automation for the enterprise.', url: 'https://www.blueprism.com/', image: 'https://picsum.photos/seed/blueprism-rpa/600/400', dataAiHint: 'enterprise rpa', pricing: 'Paid' },
            { name: 'Robocorp', description: 'Open-source stack for robotic process automation.', url: 'https://robocorp.com/', image: 'https://picsum.photos/seed/robocorp/600/400', dataAiHint: 'open source rpa', pricing: 'Freemium' },
        ]
    },
    {
        title: "Data Integration & Sync",
        icon: <Database className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zapier', description: 'Automation for busy people, connecting your apps.', url: 'https://zapier.com/', image: 'https://picsum.photos/seed/zapier-data/600/400', dataAiHint: 'app integration', pricing: 'Freemium' },
            { name: 'Make', description: 'Visually create, build, and automate.', url: 'https://www.make.com/', image: 'https://picsum.photos/seed/make-data/600/400', dataAiHint: 'visual automation', pricing: 'Freemium' },
            { name: 'n8n', description: 'Extendable workflow automation.', url: 'https://n8n.io/', image: 'https://picsum.photos/seed/n8n-data/600/400', dataAiHint: 'open-source automation', pricing: 'Freemium' },
            { name: 'Airbyte', description: 'Open-source data integration platform.', url: 'https://airbyte.com/', image: 'https://picsum.photos/seed/airbyte-data/600/400', dataAiHint: 'open-source etl', pricing: 'Free' },
        ]
    },
    {
        title: "No-Code / Low-Code Automation",
        icon: <Puzzle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Airtable', description: 'Low-code platform for building collaborative apps.', url: 'https://www.airtable.com/', image: 'https://picsum.photos/seed/airtable-nocode/600/400', dataAiHint: 'database spreadsheet', pricing: 'Freemium' },
            { name: 'Glide', description: 'Create apps from Google Sheets, no code required.', url: 'https://www.glideapps.com/', image: 'https://picsum.photos/seed/glide-nocode/600/400', dataAiHint: 'apps from sheets', pricing: 'Freemium' },
            { name: 'Bubble', description: 'Build production-ready web apps without code.', url: 'https://bubble.io/', image: 'https://picsum.photos/seed/bubble-nocode/600/400', dataAiHint: 'no-code web apps', pricing: 'Freemium' },
            { name: 'Retool', description: 'Build internal tools, remarkably fast.', url: 'https://retool.com/', image: 'https://picsum.photos/seed/retool-nocode/600/400', dataAiHint: 'internal tools', pricing: 'Paid' },
        ]
    },
    {
        title: "Email Automation",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ActiveCampaign', description: 'Customer experience automation platform.', url: 'https://www.activecampaign.com/', image: 'https://picsum.photos/seed/activecampaign-email/600/400', dataAiHint: 'email automation', pricing: 'Paid' },
            { name: 'Mailchimp', description: 'Email marketing and automation platform.', url: 'https://mailchimp.com/', image: 'https://picsum.photos/seed/mailchimp-email/600/400', dataAiHint: 'email marketing', pricing: 'Freemium' },
            { name: 'ConvertKit', description: 'The email marketing platform for creators.', url: 'https://convertkit.com/', image: 'https://picsum.photos/seed/convertkit-email/600/400', dataAiHint: 'creator marketing', pricing: 'Freemium' },
            { name: 'HubSpot', description: 'Email marketing software.', url: 'https://www.hubspot.com/products/marketing/email', image: 'https://picsum.photos/seed/hubspot-email/600/400', dataAiHint: 'crm email', pricing: 'Freemium' },
        ]
    },
    {
        title: "Task & Workflow Scheduling",
        icon: <Calendar className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Asana', description: 'Work management platform for teams.', url: 'https://asana.com/', image: 'https://picsum.photos/seed/asana-workflow/600/400', dataAiHint: 'project management', pricing: 'Freemium' },
            { name: 'Trello', description: 'A visual collaboration tool for your team.', url: 'https://trello.com/', image: 'https://picsum.photos/seed/trello-workflow/600/400', dataAiHint: 'kanban boards', pricing: 'Freemium' },
            { name: 'Monday.com', description: 'Work OS that powers teams to run projects.', url: 'https://monday.com/', image: 'https://picsum.photos/seed/monday-workflow/600/400', dataAiHint: 'work os', pricing: 'Paid' },
            { name: 'Notion', description: 'The all-in-one workspace for tasks and projects.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-workflow/600/400', dataAiHint: 'workspace app', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI-Powered Automation",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Levity', description: 'No-code AI workflow automation platform.', url: 'https://levity.ai/', image: 'https://picsum.photos/seed/levity-ai/600/400', dataAiHint: 'no-code ai', pricing: 'Paid' },
            { name: 'Akkio', description: 'No-code AI platform for real-time decisioning.', url: 'https://www.akkio.com/', image: 'https://picsum.photos/seed/akkio-ai/600/400', dataAiHint: 'ai decisioning', pricing: 'Paid' },
            { name: 'Bardeen', description: 'AI meets automations. Automate manual workflows.', url: 'https://www.bardeen.ai/', image: 'https://picsum.photos/seed/bardeen-ai/600/400', dataAiHint: 'workflow automation', pricing: 'Freemium' },
            { name: 'DataRobot', description: 'Enterprise AI platform that democratizes data science.', url: 'https://www.datarobot.com/', image: 'https://picsum.photos/seed/datarobot-ai/600/400', dataAiHint: 'enterprise ai', pricing: 'Paid' },
        ]
    },
    {
        title: "E-Commerce Automation",
        icon: <ShoppingCart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Shopify Flow', description: 'E-commerce automation for Shopify Plus.', url: 'https://www.shopify.com/plus/flow', image: 'https://picsum.photos/seed/shopify-flow/600/400', dataAiHint: 'shopify automation', pricing: 'Paid' },
            { name: 'Klaviyo', description: 'Email & SMS marketing automation for e-commerce.', url: 'https://www.klaviyo.com/', image: 'https://picsum.photos/seed/klaviyo-ecom/600/400', dataAiHint: 'ecommerce marketing', pricing: 'Freemium' },
            { name: 'Alloy Automation', description: 'E-commerce automation platform.', url: 'https://runalloy.com/', image: 'https://picsum.photos/seed/alloy-ecom/600/400', dataAiHint: 'ecommerce ipaas', pricing: 'Paid' },
            { name: 'Mesa', description: 'Workflow automation for Shopify.', url: 'https://www.getmesa.com/', image: 'https://picsum.photos/seed/mesa-ecom/600/400', dataAiHint: 'shopify workflow', pricing: 'Paid' },
        ]
    },
    {
        title: "Marketing Automation",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'HubSpot', description: 'Marketing, sales, and service software.', url: 'https://www.hubspot.com/', image: 'https://picsum.photos/seed/hubspot-marketing/600/400', dataAiHint: 'marketing automation', pricing: 'Freemium' },
            { name: 'Marketo', description: 'Marketing automation software.', url: 'https://business.adobe.com/products/marketo/adobe-marketo.html', image: 'https://picsum.photos/seed/marketo-auto/600/400', dataAiHint: 'b2b marketing', pricing: 'Paid' },
            { name: 'Pardot', description: 'B2B marketing automation by Salesforce.', url: 'https://www.salesforce.com/products/marketing-cloud/account-engagement/', image: 'https://picsum.photos/seed/pardot-marketing/600/400', dataAiHint: 'salesforce marketing', pricing: 'Paid' },
            { name: 'Customer.io', description: 'Automated messaging platform for tech-savvy marketers.', url: 'https://customer.io/', image: 'https://picsum.photos/seed/customerio-marketing/600/400', dataAiHint: 'messaging platform', pricing: 'Paid' },
        ]
    },
    {
        title: "CRM Automation",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Salesforce Sales Cloud', description: 'Sales force automation solution.', url: 'https://www.salesforce.com/products/sales-cloud/overview/', image: 'https://picsum.photos/seed/salesforce-crm/600/400', dataAiHint: 'sales crm', pricing: 'Paid' },
            { name: 'HubSpot Sales Hub', description: 'Sales CRM software.', url: 'https://www.hubspot.com/products/sales', image: 'https://picsum.photos/seed/hubspot-sales/600/400', dataAiHint: 'sales software', pricing: 'Freemium' },
            { name: 'Zoho CRM', description: 'Online Customer Relationship Management software.', url: 'https://www.zoho.com/crm/', image: 'https://picsum.photos/seed/zoho-crm/600/400', dataAiHint: 'online crm', pricing: 'Freemium' },
            { name: 'Pipedrive', description: 'Sales CRM and pipeline management tool.', url: 'https://www.pipedrive.com/', image: 'https://picsum.photos/seed/pipedrive-crm/600/400', dataAiHint: 'pipeline management', pricing: 'Paid' },
        ]
    },
    {
        title: "Accounting & Finance Automation",
        icon: <Wallet className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'QuickBooks Online', description: 'Smart, simple online accounting software.', url: 'https://quickbooks.intuit.com/', image: 'https://picsum.photos/seed/quickbooks-fin/600/400', dataAiHint: 'accounting software', pricing: 'Paid' },
            { name: 'Xero', description: 'Online accounting software for your business.', url: 'https://www.xero.com/', image: 'https://picsum.photos/seed/xero/600/400', dataAiHint: 'business accounting', pricing: 'Paid' },
            { name: 'Ramp', description: 'Finance automation platform.', url: 'https://ramp.com/', image: 'https://picsum.photos/seed/ramp-fin-mgmt/600/400', dataAiHint: 'corporate cards', pricing: 'Free' },
            { name: 'Brex', description: 'Financial stack for startups.', url: 'https://www.brex.com/', image: 'https://picsum.photos/seed/brex-fin-mgmt/600/400', dataAiHint: 'startup finance', pricing: 'Paid' },
        ]
    },
    {
        title: "HR & Payroll Automation",
        icon: <BookUser className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Gusto', description: 'Payroll, benefits, and HR for small businesses.', url: 'https://gusto.com/', image: 'https://picsum.photos/seed/gusto-payroll/600/400', dataAiHint: 'payroll hr', pricing: 'Paid' },
            { name: 'Rippling', description: 'Employee management platform for HR and IT.', url: 'https://www.rippling.com/', image: 'https://picsum.photos/seed/rippling-payroll/600/400', dataAiHint: 'employee management', pricing: 'Paid' },
            { name: 'BambooHR', description: 'HR software for small and medium businesses.', url: 'https://www.bamboohr.com/', image: 'https://picsum.photos/seed/bamboohr-biz/600/400', dataAiHint: 'hr software', pricing: 'Paid' },
            { name: 'Paychex', description: 'Payroll and HR solutions.', url: 'https://www.paychex.com/', image: 'https://picsum.photos/seed/paychex-payroll/600/400', dataAiHint: 'hr solutions', pricing: 'Paid' },
        ]
    },
    { 
        title: "DevOps & CI/CD Automation", 
        icon: <GitBranch className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Jenkins', description: 'Open source automation server.', url: 'https://www.jenkins.io/', image: 'https://picsum.photos/seed/jenkins-devops/600/400', dataAiHint: 'automation server', pricing: 'Free' },
            { name: 'GitLab CI/CD', description: 'Automate building, testing, and deployment.', url: 'https://docs.gitlab.com/ee/ci/', image: 'https://picsum.photos/seed/gitlab-cicd/600/400', dataAiHint: 'devops platform', pricing: 'Freemium' },
            { name: 'GitHub Actions', description: 'Automate your workflow from idea to production.', url: 'https://github.com/features/actions', image: 'https://picsum.photos/seed/gh-actions/600/400', dataAiHint: 'workflow automation', pricing: 'Freemium' },
            { name: 'CircleCI', description: 'Continuous integration and delivery platform.', url: 'https://circleci.com/', image: 'https://picsum.photos/seed/circleci-devops/600/400', dataAiHint: 'ci cd platform', pricing: 'Freemium' },
        ] 
    },
    { 
        title: "IT Automation & Orchestration", 
        icon: <Cpu className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Ansible', description: 'Simple, agentless IT automation.', url: 'https://www.ansible.com/', image: 'https://picsum.photos/seed/ansible-it/600/400', dataAiHint: 'it automation', pricing: 'Free' },
            { name: 'Puppet', description: 'Infrastructure automation and delivery.', url: 'https://www.puppet.com/', image: 'https://picsum.photos/seed/puppet-it/600/400', dataAiHint: 'infrastructure automation', pricing: 'Paid' },
            { name: 'Chef', description: 'Automate infrastructure, compliance, and applications.', url: 'https://www.chef.io/', image: 'https://picsum.photos/seed/chef-it/600/400', dataAiHint: 'devsecops', pricing: 'Paid' },
            { name: 'Salt', description: 'Intelligent IT automation.', url: 'https://www.saltstack.com/', image: 'https://picsum.photos/seed/salt-it/600/400', dataAiHint: 'event-driven automation', pricing: 'Free' },
        ]
    },
    { 
        title: "Cloud Automation", 
        icon: <CloudCog className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Terraform', description: 'Infrastructure as Code software tool.', url: 'https://www.terraform.io/', image: 'https://picsum.photos/seed/terraform-cloud/600/400', dataAiHint: 'iac tool', pricing: 'Free' },
            { name: 'Pulumi', description: 'Infrastructure as code in any language.', url: 'https://www.pulumi.com/', image: 'https://picsum.photos/seed/pulumi-cloud/600/400', dataAiHint: 'cloud engineering', pricing: 'Freemium' },
            { name: 'AWS CloudFormation', description: 'Model and provision all your cloud infrastructure resources.', url: 'https://aws.amazon.com/cloudformation/', image: 'https://picsum.photos/seed/cloudformation-cloud/600/400', dataAiHint: 'aws iac', pricing: 'Paid' },
        ] 
    },
    { 
        title: "Security Automation (SOAR)", 
        icon: <ShieldCheck className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Splunk SOAR', description: 'Security Orchestration and Automation.', url: 'https://www.splunk.com/en_us/products/splunk-soar.html', image: 'https://picsum.photos/seed/splunk-soar/600/400', dataAiHint: 'security automation', pricing: 'Paid' },
            { name: 'Palo Alto Cortex XSOAR', description: 'Security orchestration, automation, and response.', url: 'https://www.paloaltonetworks.com/cortex/cortex-xsoar', image: 'https://picsum.photos/seed/paloalto-soar/600/400', dataAiHint: 'xsoar', pricing: 'Paid' },
        ] 
    },
    { 
        title: "Document Processing Automation (IDP)", 
        icon: <FileText className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'UiPath Document Understanding', description: 'Extract information from documents.', url: 'https://www.uipath.com/product/document-understanding', image: 'https://picsum.photos/seed/uipath-idp/600/400', dataAiHint: 'document understanding', pricing: 'Paid' },
            { name: 'ABBYY', description: 'Intelligent Document Processing solutions.', url: 'https://www.abbyy.com/', image: 'https://picsum.photos/seed/abbyy-idp/600/400', dataAiHint: 'idp solutions', pricing: 'Paid' },
        ] 
    },
    { 
        title: "Personal Productivity Automation", 
        icon: <User className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Alfred', description: 'Productivity application for macOS.', url: 'https://www.alfredapp.com/', image: 'https://picsum.photos/seed/alfred-app/600/400', dataAiHint: 'macos productivity', pricing: 'Freemium' },
            { name: 'TextExpander', description: 'Insert snippets of text from a repository of emails, and other content.', url: 'https://textexpander.com/', image: 'https://picsum.photos/seed/textexpander/600/400', dataAiHint: 'text snippet', pricing: 'Paid' },
        ]
    }
];
