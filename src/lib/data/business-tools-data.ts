
'use client';

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
    icon: string;
    tools: Tool[];
};

export const businessToolData: ToolCategory[] = [
    {
        title: "Marketing & Sales",
        icon: "Megaphone",
        tools: [
            { name: 'HubSpot', description: 'All-in-one marketing, sales, and service software.', url: 'https://www.hubspot.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hubspot.com', dataAiHint: 'crm platform', pricing: 'Freemium' },
            { name: 'Salesforce', description: 'The world\'s #1 customer relationship management (CRM) platform.', url: 'https://www.salesforce.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=salesforce.com', dataAiHint: 'crm dashboard', pricing: 'Paid' },
            { name: 'Jasper', description: 'AI Content Platform for teams to create marketing copy.', url: 'https://www.jasper.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jasper.ai', dataAiHint: 'ai writer', pricing: 'Paid' },
            { name: 'Copy.ai', description: 'AI-powered copywriter for generating marketing content.', url: 'https://www.copy.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=copy.ai', dataAiHint: 'marketing copy', pricing: 'Freemium' },
            { name: 'Semrush', description: 'Online visibility management and content marketing platform.', url: 'https://www.semrush.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=semrush.com', dataAiHint: 'seo platform', pricing: 'Paid' },
            { name: 'Ahrefs', description: 'SEO tools & resources to grow your search traffic.', url: 'https://ahrefs.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ahrefs.com', dataAiHint: 'seo tools', pricing: 'Paid' },
            { name: 'Mailchimp', description: 'Email marketing and automation platform.', url: 'https://mailchimp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mailchimp.com', dataAiHint: 'email marketing', pricing: 'Freemium' },
            { name: 'ActiveCampaign', description: 'Customer experience automation platform.', url: 'https://www.activecampaign.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=activecampaign.com', dataAiHint: 'cx automation', pricing: 'Paid' },
            { name: 'Hootsuite', description: 'Social media management dashboard.', url: 'https://www.hootsuite.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hootsuite.com', dataAiHint: 'social media', pricing: 'Paid' },
            { name: 'Buffer', description: 'Social media toolkit for small businesses.', url: 'https://buffer.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=buffer.com', dataAiHint: 'social scheduling', pricing: 'Freemium' },
            { name: 'Canva', description: 'Graphic design platform to create marketing visuals.', url: 'https://www.canva.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=canva.com', dataAiHint: 'graphic design', pricing: 'Freemium' },
            { name: 'Unbounce', description: 'Landing page builder for higher conversions.', url: 'https://unbounce.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=unbounce.com', dataAiHint: 'landing page', pricing: 'Paid' },
            { name: 'OptinMonster', description: 'Lead generation software for marketing.', url: 'https://optinmonster.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=optinmonster.com', dataAiHint: 'lead generation', pricing: 'Paid' },
            { name: 'Pipedrive', description: 'Sales CRM and pipeline management tool.', url: 'https://www.pipedrive.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pipedrive.com', dataAiHint: 'sales pipeline', pricing: 'Paid' },
            { name: 'Zoho CRM', description: 'Online Customer Relationship Management software.', url: 'https://www.zoho.com/crm/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zoho.com', dataAiHint: 'online crm', pricing: 'Freemium' },
            { name: 'Gong', description: 'Revenue intelligence platform for sales teams.', url: 'https://www.gong.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gong.io', dataAiHint: 'revenue intelligence', pricing: 'Paid' },
            { name: 'Outreach', description: 'Sales execution platform to build pipeline and close deals.', url: 'https://www.outreach.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=outreach.io', dataAiHint: 'sales execution', pricing: 'Paid' },
            { name: 'Drift', description: 'Conversational marketing and sales platform.', url: 'https://www.drift.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=drift.com', dataAiHint: 'conversational ai', pricing: 'Paid' },
            { name: 'Marketo', description: 'Marketing automation software.', url: 'https://business.adobe.com/products/marketo/adobe-marketo.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=adobe.com', dataAiHint: 'b2b marketing', pricing: 'Paid' },
            { name: 'Fathom Analytics', description: 'Simple, privacy-focused website analytics.', url: 'https://usefathom.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=usefathom.com', dataAiHint: 'website analytics', pricing: 'Paid' }
        ]
    },
    {
        title: "Customer Support",
        icon: "Handshake",
        tools: [
            { name: 'Intercom', description: 'AI-powered customer service platform.', url: 'https://www.intercom.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=intercom.com', dataAiHint: 'customer service', pricing: 'Paid' },
            { name: 'Zendesk', description: 'Customer service software and sales CRM.', url: 'https://www.zendesk.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zendesk.com', dataAiHint: 'support crm', pricing: 'Paid' },
            { name: 'Freshdesk', description: 'Cloud-based customer support software.', url: 'https://freshdesk.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=freshdesk.com', dataAiHint: 'helpdesk software', pricing: 'Freemium' },
            { name: 'Help Scout', description: 'A delightful, human-centered customer service platform.', url: 'https://www.helpscout.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=helpscout.com', dataAiHint: 'shared inbox', pricing: 'Paid' },
            { name: 'Gorgias', description: 'Customer service platform for e-commerce.', url: 'https://www.gorgias.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gorgias.com', dataAiHint: 'ecommerce helpdesk', pricing: 'Paid' },
            { name: 'LiveChat', description: 'Live chat software with chatbot capabilities.', url: 'https://www.livechat.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=livechat.com', dataAiHint: 'chatbot software', pricing: 'Paid' },
            { name: 'Tidio', description: 'A comprehensive live chat and chatbot solution.', url: 'https://www.tidio.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tidio.com', dataAiHint: 'live chat', pricing: 'Freemium' },
            { name: 'Front', description: 'The customer communication hub.', url: 'https://front.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=front.com', dataAiHint: 'communication hub', pricing: 'Paid' },
            { name: 'Gladly', description: 'A radically personal customer service platform.', url: 'https://www.gladly.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gladly.com', dataAiHint: 'personal service', pricing: 'Paid' },
            { name: 'Kayako', description: 'Help desk software for personal customer service.', url: 'https://www.kayako.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kayako.com', dataAiHint: 'help desk', pricing: 'Paid' },
            { name: 'Zoho Desk', description: 'Context-aware help desk software.', url: 'https://www.zoho.com/desk/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zoho.com', dataAiHint: 'context-aware', pricing: 'Freemium' },
            { name: 'TeamSupport', description: 'B2B customer support software.', url: 'https://www.teamsupport.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=teamsupport.com', dataAiHint: 'b2b support', pricing: 'Paid' },
            { name: 'Reamaze', description: 'Customer service helpdesk for modern businesses.', url: 'https://www.reamaze.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=reamaze.com', dataAiHint: 'modern helpdesk', pricing: 'Paid' },
            { name: 'SupportBee', description: 'A collaborative email inbox for teams.', url: 'https://supportbee.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=supportbee.com', dataAiHint: 'collaborative inbox', pricing: 'Paid' },
            { name: 'Dixa', description: 'Conversational customer service platform.', url: 'https://www.dixa.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=dixa.com', dataAiHint: 'conversational platform', pricing: 'Paid' },
            { name: 'Kustomer', description: 'The omnichannel CRM for customer service.', url: 'https://www.kustomer.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kustomer.com', dataAiHint: 'omnichannel crm', pricing: 'Paid' },
            { name: 'ProProfs Help Desk', description: 'Cloud-based help desk software.', url: 'https://www.proprofs.com/help-desk/', image: 'https://www.google.com/s2/favicons?sz=128&domain=proprofs.com', dataAiHint: 'cloud helpdesk', pricing: 'Freemium' },
            { name: 'HappyFox', description: 'Online help desk software.', url: 'https://www.happyfox.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=happyfox.com', dataAiHint: 'helpdesk system', pricing: 'Paid' },
            { name: 'AzureDesk', description: 'Affordable help desk software.', url: 'https://www.azuredesk.co/', image: 'https://www.google.com/s2/favicons?sz=128&domain=azuredesk.co', dataAiHint: 'affordable helpdesk', pricing: 'Paid' },
            { name: 'Crisp', description: 'All-in-one multilingual customer support platform.', url: 'https://crisp.chat/', image: 'https://www.google.com/s2/favicons?sz=128&domain=crisp.chat', dataAiHint: 'multilingual support', pricing: 'Freemium' }
        ]
    },
    {
        title: "HR & Recruitment",
        icon: "UserPlus",
        tools: [
            { name: 'Greenhouse', description: 'Hiring software for growing companies.', url: 'https://www.greenhouse.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=greenhouse.io', dataAiHint: 'hiring software', pricing: 'Paid' },
            { name: 'Lever', description: 'Talent acquisition suite for the entire talent lifecycle.', url: 'https://www.lever.co/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lever.co', dataAiHint: 'recruiting ats', pricing: 'Paid' },
            { name: 'BambooHR', description: 'HR software for small and medium businesses.', url: 'https://www.bamboohr.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bamboohr.com', dataAiHint: 'hr software', pricing: 'Paid' },
            { name: 'HireVue', description: 'AI-driven hiring platform with video interviews.', url: 'https://www.hirevue.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hirevue.com', dataAiHint: 'video interviews', pricing: 'Paid' },
            { name: 'Eightfold AI', description: 'Deep Learning Talent Intelligence Platform.', url: 'https://eightfold.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=eightfold.ai', dataAiHint: 'talent intelligence', pricing: 'Paid' },
            { name: 'Workday', description: 'Enterprise management cloud for finance, HR, and planning.', url: 'https://www.workday.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=workday.com', dataAiHint: 'hris', pricing: 'Paid' },
            { name: 'Gusto', description: 'Payroll, benefits, and HR for small businesses.', url: 'https://gusto.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gusto.com', dataAiHint: 'payroll hr', pricing: 'Paid' },
            { name: 'Rippling', description: 'Employee management platform for HR and IT.', url: 'https://www.rippling.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rippling.com', dataAiHint: 'employee management', pricing: 'Paid' },
            { name: 'Deel', description: 'All-in-one HR platform for global teams.', url: 'https://www.deel.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=deel.com', dataAiHint: 'global payroll', pricing: 'Paid' },
            { name: 'Workable', description: 'All-in-one recruiting software.', url: 'https://www.workable.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=workable.com', dataAiHint: 'recruiting software', pricing: 'Paid' },
            { name: 'SmartRecruiters', description: 'Talent Acquisition Suite.', url: 'https://www.smartrecruiters.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=smartrecruiters.com', dataAiHint: 'hiring success', pricing: 'Paid' },
            { name: 'JazzHR', description: 'Powerful, user-friendly, and affordable recruiting software.', url: 'https://www.jazzhr.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jazzhr.com', dataAiHint: 'smb recruiting', pricing: 'Paid' },
            { name: 'Recruitee', description: 'Collaborative hiring software.', url: 'https://recruitee.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=recruitee.com', dataAiHint: 'collaborative hiring', pricing: 'Paid' },
            { name: 'SeekOut', description: 'AI-powered talent search engine.', url: 'https://www.seekout.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=seekout.com', dataAiHint: 'talent search', pricing: 'Paid' },
            { name: 'Gem', description: 'All-in-one recruiting platform.', url: 'https://www.gem.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gem.com', dataAiHint: 'recruiting crm', pricing: 'Paid' },
            { name: 'Pymetrics', description: 'Talent matching platform using behavioral science and AI.', url: 'https://www.pymetrics.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pymetrics.ai', dataAiHint: 'ai talent', pricing: 'Paid' },
            { name: 'Textio', description: 'Augmented writing platform for inclusive language.', url: 'https://textio.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=textio.com', dataAiHint: 'inclusive writing', pricing: 'Paid' },
            { name: 'Phenom', description: 'Talent Experience Management platform.', url: 'https://www.phenom.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=phenom.com', dataAiHint: 'talent experience', pricing: 'Paid' },
            { name: 'HiBob', description: 'The HR platform for modern business.', url: 'https://www.hibob.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hibob.com', dataAiHint: 'modern hr', pricing: 'Paid' },
            { name: 'Lattice', description: 'People management platform.', url: 'https://lattice.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lattice.com', dataAiHint: 'performance management', pricing: 'Paid' }
        ]
    },
    {
        title: "Operations & Productivity",
        icon: "Zap",
        tools: [
            { name: 'Notion', description: 'The all-in-one workspace for your team.', url: 'https://www.notion.so/', image: 'https://www.google.com/s2/favicons?sz=128&domain=notion.so', dataAiHint: 'workspace app', pricing: 'Freemium' },
            { name: 'Slack', description: 'Team communication and collaboration platform.', url: 'https://slack.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=slack.com', dataAiHint: 'team chat', pricing: 'Freemium' },
            { name: 'Airtable', description: 'Low-code platform for building collaborative apps.', url: 'https://www.airtable.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=airtable.com', dataAiHint: 'database spreadsheet', pricing: 'Freemium' },
            { name: 'Zapier', description: 'Automation for busy people, connecting your apps.', url: 'https://zapier.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zapier.com', dataAiHint: 'app automation', pricing: 'Freemium' },
            { name: 'Fireflies.ai', description: 'AI meeting assistant to record and transcribe.', url: 'https://fireflies.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=fireflies.ai', dataAiHint: 'meeting recorder', pricing: 'Freemium' },
            { name: 'Motion', description: 'AI-powered calendar and time management.', url: 'https://www.usemotion.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=usemotion.com', dataAiHint: 'ai calendar', pricing: 'Paid' },
            { name: 'Asana', description: 'Work management platform for teams.', url: 'https://asana.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=asana.com', dataAiHint: 'project management', pricing: 'Freemium' },
            { name: 'Trello', description: 'A visual collaboration tool for your team.', url: 'https://trello.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=trello.com', dataAiHint: 'kanban boards', pricing: 'Freemium' },
            { name: 'Miro', description: 'Online collaborative whiteboard platform.', url: 'https://miro.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=miro.com', dataAiHint: 'visual collaboration', pricing: 'Freemium' },
            { name: 'Loom', description: 'Video messaging for work.', url: 'https://www.loom.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=loom.com', dataAiHint: 'screen recording', pricing: 'Freemium' },
            { name: 'Superhuman', description: 'The fastest email experience ever made.', url: 'https://superhuman.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=superhuman.com', dataAiHint: 'email productivity', pricing: 'Paid' },
            { name: 'Evernote', description: 'Note-taking and organization app.', url: 'https://evernote.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=evernote.com', dataAiHint: 'note taking', pricing: 'Freemium' },
            { name: 'Grammarly', description: 'AI-powered writing assistant.', url: 'https://www.grammarly.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=grammarly.com', dataAiHint: 'writing assistant', pricing: 'Freemium' },
            { name: 'LastPass', description: 'Password manager and vault app.', url: 'https://www.lastpass.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lastpass.com', dataAiHint: 'password manager', pricing: 'Freemium' },
            { name: '1Password', description: 'Password manager for families, businesses, and teams.', url: 'https://1password.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=1password.com', dataAiHint: 'secure passwords', pricing: 'Paid' },
            { name: 'Todoist', description: 'To-do list and task manager.', url: 'https://todoist.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=todoist.com', dataAiHint: 'task manager', pricing: 'Freemium' },
            { name: 'ClickUp', description: 'One app to replace them all. For tasks, docs, chat, goals.', url: 'https://clickup.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=clickup.com', dataAiHint: 'productivity platform', pricing: 'Freemium' },
            { name: 'Process Street', description: 'Workflow software for teams.', url: 'https://www.process.st/', image: 'https://www.google.com/s2/favicons?sz=128&domain=process.st', dataAiHint: 'checklist software', pricing: 'Paid' },
            { name: 'Coda', description: 'The all-in-one doc that brings words, data, and teams together.', url: 'https://coda.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=coda.io', dataAiHint: 'all-in-one doc', pricing: 'Freemium' },
            { name: 'SaneBox', description: 'AI for your inbox to filter out unimportant emails.', url: 'https://www.sanebox.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sanebox.com', dataAiHint: 'email management', pricing: 'Paid' }
        ]
    },
    {
        title: "Finance & Accounting",
        icon: "Wallet",
        tools: [
            { name: 'QuickBooks', description: 'Smart, simple online accounting software.', url: 'https://quickbooks.intuit.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=intuit.com', dataAiHint: 'accounting', pricing: 'Paid' },
            { name: 'Xero', description: 'Online accounting software for your business.', url: 'https://www.xero.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=xero.com', dataAiHint: 'business accounting', pricing: 'Paid' },
            { name: 'Stripe', description: 'Payments infrastructure for the internet.', url: 'https://stripe.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=stripe.com', dataAiHint: 'payment processing', pricing: 'Paid' },
            { name: 'Brex', description: 'Financial stack for startups and growing companies.', url: 'https://www.brex.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=brex.com', dataAiHint: 'startup finance', pricing: 'Paid' },
            { name: 'FreshBooks', description: 'Accounting software for small businesses and freelancers.', url: 'https://www.freshbooks.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=freshbooks.com', dataAiHint: 'small business', pricing: 'Paid' },
            { name: 'Wave', description: 'Free invoicing & accounting software for small businesses.', url: 'https://www.waveapps.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=waveapps.com', dataAiHint: 'free accounting', pricing: 'Free' },
            { name: 'Zoho Books', description: 'Online accounting software that manages your finances.', url: 'https://www.zoho.com/books/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zoho.com', dataAiHint: 'finance management', pricing: 'Freemium' },
            { name: 'NetSuite', description: 'Cloud ERP solution for mid-sized to large businesses.', url: 'https://www.netsuite.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=netsuite.com', dataAiHint: 'cloud erp', pricing: 'Paid' },
            { name: 'Expensify', description: 'Expense reports done in a snap.', url: 'https://www.expensify.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=expensify.com', dataAiHint: 'expense reports', pricing: 'Freemium' },
            { name: 'Ramp', description: 'Finance automation platform for modern businesses.', url: 'https://ramp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ramp.com', dataAiHint: 'corporate cards', pricing: 'Free' },
            { name: 'Bill.com', description: 'Automate accounts payable and receivable.', url: 'https://www.bill.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bill.com', dataAiHint: 'ap ar automation', pricing: 'Paid' },
            { name: 'Tipalti', description: 'Global AP and Mass Payments Automation.', url: 'https://tipalti.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tipalti.com', dataAiHint: 'global payments', pricing: 'Paid' },
            { name: 'Avalara', description: 'Tax compliance done right.', url: 'https://www.avalara.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=avalara.com', dataAiHint: 'tax compliance', pricing: 'Paid' },
            { name: 'Sage Intacct', description: 'Cloud financial management software.', url: 'https://www.sage.com/en-us/sage-intacct/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sage.com', dataAiHint: 'cloud financials', pricing: 'Paid' },
        ]
    },
    {
        title: "Project Management",
        icon: "ListChecks",
        tools: [
            { name: 'ClickUp', description: 'One app to replace them all.', url: 'https://clickup.com/ai', image: 'https://www.google.com/s2/favicons?sz=128&domain=clickup.com', dataAiHint: 'productivity platform', pricing: 'Freemium' },
            { name: 'Asana', description: 'Work management for teams.', url: 'https://asana.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=asana.com', dataAiHint: 'team tasks', pricing: 'Freemium' },
            { name: 'Trello', description: 'A visual collaboration tool for your team.', url: 'https://trello.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=trello.com', dataAiHint: 'kanban boards', pricing: 'Freemium' },
            { name: 'Monday.com', description: 'Work OS that powers teams to run projects.', url: 'https://monday.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=monday.com', dataAiHint: 'work os', pricing: 'Paid' },
            { name: 'Jira', description: 'Project management tool for agile teams.', url: 'https://www.atlassian.com/software/jira', image: 'https://www.google.com/s2/favicons?sz=128&domain=atlassian.com', dataAiHint: 'agile teams', pricing: 'Freemium' },
            { name: 'Wrike', description: 'Versatile project management software.', url: 'https://www.wrike.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=wrike.com', dataAiHint: 'enterprise pm', pricing: 'Paid' },
            { name: 'Basecamp', description: 'The all-in-one toolkit for working remotely.', url: 'https://basecamp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=basecamp.com', dataAiHint: 'remote work', pricing: 'Paid' },
            { name: 'Smartsheet', description: 'The enterprise platform for dynamic work.', url: 'https://www.smartsheet.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=smartsheet.com', dataAiHint: 'dynamic work', pricing: 'Paid' },
            { name: 'Notion', description: 'Project management integrated into your workspace.', url: 'https://www.notion.so/', image: 'https://www.google.com/s2/favicons?sz=128&domain=notion.so', dataAiHint: 'all-in-one', pricing: 'Freemium' },
            { name: 'Airtable', description: 'Connect everything. Achieve anything.', url: 'https://www.airtable.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=airtable.com', dataAiHint: 'app builder', pricing: 'Freemium' },
            { name: 'Teamwork', description: 'Project management software that teams love.', url: 'https://www.teamwork.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=teamwork.com', dataAiHint: 'team collaboration', pricing: 'Paid' },
            { name: 'Freedcamp', description: 'Free project management tool.', url: 'https://freedcamp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=freedcamp.com', dataAiHint: 'free pm', pricing: 'Free' },
            { name: 'LiquidPlanner', description: 'Predictive project management.', url: 'https://www.liquidplanner.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=liquidplanner.com', dataAiHint: 'predictive planning', pricing: 'Paid' },
            { name: 'Microsoft Project', description: 'Project management software by Microsoft.', url: 'https://www.microsoft.com/en-us/microsoft-365/project/project-management-software', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'gantt charts', pricing: 'Paid' },
            { name: 'Hive', description: 'The project management tool for productive teams.', url: 'https://hive.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hive.com', dataAiHint: 'productive teams', pricing: 'Paid' },
        ]
    },
    {
        title: "Communication & Collaboration",
        icon: "MessageSquare",
        tools: [
            { name: 'Slack', description: 'Team communication platform.', url: 'https://slack.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=slack.com', dataAiHint: 'team chat', pricing: 'Freemium' },
            { name: 'Microsoft Teams', description: 'Chat, meet, call, and collaborate.', url: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'video conference', pricing: 'Freemium' },
            { name: 'Zoom', description: 'Video conferencing and web conferencing service.', url: 'https://zoom.us/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zoom.us', dataAiHint: 'online meetings', pricing: 'Freemium' },
            { name: 'Miro', description: 'Online collaborative whiteboard platform.', url: 'https://miro.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=miro.com', dataAiHint: 'digital whiteboard', pricing: 'Freemium' },
            { name: 'Google Workspace', description: 'Productivity and collaboration tools including Gmail and Meet.', url: 'https://workspace.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'collaboration tools', pricing: 'Paid' },
            { name: 'Discord', description: 'Your place to talk and hang out.', url: 'https://discord.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=discord.com', dataAiHint: 'voice chat', pricing: 'Freemium' },
            { name: 'Loom', description: 'Video messaging for work.', url: 'https://www.loom.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=loom.com', dataAiHint: 'screen sharing', pricing: 'Freemium' },
            { name: 'Mural', description: 'Digital-first visual collaboration.', url: 'https://www.mural.co/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mural.co', dataAiHint: 'visual collaboration', pricing: 'Freemium' },
            { name: 'Twist', description: 'A calmer, more organized way to work together.', url: 'https://twist.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=twist.com', dataAiHint: 'async communication', pricing: 'Freemium' },
            { name: 'Webex', description: 'Video conferencing, online meetings, screen share.', url: 'https://www.webex.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=webex.com', dataAiHint: 'cisco meetings', pricing: 'Freemium' },
        ]
    },
    {
        title: "Business Intelligence & Analytics",
        icon: "BarChart3",
        tools: [
            { name: 'Tableau', description: 'Leading data visualization and BI software.', url: 'https://www.tableau.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tableau.com', dataAiHint: 'data visualization', pricing: 'Paid' },
            { name: 'Power BI', description: 'Microsoft\'s BI tools with integrated AI capabilities.', url: 'https://powerbi.microsoft.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=powerbi.microsoft.com', dataAiHint: 'business analytics', pricing: 'Freemium' },
            { name: 'Looker', description: 'Business intelligence and big data analytics platform.', url: 'https://looker.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=looker.com', dataAiHint: 'data platform', pricing: 'Paid' },
            { name: 'Qlik', description: 'End-to-end data integration and analytics.', url: 'https://www.qlik.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=qlik.com', dataAiHint: 'data analytics', pricing: 'Paid' },
            { name: 'Domo', description: 'Cloud-based platform for business intelligence.', url: 'https://www.domo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=domo.com', dataAiHint: 'bi platform', pricing: 'Paid' },
            { name: 'Sisense', description: 'Embeddable analytics for customer-facing applications.', url: 'https://www.sisense.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sisense.com', dataAiHint: 'embedded analytics', pricing: 'Paid' },
            { name: 'ThoughtSpot', description: 'Search & AI-driven analytics.', url: 'https://www.thoughtspot.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=thoughtspot.com', dataAiHint: 'search analytics', pricing: 'Paid' },
            { name: 'Google Data Studio', description: 'Turn your data into informative dashboards and reports.', url: 'https://datastudio.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'data reporting', pricing: 'Free' },
            { name: 'Metabase', description: 'The easy, open source way to share data and analytics.', url: 'https://www.metabase.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=metabase.com', dataAiHint: 'open source bi', pricing: 'Freemium' },
        ]
    },
    {
        title: "E-commerce Platforms",
        icon: "ShoppingCart",
        tools: [
            { name: 'Shopify', description: 'E-commerce platform for businesses of all sizes.', url: 'https://www.shopify.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=shopify.com', dataAiHint: 'online store', pricing: 'Paid' },
            { name: 'BigCommerce', description: 'Leading e-commerce platform for growing brands.', url: 'https://www.bigcommerce.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bigcommerce.com', dataAiHint: 'ecommerce builder', pricing: 'Paid' },
            { name: 'WooCommerce', description: 'An open-source e-commerce plugin for WordPress.', url: 'https://woocommerce.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=woocommerce.com', dataAiHint: 'wordpress store', pricing: 'Free' },
            { name: 'Magento', description: 'Now Adobe Commerce, an open-source e-commerce platform.', url: 'https://business.adobe.com/products/magento/magento-commerce.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=adobe.com', dataAiHint: 'adobe commerce', pricing: 'Paid' },
            { name: 'Squarespace', description: 'All-in-one platform with e-commerce features.', url: 'https://www.squarespace.com/commerce', image: 'https://www.google.com/s2/favicons?sz=128&domain=squarespace.com', dataAiHint: 'website commerce', pricing: 'Paid' },
            { name: 'Wix eCommerce', description: 'Build your online store with Wix.', url: 'https://www.wix.com/ecommerce/website', image: 'https://www.google.com/s2/favicons?sz=128&domain=wix.com', dataAiHint: 'wix store', pricing: 'Paid' },
        ]
    },
    {
        title: "Website Builders",
        icon: "Layout",
        tools: [
            { name: 'Webflow', description: 'Build responsive websites visually.', url: 'https://webflow.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=webflow.com', dataAiHint: 'visual development', pricing: 'Freemium' },
            { name: 'Wix', description: 'Free website builder for creating stunning websites.', url: 'https://www.wix.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=wix.com', dataAiHint: 'drag and drop', pricing: 'Freemium' },
            { name: 'Squarespace', description: 'All-in-one platform to build a beautiful online presence.', url: 'https://www.squarespace.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=squarespace.com', dataAiHint: 'website templates', pricing: 'Paid' },
            { name: 'Framer', description: 'Design and build professional websites.', url: 'https://www.framer.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=framer.com', dataAiHint: 'interactive sites', pricing: 'Freemium' },
            { name: 'WordPress.com', description: 'Create a free website or build a blog with ease.', url: 'https://wordpress.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=wordpress.com', dataAiHint: 'blogging platform', pricing: 'Freemium' },
            { name: 'Weebly', description: 'Create a high-quality website, blog or online store.', url: 'https://www.weebly.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=weebly.com', dataAiHint: 'free website', pricing: 'Freemium' },
        ]
    },
    {
        title: "Cybersecurity",
        icon: "ShieldCheck",
        tools: [
            { name: 'CrowdStrike', description: 'Cloud-native endpoint security.', url: 'https://www.crowdstrike.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=crowdstrike.com', dataAiHint: 'endpoint security', pricing: 'Paid' },
            { name: 'Darktrace', description: 'Cyber AI for the real world.', url: 'https://www.darktrace.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=darktrace.com', dataAiHint: 'cyber ai', pricing: 'Paid' },
            { name: 'SentinelOne', description: 'AI-powered endpoint protection.', url: 'https://www.sentinelone.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sentinelone.com', dataAiHint: 'autonomous security', pricing: 'Paid' },
            { name: 'Vectra AI', description: 'AI-driven threat detection and response for hybrid cloud.', url: 'https://www.vectra.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=vectra.ai', dataAiHint: 'threat detection', pricing: 'Paid' },
            { name: 'Cloudflare', description: 'Web performance and security company.', url: 'https://www.cloudflare.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloudflare.com', dataAiHint: 'cdn security', pricing: 'Freemium' },
        ]
    },
    {
        title: "IT Management",
        icon: "Cpu",
        tools: [
            { name: 'Jamf', description: 'Apple enterprise management.', url: 'https://www.jamf.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jamf.com', dataAiHint: 'apple management', pricing: 'Paid' },
            { name: 'Kandji', description: 'Apple device management for modern businesses.', url: 'https://www.kandji.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kandji.io', dataAiHint: 'mdm solution', pricing: 'Paid' },
            { name: 'Microsoft Intune', description: 'Cloud-based unified endpoint management.', url: 'https://www.microsoft.com/en-us/security/business/endpoint-management/microsoft-intune', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'endpoint management', pricing: 'Paid' },
            { name: 'ManageEngine', description: 'Enterprise IT management software.', url: 'https://www.manageengine.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=manageengine.com', dataAiHint: 'it management', pricing: 'Freemium' },
            { name: 'ConnectWise', description: 'Software for technology solution providers.', url: 'https://www.connectwise.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=connectwise.com', dataAiHint: 'msp software', pricing: 'Paid' },
        ]
    },
    {
        title: "Supply Chain & Logistics",
        icon: "Truck",
        tools: [
            { name: 'Flexport', description: 'The modern freight forwarder.', url: 'https://www.flexport.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=flexport.com', dataAiHint: 'freight forwarding', pricing: 'Paid' },
            { name: 'SAP SCM', description: 'Supply chain management software.', url: 'https://www.sap.com/products/supply-chain-management.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=sap.com', dataAiHint: 'supply chain', pricing: 'Paid' },
            { name: 'Oracle SCM', description: 'Cloud-based supply chain management.', url: 'https://www.oracle.com/scm/', image: 'https://www.google.com/s2/favicons?sz=128&domain=oracle.com', dataAiHint: 'cloud scm', pricing: 'Paid' },
        ]
    },
    {
        title: "Real Estate & Property",
        icon: "Building",
        tools: [
            { name: 'Zillow', description: 'The leading real estate and rental marketplace.', url: 'https://www.zillow.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zillow.com', dataAiHint: 'real estate', pricing: 'Freemium' },
            { name: 'Redfin', description: 'Real estate brokerage with modern technology.', url: 'https://www.redfin.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=redfin.com', dataAiHint: 'real estate', pricing: 'Freemium' },
            { name: 'CoStar', description: 'Commercial real estate information and analytics.', url: 'https://www.costar.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=costar.com', dataAiHint: 'commercial real estate', pricing: 'Paid' },
        ]
    },
    {
        title: "Inventory Management",
        icon: "Box",
        tools: [
            { name: 'Cin7', description: 'Automated inventory management.', url: 'https://www.cin7.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cin7.com', dataAiHint: 'inventory software', pricing: 'Paid' },
            { name: 'Zoho Inventory', description: 'Online inventory management software.', url: 'https://www.zoho.com/inventory/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zoho.com', dataAiHint: 'inventory control', pricing: 'Freemium' },
            { name: 'inFlow Inventory', description: 'Inventory management for small business.', url: 'https://www.inflowinventory.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=inflowinventory.com', dataAiHint: 'small business', pricing: 'Paid' },
        ]
    },
    {
        title: "Team & People Management",
        icon: "Users",
        tools: [
            { name: '15Five', description: 'Continuous performance management.', url: 'https://www.15five.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=15five.com', dataAiHint: 'performance review', pricing: 'Paid' },
            { name: 'Culture Amp', description: 'Employee engagement and performance platform.', url: 'https://www.cultureamp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cultureamp.com', dataAiHint: 'employee engagement', pricing: 'Paid' },
            { name: 'Lattice', description: 'The people management platform.', url: 'https://lattice.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lattice.com', dataAiHint: 'people management', pricing: 'Paid' },
        ]
    },
    {
        title: "Developer Tools",
        icon: "Code",
        tools: [
            { name: 'GitHub', description: 'The complete developer platform.', url: 'https://github.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'code hosting', pricing: 'Freemium' },
            { name: 'GitLab', description: 'The One DevOps Platform.', url: 'https://about.gitlab.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gitlab.com', dataAiHint: 'devops platform', pricing: 'Freemium' },
            { name: 'Postman', description: 'The collaboration platform for API development.', url: 'https://www.postman.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=postman.com', dataAiHint: 'api development', pricing: 'Freemium' },
        ]
    },
    {
        title: "Knowledge Management",
        icon: "BrainCircuit",
        tools: [
            { name: 'Confluence', description: 'Team workspace for knowledge and collaboration.', url: 'https://www.atlassian.com/software/confluence', image: 'https://www.google.com/s2/favicons?sz=128&domain=atlassian.com', dataAiHint: 'knowledge base', pricing: 'Freemium' },
            { name: 'Guru', description: 'A knowledge management solution that works in your workflow.', url: 'https://www.getguru.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=getguru.com', dataAiHint: 'company wiki', pricing: 'Freemium' },
            { name: 'Slab', description: 'A knowledge hub for the modern workplace.', url: 'https://slab.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=slab.com', dataAiHint: 'modern workplace', pricing: 'Freemium' },
        ]
    },
    {
        title: "Document Management",
        icon: "FileText",
        tools: [
            { name: 'Google Workspace', description: 'Productivity and collaboration tools.', url: 'https://workspace.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'collaboration tools', pricing: 'Paid' },
            { name: 'Microsoft 365', description: 'Productivity cloud for work and life.', url: 'https://www.microsoft.com/en-us/microsoft-365', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'office apps', pricing: 'Paid' },
            { name: 'Dropbox', description: 'Cloud storage, file synchronization, and client software.', url: 'https://www.dropbox.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=dropbox.com', dataAiHint: 'file storage', pricing: 'Freemium' },
        ]
    },
    {
        title: "Surveys & Feedback",
        icon: "CheckSquare",
        tools: [
            { name: 'SurveyMonkey', description: 'Online survey software and questionnaire tool.', url: 'https://www.surveymonkey.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=surveymonkey.com', dataAiHint: 'online surveys', pricing: 'Freemium' },
            { name: 'Typeform', description: 'Create forms, surveys, and quizzes that people enjoy answering.', url: 'https://www.typeform.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=typeform.com', dataAiHint: 'conversational forms', pricing: 'Freemium' },
            { name: 'Qualtrics', description: 'Experience management platform.', url: 'https://www.qualtrics.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=qualtrics.com', dataAiHint: 'experience management', pricing: 'Paid' },
        ]
    },
    {
        title: "Automation",
        icon: "Settings",
        tools: [
            { name: 'Zapier', description: 'Automation for busy people.', url: 'https://zapier.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zapier.com', dataAiHint: 'app integration', pricing: 'Freemium' },
            { name: 'Make (formerly Integromat)', description: 'Visually create, build, and automate.', url: 'https://www.make.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=make.com', dataAiHint: 'workflow automation', pricing: 'Freemium' },
            { name: 'UiPath', description: 'Robotic Process Automation (RPA) platform.', url: 'https://www.uipath.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=uipath.com', dataAiHint: 'rpa', pricing: 'Paid' },
        ]
    },
    {
        title: "Customer Loyalty",
        icon: "Heart",
        tools: [
            { name: 'Smile.io', description: 'Loyalty programs for small businesses.', url: 'https://smile.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=smile.io', dataAiHint: 'rewards program', pricing: 'Paid' },
            { name: 'Yotpo', description: 'eCommerce marketing platform with loyalty & referrals.', url: 'https://www.yotpo.com/platform/loyalty-referrals/', image: 'https://www.google.com/s2/favicons?sz=128&domain=yotpo.com', dataAiHint: 'loyalty referrals', pricing: 'Paid' },
        ]
    },
    {
        title: "Reviews & Reputation",
        icon: "Star",
        tools: [
            { name: 'Podium', description: 'Interaction Management platform.', url: 'https://www.podium.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=podium.com', dataAiHint: 'online reviews', pricing: 'Paid' },
            { name: 'Birdeye', description: 'All-in-one experience marketing platform.', url: 'https://birdeye.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=birdeye.com', dataAiHint: 'experience marketing', pricing: 'Paid' },
        ]
    },
    {
        title: "Learning & Development",
        icon: "BookOpen",
        tools: [
            { name: 'Coursera for Business', description: 'Workforce development and training.', url: 'https://www.coursera.org/business', image: 'https://www.google.com/s2/favicons?sz=128&domain=coursera.org', dataAiHint: 'employee training', pricing: 'Paid' },
            { name: 'Udemy Business', description: 'Online learning platform for professional development.', url: 'https://business.udemy.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=udemy.com', dataAiHint: 'corporate training', pricing: 'Paid' },
        ]
    },
    {
        title: "Market Intelligence",
        icon: "Search",
        tools: [
            { name: 'Crayon', description: 'Market and competitive intelligence software.', url: 'https://www.crayon.co/', image: 'https://www.google.com/s2/favicons?sz=128&domain=crayon.co', dataAiHint: 'competitive intelligence', pricing: 'Paid' },
            { name: 'Similarweb', description: 'Digital intelligence for your business.', url: 'https://www.similarweb.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=similarweb.com', dataAiHint: 'website traffic', pricing: 'Freemium' },
        ]
    },
    {
        title: "Content Repurposing",
        icon: "Recycle",
        tools: [
            { name: 'Opus Clip', description: 'Turn long videos into viral shorts with AI.', url: 'https://www.opus.pro/', image: 'https://www.google.com/s2/favicons?sz=128&domain=opus.pro', dataAiHint: 'video clips', pricing: 'Freemium' },
            { name: 'Vidyo.ai', description: 'Make short videos from long ones instantly.', url: 'https://vidyo.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=vidyo.ai', dataAiHint: 'repurpose video', pricing: 'Freemium' },
        ]
    },
    {
        title: "Business Process Management",
        icon: "Briefcase",
        tools: [
            { name: 'Kissflow', description: 'Work platform to manage all of your work.', url: 'https://kissflow.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kissflow.com', dataAiHint: 'bpm software', pricing: 'Paid' },
            { name: 'ProcessMaker', description: 'Low-code business process management.', url: 'https://www.processmaker.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=processmaker.com', dataAiHint: 'low-code bpm', pricing: 'Paid' },
        ]
    },
    {
        title: "Chatbots & Conversational AI",
        icon: "Bot",
        tools: [
            { name: 'Drift', description: 'Conversational AI for sales and marketing.', url: 'https://www.drift.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=drift.com', dataAiHint: 'sales chatbot', pricing: 'Paid' },
            { name: 'ManyChat', description: 'Automate interactive conversations in Instagram DMs, Facebook Messenger.', url: 'https://manychat.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=manychat.com', dataAiHint: 'messenger marketing', pricing: 'Freemium' },
        ]
    },
    {
        title: "Forecasting",
        icon: "LineChart",
        tools: [
            { name: 'Jira', description: 'Project management with forecasting abilities.', url: 'https://www.atlassian.com/software/jira', image: 'https://www.google.com/s2/favicons?sz=128&domain=atlassian.com', dataAiHint: 'agile forecasting', pricing: 'Freemium' },
            { name: 'Anaplan', description: 'Platform for connected planning.', url: 'https://www.anaplan.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=anaplan.com', dataAiHint: 'connected planning', pricing: 'Paid' },
        ]
    }
];
