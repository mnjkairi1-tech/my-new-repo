
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
            { name: 'HubSpot', description: 'All-in-one marketing, sales, and service software.', url: 'https://www.hubspot.com/', image: 'https://picsum.photos/seed/biz-hubspot/600/400', dataAiHint: 'crm platform', pricing: 'Freemium' },
            { name: 'Salesforce', description: 'The world\'s #1 customer relationship management (CRM) platform.', url: 'https://www.salesforce.com/', image: 'https://picsum.photos/seed/biz-salesforce/600/400', dataAiHint: 'crm dashboard', pricing: 'Paid' },
            { name: 'Jasper', description: 'AI Content Platform for teams to create marketing copy.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/biz-jasper/600/400', dataAiHint: 'ai writer', pricing: 'Paid' },
            { name: 'Copy.ai', description: 'AI-powered copywriter for generating marketing content.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/biz-copyai/600/400', dataAiHint: 'marketing copy', pricing: 'Freemium' },
            { name: 'Semrush', description: 'Online visibility management and content marketing platform.', url: 'https://www.semrush.com/', image: 'https://picsum.photos/seed/semrush-biz/600/400', dataAiHint: 'seo platform', pricing: 'Paid' },
            { name: 'Ahrefs', description: 'SEO tools & resources to grow your search traffic.', url: 'https://ahrefs.com/', image: 'https://picsum.photos/seed/ahrefs-mktg/600/400', dataAiHint: 'seo tools', pricing: 'Paid' },
            { name: 'Mailchimp', description: 'Email marketing and automation platform.', url: 'https://mailchimp.com/', image: 'https://picsum.photos/seed/mailchimp-mktg/600/400', dataAiHint: 'email marketing', pricing: 'Freemium' },
            { name: 'ActiveCampaign', description: 'Customer experience automation platform.', url: 'https://www.activecampaign.com/', image: 'https://picsum.photos/seed/activecampaign-mktg/600/400', dataAiHint: 'cx automation', pricing: 'Paid' },
            { name: 'Hootsuite', description: 'Social media management dashboard.', url: 'https://www.hootsuite.com/', image: 'https://picsum.photos/seed/hootsuite-mktg/600/400', dataAiHint: 'social media', pricing: 'Paid' },
            { name: 'Buffer', description: 'Social media toolkit for small businesses.', url: 'https://buffer.com/', image: 'https://picsum.photos/seed/buffer-mktg/600/400', dataAiHint: 'social scheduling', pricing: 'Freemium' },
            { name: 'Canva', description: 'Graphic design platform to create marketing visuals.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-mktg/600/400', dataAiHint: 'graphic design', pricing: 'Freemium' },
            { name: 'Unbounce', description: 'Landing page builder for higher conversions.', url: 'https://unbounce.com/', image: 'https://picsum.photos/seed/unbounce-mktg/600/400', dataAiHint: 'landing page', pricing: 'Paid' },
            { name: 'OptinMonster', description: 'Lead generation software for marketing.', url: 'https://optinmonster.com/', image: 'https://picsum.photos/seed/optinmonster-mktg/600/400', dataAiHint: 'lead generation', pricing: 'Paid' },
            { name: 'Pipedrive', description: 'Sales CRM and pipeline management tool.', url: 'https://www.pipedrive.com/', image: 'https://picsum.photos/seed/pipedrive-mktg/600/400', dataAiHint: 'sales pipeline', pricing: 'Paid' },
            { name: 'Zoho CRM', description: 'Online Customer Relationship Management software.', url: 'https://www.zoho.com/crm/', image: 'https://picsum.photos/seed/zoho-crm-mktg/600/400', dataAiHint: 'online crm', pricing: 'Freemium' },
            { name: 'Gong', description: 'Revenue intelligence platform for sales teams.', url: 'https://www.gong.io/', image: 'https://picsum.photos/seed/gong-mktg/600/400', dataAiHint: 'revenue intelligence', pricing: 'Paid' },
            { name: 'Outreach', description: 'Sales execution platform to build pipeline and close deals.', url: 'https://www.outreach.io/', image: 'https://picsum.photos/seed/outreach-mktg/600/400', dataAiHint: 'sales execution', pricing: 'Paid' },
            { name: 'Drift', description: 'Conversational marketing and sales platform.', url: 'https://www.drift.com/', image: 'https://picsum.photos/seed/biz-drift/600/400', dataAiHint: 'conversational ai', pricing: 'Paid' },
            { name: 'Marketo', description: 'Marketing automation software.', url: 'https://business.adobe.com/products/marketo/adobe-marketo.html', image: 'https://picsum.photos/seed/marketo-mktg/600/400', dataAiHint: 'b2b marketing', pricing: 'Paid' },
            { name: 'Fathom Analytics', description: 'Simple, privacy-focused website analytics.', url: 'https://usefathom.com/', image: 'https://picsum.photos/seed/fathom-mktg/600/400', dataAiHint: 'website analytics', pricing: 'Paid' }
        ]
    },
    {
        title: "Customer Support",
        icon: "Handshake",
        tools: [
            { name: 'Intercom', description: 'AI-powered customer service platform.', url: 'https://www.intercom.com/', image: 'https://picsum.photos/seed/biz-intercom/600/400', dataAiHint: 'customer service', pricing: 'Paid' },
            { name: 'Zendesk', description: 'Customer service software and sales CRM.', url: 'https://www.zendesk.com/', image: 'https://picsum.photos/seed/biz-zendesk/600/400', dataAiHint: 'support crm', pricing: 'Paid' },
            { name: 'Freshdesk', description: 'Cloud-based customer support software.', url: 'https://freshdesk.com/', image: 'https://picsum.photos/seed/freshdesk-support/600/400', dataAiHint: 'helpdesk software', pricing: 'Freemium' },
            { name: 'Help Scout', description: 'A delightful, human-centered customer service platform.', url: 'https://www.helpscout.com/', image: 'https://picsum.photos/seed/helpscout-support/600/400', dataAiHint: 'shared inbox', pricing: 'Paid' },
            { name: 'Gorgias', description: 'Customer service platform for e-commerce.', url: 'https://www.gorgias.com/', image: 'https://picsum.photos/seed/gorgias-biz/600/400', dataAiHint: 'ecommerce helpdesk', pricing: 'Paid' },
            { name: 'LiveChat', description: 'Live chat software with chatbot capabilities.', url: 'https://www.livechat.com/', image: 'https://picsum.photos/seed/livechat-support/600/400', dataAiHint: 'chatbot software', pricing: 'Paid' },
            { name: 'Tidio', description: 'A comprehensive live chat and chatbot solution.', url: 'https://www.tidio.com/', image: 'https://picsum.photos/seed/tidio-support/600/400', dataAiHint: 'live chat', pricing: 'Freemium' },
            { name: 'Front', description: 'The customer communication hub.', url: 'https://front.com/', image: 'https://picsum.photos/seed/front-support/600/400', dataAiHint: 'communication hub', pricing: 'Paid' },
            { name: 'Gladly', description: 'A radically personal customer service platform.', url: 'https://www.gladly.com/', image: 'https://picsum.photos/seed/gladly-support/600/400', dataAiHint: 'personal service', pricing: 'Paid' },
            { name: 'Kayako', description: 'Help desk software for personal customer service.', url: 'https://www.kayako.com/', image: 'https://picsum.photos/seed/kayako-support/600/400', dataAiHint: 'help desk', pricing: 'Paid' },
            { name: 'Zoho Desk', description: 'Context-aware help desk software.', url: 'https://www.zoho.com/desk/', image: 'https://picsum.photos/seed/zohodesk-support/600/400', dataAiHint: 'context-aware', pricing: 'Freemium' },
            { name: 'TeamSupport', description: 'B2B customer support software.', url: 'https://www.teamsupport.com/', image: 'https://picsum.photos/seed/teamsupport-b2b/600/400', dataAiHint: 'b2b support', pricing: 'Paid' },
            { name: 'Reamaze', description: 'Customer service helpdesk for modern businesses.', url: 'https://www.reamaze.com/', image: 'https://picsum.photos/seed/reamaze-support/600/400', dataAiHint: 'modern helpdesk', pricing: 'Paid' },
            { name: 'SupportBee', description: 'A collaborative email inbox for teams.', url: 'https://supportbee.com/', image: 'https://picsum.photos/seed/supportbee/600/400', dataAiHint: 'collaborative inbox', pricing: 'Paid' },
            { name: 'Dixa', description: 'Conversational customer service platform.', url: 'https://www.dixa.com/', image: 'https://picsum.photos/seed/dixa-support/600/400', dataAiHint: 'conversational platform', pricing: 'Paid' },
            { name: 'Kustomer', description: 'The omnichannel CRM for customer service.', url: 'https://www.kustomer.com/', image: 'https://picsum.photos/seed/kustomer-support/600/400', dataAiHint: 'omnichannel crm', pricing: 'Paid' },
            { name: 'ProProfs Help Desk', description: 'Cloud-based help desk software.', url: 'https://www.proprofs.com/help-desk/', image: 'https://picsum.photos/seed/proprofs-support/600/400', dataAiHint: 'cloud helpdesk', pricing: 'Freemium' },
            { name: 'HappyFox', description: 'Online help desk software.', url: 'https://www.happyfox.com/', image: 'https://picsum.photos/seed/happyfox-support/600/400', dataAiHint: 'helpdesk system', pricing: 'Paid' },
            { name: 'AzureDesk', description: 'Affordable help desk software.', url: 'https://www.azuredesk.co/', image: 'https://picsum.photos/seed/azuredesk/600/400', dataAiHint: 'affordable helpdesk', pricing: 'Paid' },
            { name: 'Crisp', description: 'All-in-one multilingual customer support platform.', url: 'https://crisp.chat/', image: 'https://picsum.photos/seed/crisp-support/600/400', dataAiHint: 'multilingual support', pricing: 'Freemium' }
        ]
    },
    {
        title: "HR & Recruitment",
        icon: "UserPlus",
        tools: [
            { name: 'Greenhouse', description: 'Hiring software for growing companies.', url: 'https://www.greenhouse.io/', image: 'https://picsum.photos/seed/greenhouse-biz/600/400', dataAiHint: 'hiring software', pricing: 'Paid' },
            { name: 'Lever', description: 'Talent acquisition suite for the entire talent lifecycle.', url: 'https://www.lever.co/', image: 'https://picsum.photos/seed/lever-biz/600/400', dataAiHint: 'recruiting ats', pricing: 'Paid' },
            { name: 'BambooHR', description: 'HR software for small and medium businesses.', url: 'https://www.bamboohr.com/', image: 'https://picsum.photos/seed/bamboohr-biz/600/400', dataAiHint: 'hr software', pricing: 'Paid' },
            { name: 'HireVue', description: 'AI-driven hiring platform with video interviews.', url: 'https://www.hirevue.com/', image: 'https://picsum.photos/seed/biz-hirevue/600/400', dataAiHint: 'video interviews', pricing: 'Paid' },
            { name: 'Eightfold AI', description: 'Deep Learning Talent Intelligence Platform.', url: 'https://eightfold.ai/', image: 'https://picsum.photos/seed/biz-eightfold/600/400', dataAiHint: 'talent intelligence', pricing: 'Paid' },
            { name: 'Workday', description: 'Enterprise management cloud for finance, HR, and planning.', url: 'https://www.workday.com/', image: 'https://picsum.photos/seed/workday-hr/600/400', dataAiHint: 'hris', pricing: 'Paid' },
            { name: 'Gusto', description: 'Payroll, benefits, and HR for small businesses.', url: 'https://gusto.com/', image: 'https://picsum.photos/seed/gusto-hr/600/400', dataAiHint: 'payroll hr', pricing: 'Paid' },
            { name: 'Rippling', description: 'Employee management platform for HR and IT.', url: 'https://www.rippling.com/', image: 'https://picsum.photos/seed/rippling-hr/600/400', dataAiHint: 'employee management', pricing: 'Paid' },
            { name: 'Deel', description: 'All-in-one HR platform for global teams.', url: 'https://www.deel.com/', image: 'https://picsum.photos/seed/deel-hr/600/400', dataAiHint: 'global payroll', pricing: 'Paid' },
            { name: 'Workable', description: 'All-in-one recruiting software.', url: 'https://www.workable.com/', image: 'https://picsum.photos/seed/workable-hr/600/400', dataAiHint: 'recruiting software', pricing: 'Paid' },
            { name: 'SmartRecruiters', description: 'Talent Acquisition Suite.', url: 'https://www.smartrecruiters.com/', image: 'https://picsum.photos/seed/smartrecruiters/600/400', dataAiHint: 'hiring success', pricing: 'Paid' },
            { name: 'JazzHR', description: 'Powerful, user-friendly, and affordable recruiting software.', url: 'https://www.jazzhr.com/', image: 'https://picsum.photos/seed/jazzhr/600/400', dataAiHint: 'smb recruiting', pricing: 'Paid' },
            { name: 'Recruitee', description: 'Collaborative hiring software.', url: 'https://recruitee.com/', image: 'https://picsum.photos/seed/recruitee/600/400', dataAiHint: 'collaborative hiring', pricing: 'Paid' },
            { name: 'SeekOut', description: 'AI-powered talent search engine.', url: 'https://www.seekout.com/', image: 'https://picsum.photos/seed/seekout-hr/600/400', dataAiHint: 'talent search', pricing: 'Paid' },
            { name: 'Gem', description: 'All-in-one recruiting platform.', url: 'https://www.gem.com/', image: 'https://picsum.photos/seed/gem-hr/600/400', dataAiHint: 'recruiting crm', pricing: 'Paid' },
            { name: 'Pymetrics', description: 'Talent matching platform using behavioral science and AI.', url: 'https://www.pymetrics.ai/', image: 'https://picsum.photos/seed/pymetrics/600/400', dataAiHint: 'ai talent', pricing: 'Paid' },
            { name: 'Textio', description: 'Augmented writing platform for inclusive language.', url: 'https://textio.com/', image: 'https://picsum.photos/seed/textio-hr/600/400', dataAiHint: 'inclusive writing', pricing: 'Paid' },
            { name: 'Phenom', description: 'Talent Experience Management platform.', url: 'https://www.phenom.com/', image: 'https://picsum.photos/seed/phenom-hr/600/400', dataAiHint: 'talent experience', pricing: 'Paid' },
            { name: 'HiBob', description: 'The HR platform for modern business.', url: 'https://www.hibob.com/', image: 'https://picsum.photos/seed/hibob-hr/600/400', dataAiHint: 'modern hr', pricing: 'Paid' },
            { name: 'Lattice', description: 'People management platform.', url: 'https://lattice.com/', image: 'https://picsum.photos/seed/lattice-hr/600/400', dataAiHint: 'performance management', pricing: 'Paid' }
        ]
    },
    {
        title: "Operations & Productivity",
        icon: "Zap",
        tools: [
            { name: 'Notion', description: 'The all-in-one workspace for your team.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-biz/600/400', dataAiHint: 'workspace app', pricing: 'Freemium' },
            { name: 'Slack', description: 'Team communication and collaboration platform.', url: 'https://slack.com/', image: 'https://picsum.photos/seed/slack-biz/600/400', dataAiHint: 'team chat', pricing: 'Freemium' },
            { name: 'Airtable', description: 'Low-code platform for building collaborative apps.', url: 'https://www.airtable.com/', image: 'https://picsum.photos/seed/airtable-ops/600/400', dataAiHint: 'database spreadsheet', pricing: 'Freemium' },
            { name: 'Zapier', description: 'Automation for busy people, connecting your apps.', url: 'https://zapier.com/', image: 'https://picsum.photos/seed/zapier-ops/600/400', dataAiHint: 'app automation', pricing: 'Freemium' },
            { name: 'Fireflies.ai', description: 'AI meeting assistant to record and transcribe.', url: 'https://fireflies.ai/', image: 'https://picsum.photos/seed/biz-fireflies/600/400', dataAiHint: 'meeting recorder', pricing: 'Freemium' },
            { name: 'Motion', description: 'AI-powered calendar and time management.', url: 'https://www.usemotion.com/', image: 'https://picsum.photos/seed/biz-motion/600/400', dataAiHint: 'ai calendar', pricing: 'Paid' },
            { name: 'Asana', description: 'Work management platform for teams.', url: 'https://asana.com/', image: 'https://picsum.photos/seed/asana-ops/600/400', dataAiHint: 'project management', pricing: 'Freemium' },
            { name: 'Trello', description: 'A visual collaboration tool for your team.', url: 'https://trello.com/', image: 'https://picsum.photos/seed/trello-ops/600/400', dataAiHint: 'kanban boards', pricing: 'Freemium' },
            { name: 'Miro', description: 'Online collaborative whiteboard platform.', url: 'https://miro.com/', image: 'https://picsum.photos/seed/miro-ops/600/400', dataAiHint: 'visual collaboration', pricing: 'Freemium' },
            { name: 'Loom', description: 'Video messaging for work.', url: 'https://www.loom.com/', image: 'https://picsum.photos/seed/loom-ops/600/400', dataAiHint: 'screen recording', pricing: 'Freemium' },
            { name: 'Superhuman', description: 'The fastest email experience ever made.', url: 'https://superhuman.com/', image: 'https://picsum.photos/seed/superhuman-ops/600/400', dataAiHint: 'email productivity', pricing: 'Paid' },
            { name: 'Evernote', description: 'Note-taking and organization app.', url: 'https://evernote.com/', image: 'https://picsum.photos/seed/evernote-ops/600/400', dataAiHint: 'note taking', pricing: 'Freemium' },
            { name: 'Grammarly', description: 'AI-powered writing assistant.', url: 'https://www.grammarly.com/', image: 'https://picsum.photos/seed/grammarly-ops/600/400', dataAiHint: 'writing assistant', pricing: 'Freemium' },
            { name: 'LastPass', description: 'Password manager and vault app.', url: 'https://www.lastpass.com/', image: 'https://picsum.photos/seed/lastpass-ops/600/400', dataAiHint: 'password manager', pricing: 'Freemium' },
            { name: '1Password', description: 'Password manager for families, businesses, and teams.', url: 'https://1password.com/', image: 'https://picsum.photos/seed/1password-ops/600/400', dataAiHint: 'secure passwords', pricing: 'Paid' },
            { name: 'Todoist', description: 'To-do list and task manager.', url: 'https://todoist.com/', image: 'https://picsum.photos/seed/todoist-ops/600/400', dataAiHint: 'task manager', pricing: 'Freemium' },
            { name: 'ClickUp', description: 'One app to replace them all. For tasks, docs, chat, goals.', url: 'https://clickup.com/', image: 'https://picsum.photos/seed/biz-clickup/600/400', dataAiHint: 'productivity platform', pricing: 'Freemium' },
            { name: 'Process Street', description: 'Workflow software for teams.', url: 'https://www.process.st/', image: 'https://picsum.photos/seed/processst-ops/600/400', dataAiHint: 'checklist software', pricing: 'Paid' },
            { name: 'Coda', description: 'The all-in-one doc that brings words, data, and teams together.', url: 'https://coda.io/', image: 'https://picsum.photos/seed/coda-ops/600/400', dataAiHint: 'all-in-one doc', pricing: 'Freemium' },
            { name: 'SaneBox', description: 'AI for your inbox to filter out unimportant emails.', url: 'https://www.sanebox.com/', image: 'https://picsum.photos/seed/sanebox-ops/600/400', dataAiHint: 'email management', pricing: 'Paid' }
        ]
    },
    {
        title: "Finance & Accounting",
        icon: "Wallet",
        tools: [
            { name: 'QuickBooks', description: 'Smart, simple online accounting software.', url: 'https://quickbooks.intuit.com/', image: 'https://picsum.photos/seed/quickbooks-biz/600/400', dataAiHint: 'accounting', pricing: 'Paid' },
            { name: 'Xero', description: 'Online accounting software for your business.', url: 'https://www.xero.com/', image: 'https://picsum.photos/seed/xero-biz/600/400', dataAiHint: 'business accounting', pricing: 'Paid' },
            { name: 'Stripe', description: 'Payments infrastructure for the internet.', url: 'https://stripe.com/', image: 'https://picsum.photos/seed/stripe-biz/600/400', dataAiHint: 'payment processing', pricing: 'Paid' },
            { name: 'Brex', description: 'Financial stack for startups and growing companies.', url: 'https://www.brex.com/', image: 'https://picsum.photos/seed/brex-biz/600/400', dataAiHint: 'startup finance', pricing: 'Paid' },
            { name: 'FreshBooks', description: 'Accounting software for small businesses and freelancers.', url: 'https://www.freshbooks.com/', image: 'https://picsum.photos/seed/freshbooks-fin/600/400', dataAiHint: 'small business', pricing: 'Paid' },
            { name: 'Wave', description: 'Free invoicing & accounting software for small businesses.', url: 'https://www.waveapps.com/', image: 'https://picsum.photos/seed/wave-fin/600/400', dataAiHint: 'free accounting', pricing: 'Free' },
            { name: 'Zoho Books', description: 'Online accounting software that manages your finances.', url: 'https://www.zoho.com/books/', image: 'https://picsum.photos/seed/zohobooks-fin/600/400', dataAiHint: 'finance management', pricing: 'Freemium' },
            { name: 'NetSuite', description: 'Cloud ERP solution for mid-sized to large businesses.', url: 'https://www.netsuite.com/', image: 'https://picsum.photos/seed/netsuite-fin/600/400', dataAiHint: 'cloud erp', pricing: 'Paid' },
            { name: 'Expensify', description: 'Expense reports done in a snap.', url: 'https://www.expensify.com/', image: 'https://picsum.photos/seed/expensify-fin/600/400', dataAiHint: 'expense reports', pricing: 'Freemium' },
            { name: 'Ramp', description: 'Finance automation platform for modern businesses.', url: 'https://ramp.com/', image: 'https://picsum.photos/seed/ramp-fin/600/400', dataAiHint: 'corporate cards', pricing: 'Free' },
            { name: 'Bill.com', description: 'Automate accounts payable and receivable.', url: 'https://www.bill.com/', image: 'https://picsum.photos/seed/billcom-fin/600/400', dataAiHint: 'ap ar automation', pricing: 'Paid' },
            { name: 'Tipalti', description: 'Global AP and Mass Payments Automation.', url: 'https://tipalti.com/', image: 'https://picsum.photos/seed/tipalti-fin/600/400', dataAiHint: 'global payments', pricing: 'Paid' },
            { name: 'Avalara', description: 'Tax compliance done right.', url: 'https://www.avalara.com/', image: 'https://picsum.photos/seed/avalara-fin/600/400', dataAiHint: 'tax compliance', pricing: 'Paid' },
            { name: 'Sage Intacct', description: 'Cloud financial management software.', url: 'https://www.sageintacct.com/', image: 'https://picsum.photos/seed/intacct-fin/600/400', dataAiHint: 'cloud financials', pricing: 'Paid' },
        ]
    },
    {
        title: "Project Management",
        icon: "ListChecks",
        tools: [
            { name: 'ClickUp', description: 'One app to replace them all.', url: 'https://clickup.com/ai', image: 'https://picsum.photos/seed/biz-clickup/600/400', dataAiHint: 'productivity platform', pricing: 'Freemium' },
            { name: 'Asana', description: 'Work management for teams.', url: 'https://asana.com/', image: 'https://picsum.photos/seed/asana-biz/600/400', dataAiHint: 'team tasks', pricing: 'Freemium' },
            { name: 'Trello', description: 'A visual collaboration tool for your team.', url: 'https://trello.com/', image: 'https://picsum.photos/seed/trello-biz/600/400', dataAiHint: 'kanban boards', pricing: 'Freemium' },
            { name: 'Monday.com', description: 'Work OS that powers teams to run projects.', url: 'https://monday.com/', image: 'https://picsum.photos/seed/monday-biz/600/400', dataAiHint: 'work os', pricing: 'Paid' },
            { name: 'Jira', description: 'Project management tool for agile teams.', url: 'https://www.atlassian.com/software/jira', image: 'https://picsum.photos/seed/jira-pm/600/400', dataAiHint: 'agile teams', pricing: 'Freemium' },
            { name: 'Wrike', description: 'Versatile project management software.', url: 'https://www.wrike.com/', image: 'https://picsum.photos/seed/wrike-pm/600/400', dataAiHint: 'enterprise pm', pricing: 'Paid' },
            { name: 'Basecamp', description: 'The all-in-one toolkit for working remotely.', url: 'https://basecamp.com/', image: 'https://picsum.photos/seed/basecamp-pm/600/400', dataAiHint: 'remote work', pricing: 'Paid' },
            { name: 'Smartsheet', description: 'The enterprise platform for dynamic work.', url: 'https://www.smartsheet.com/', image: 'https://picsum.photos/seed/smartsheet-pm/600/400', dataAiHint: 'dynamic work', pricing: 'Paid' },
            { name: 'Notion', description: 'Project management integrated into your workspace.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-pm/600/400', dataAiHint: 'all-in-one', pricing: 'Freemium' },
            { name: 'Airtable', description: 'Connect everything. Achieve anything.', url: 'https://www.airtable.com/', image: 'https://picsum.photos/seed/airtable-pm/600/400', dataAiHint: 'app builder', pricing: 'Freemium' },
            { name: 'Teamwork', description: 'Project management software that teams love.', url: 'https://www.teamwork.com/', image: 'https://picsum.photos/seed/teamwork-pm/600/400', dataAiHint: 'team collaboration', pricing: 'Paid' },
            { name: 'Freedcamp', description: 'Free project management tool.', url: 'https://freedcamp.com/', image: 'https://picsum.photos/seed/freedcamp-pm/600/400', dataAiHint: 'free pm', pricing: 'Free' },
            { name: 'LiquidPlanner', description: 'Predictive project management.', url: 'https://www.liquidplanner.com/', image: 'https://picsum.photos/seed/liquidplanner/600/400', dataAiHint: 'predictive planning', pricing: 'Paid' },
            { name: 'Microsoft Project', description: 'Project management software by Microsoft.', url: 'https://www.microsoft.com/en-us/microsoft-365/project/project-management-software', image: 'https://picsum.photos/seed/msproject-pm/600/400', dataAiHint: 'gantt charts', pricing: 'Paid' },
            { name: 'Hive', description: 'The project management tool for productive teams.', url: 'https://hive.com/', image: 'https://picsum.photos/seed/hive-pm/600/400', dataAiHint: 'productive teams', pricing: 'Paid' },
        ]
    },
    {
        title: "Communication & Collaboration",
        icon: "MessageSquare",
        tools: [
            { name: 'Slack', description: 'Team communication platform.', url: 'https://slack.com/', image: 'https://picsum.photos/seed/slack-comm/600/400', dataAiHint: 'team chat', pricing: 'Freemium' },
            { name: 'Microsoft Teams', description: 'Chat, meet, call, and collaborate.', url: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software', image: 'https://picsum.photos/seed/teams-comm/600/400', dataAiHint: 'video conference', pricing: 'Freemium' },
            { name: 'Zoom', description: 'Video conferencing and web conferencing service.', url: 'https://zoom.us/', image: 'https://picsum.photos/seed/zoom-comm/600/400', dataAiHint: 'online meetings', pricing: 'Freemium' },
            { name: 'Miro', description: 'Online collaborative whiteboard platform.', url: 'https://miro.com/', image: 'https://picsum.photos/seed/miro-comm/600/400', dataAiHint: 'digital whiteboard', pricing: 'Freemium' },
            { name: 'Google Workspace', description: 'Productivity and collaboration tools including Gmail and Meet.', url: 'https://workspace.google.com/', image: 'https://picsum.photos/seed/gworkspace-comm/600/400', dataAiHint: 'collaboration tools', pricing: 'Paid' },
            { name: 'Discord', description: 'Your place to talk and hang out.', url: 'https://discord.com/', image: 'https://picsum.photos/seed/discord-comm/600/400', dataAiHint: 'voice chat', pricing: 'Freemium' },
            { name: 'Loom', description: 'Video messaging for work.', url: 'https://www.loom.com/', image: 'https://picsum.photos/seed/loom-comm/600/400', dataAiHint: 'screen sharing', pricing: 'Freemium' },
            { name: 'Mural', description: 'Digital-first visual collaboration.', url: 'https://www.mural.co/', image: 'https://picsum.photos/seed/mural-comm/600/400', dataAiHint: 'visual collaboration', pricing: 'Freemium' },
            { name: 'Twist', description: 'A calmer, more organized way to work together.', url: 'https://twist.com/', image: 'https://picsum.photos/seed/twist-comm/600/400', dataAiHint: 'async communication', pricing: 'Freemium' },
            { name: 'Webex', description: 'Video conferencing, online meetings, screen share.', url: 'https://www.webex.com/', image: 'https://picsum.photos/seed/webex-comm/600/400', dataAiHint: 'cisco meetings', pricing: 'Freemium' },
        ]
    },
    {
        title: "Business Intelligence & Analytics",
        icon: "BarChart3",
        tools: [
            { name: 'Tableau', description: 'Leading data visualization and BI software.', url: 'https://www.tableau.com/', image: 'https://picsum.photos/seed/tableau-bi-biz/600/400', dataAiHint: 'data visualization', pricing: 'Paid' },
            { name: 'Power BI', description: 'Microsoft\'s BI tools with integrated AI capabilities.', url: 'https://powerbi.microsoft.com/', image: 'https://picsum.photos/seed/powerbi-biz/600/400', dataAiHint: 'business analytics', pricing: 'Freemium' },
            { name: 'Looker', description: 'Business intelligence and big data analytics platform.', url: 'https://looker.com/', image: 'https://picsum.photos/seed/looker-biz/600/400', dataAiHint: 'data platform', pricing: 'Paid' },
            { name: 'Qlik', description: 'End-to-end data integration and analytics.', url: 'https://www.qlik.com/', image: 'https://picsum.photos/seed/qlik-bi/600/400', dataAiHint: 'data analytics', pricing: 'Paid' },
            { name: 'Domo', description: 'Cloud-based platform for business intelligence.', url: 'https://www.domo.com/', image: 'https://picsum.photos/seed/domo-bi/600/400', dataAiHint: 'bi platform', pricing: 'Paid' },
            { name: 'Sisense', description: 'Embeddable analytics for customer-facing applications.', url: 'https://www.sisense.com/', image: 'https://picsum.photos/seed/sisense-bi/600/400', dataAiHint: 'embedded analytics', pricing: 'Paid' },
            { name: 'ThoughtSpot', description: 'Search & AI-driven analytics.', url: 'https://www.thoughtspot.com/', image: 'https://picsum.photos/seed/thoughtspot-bi/600/400', dataAiHint: 'search analytics', pricing: 'Paid' },
            { name: 'Google Data Studio', description: 'Turn your data into informative dashboards and reports.', url: 'https://datastudio.google.com/', image: 'https://picsum.photos/seed/gds-bi/600/400', dataAiHint: 'data reporting', pricing: 'Free' },
            { name: 'Metabase', description: 'The easy, open source way to share data and analytics.', url: 'https://www.metabase.com/', image: 'https://picsum.photos/seed/metabase-bi/600/400', dataAiHint: 'open source bi', pricing: 'Freemium' },
        ]
    },
    {
        title: "E-commerce Platforms",
        icon: "ShoppingCart",
        tools: [
            { name: 'Shopify', description: 'E-commerce platform for businesses of all sizes.', url: 'https://www.shopify.com/', image: 'https://picsum.photos/seed/shopify-ecom/600/400', dataAiHint: 'online store', pricing: 'Paid' },
            { name: 'BigCommerce', description: 'Leading e-commerce platform for growing brands.', url: 'https://www.bigcommerce.com/', image: 'https://picsum.photos/seed/bigcommerce-ecom/600/400', dataAiHint: 'ecommerce builder', pricing: 'Paid' },
            { name: 'WooCommerce', description: 'An open-source e-commerce plugin for WordPress.', url: 'https://woocommerce.com/', image: 'https://picsum.photos/seed/woocommerce-ecom/600/400', dataAiHint: 'wordpress store', pricing: 'Free' },
            { name: 'Magento', description: 'Now Adobe Commerce, an open-source e-commerce platform.', url: 'https://business.adobe.com/products/magento/magento-commerce.html', image: 'https://picsum.photos/seed/magento-ecom/600/400', dataAiHint: 'adobe commerce', pricing: 'Paid' },
            { name: 'Squarespace', description: 'All-in-one platform with e-commerce features.', url: 'https://www.squarespace.com/commerce', image: 'https://picsum.photos/seed/squarespace-ecom/600/400', dataAiHint: 'website commerce', pricing: 'Paid' },
            { name: 'Wix eCommerce', description: 'Build your online store with Wix.', url: 'https://www.wix.com/ecommerce/website', image: 'https://picsum.photos/seed/wix-ecom/600/400', dataAiHint: 'wix store', pricing: 'Paid' },
        ]
    },
    {
        title: "Website Builders",
        icon: "Layout",
        tools: [
            { name: 'Webflow', description: 'Build responsive websites visually.', url: 'https://webflow.com/', image: 'https://picsum.photos/seed/webflow-biz/600/400', dataAiHint: 'visual development', pricing: 'Freemium' },
            { name: 'Wix', description: 'Free website builder for creating stunning websites.', url: 'https://www.wix.com/', image: 'https://picsum.photos/seed/wix-biz/600/400', dataAiHint: 'drag and drop', pricing: 'Freemium' },
            { name: 'Squarespace', description: 'All-in-one platform to build a beautiful online presence.', url: 'https://www.squarespace.com/', image: 'https://picsum.photos/seed/squarespace-biz/600/400', dataAiHint: 'website templates', pricing: 'Paid' },
            { name: 'Framer', description: 'Design and build professional websites.', url: 'https://www.framer.com/', image: 'https://picsum.photos/seed/framer-builder/600/400', dataAiHint: 'interactive sites', pricing: 'Freemium' },
            { name: 'WordPress.com', description: 'Create a free website or build a blog with ease.', url: 'https://wordpress.com/', image: 'https://picsum.photos/seed/wordpress-builder/600/400', dataAiHint: 'blogging platform', pricing: 'Freemium' },
            { name: 'Weebly', description: 'Create a high-quality website, blog or online store.', url: 'https://www.weebly.com/', image: 'https://picsum.photos/seed/weebly-builder/600/400', dataAiHint: 'free website', pricing: 'Freemium' },
        ]
    },
    {
        title: "Cybersecurity",
        icon: "ShieldCheck",
        tools: [
            { name: 'CrowdStrike', description: 'Cloud-native endpoint security.', url: 'https://www.crowdstrike.com/', image: 'https://picsum.photos/seed/crowdstrike-sec-biz/600/400', dataAiHint: 'endpoint security', pricing: 'Paid' },
            { name: 'Darktrace', description: 'Cyber AI for the real world.', url: 'https://www.darktrace.com/', image: 'https://picsum.photos/seed/darktrace-biz/600/400', dataAiHint: 'cyber ai', pricing: 'Paid' },
            { name: 'SentinelOne', description: 'AI-powered endpoint protection.', url: 'https://www.sentinelone.com/', image: 'https://picsum.photos/seed/sentinelone-sec/600/400', dataAiHint: 'autonomous security', pricing: 'Paid' },
            { name: 'Vectra AI', description: 'AI-driven threat detection and response for hybrid cloud.', url: 'https://www.vectra.ai/', image: 'https://picsum.photos/seed/vectra-sec/600/400', dataAiHint: 'threat detection', pricing: 'Paid' },
            { name: 'Cloudflare', description: 'Web performance and security company.', url: 'https://www.cloudflare.com/', image: 'https://picsum.photos/seed/cloudflare-sec/600/400', dataAiHint: 'cdn security', pricing: 'Freemium' },
        ]
    },
    {
        title: "IT Management",
        icon: "Cpu",
        tools: [
            { name: 'Jamf', description: 'Apple enterprise management.', url: 'https://www.jamf.com/', image: 'https://picsum.photos/seed/jamf-it/600/400', dataAiHint: 'apple management', pricing: 'Paid' },
            { name: 'Kandji', description: 'Apple device management for modern businesses.', url: 'https://www.kandji.io/', image: 'https://picsum.photos/seed/kandji-it/600/400', dataAiHint: 'mdm solution', pricing: 'Paid' },
            { name: 'Microsoft Intune', description: 'Cloud-based unified endpoint management.', url: 'https://www.microsoft.com/en-us/security/business/endpoint-management/microsoft-intune', image: 'https://picsum.photos/seed/intune-it/600/400', dataAiHint: 'endpoint management', pricing: 'Paid' },
            { name: 'ManageEngine', description: 'Enterprise IT management software.', url: 'https://www.manageengine.com/', image: 'https://picsum.photos/seed/manageengine-it/600/400', dataAiHint: 'it management', pricing: 'Freemium' },
            { name: 'ConnectWise', description: 'Software for technology solution providers.', url: 'https://www.connectwise.com/', image: 'https://picsum.photos/seed/connectwise-it/600/400', dataAiHint: 'msp software', pricing: 'Paid' },
        ]
    },
    {
        title: "Supply Chain & Logistics",
        icon: "Truck",
        tools: [
            { name: 'Flexport', description: 'The modern freight forwarder.', url: 'https://www.flexport.com/', image: 'https://picsum.photos/seed/flexport-biz/600/400', dataAiHint: 'freight forwarding', pricing: 'Paid' },
            { name: 'SAP SCM', description: 'Supply chain management software.', url: 'https://www.sap.com/products/supply-chain-management.html', image: 'https://picsum.photos/seed/sap-scm/600/400', dataAiHint: 'supply chain', pricing: 'Paid' },
            { name: 'Oracle SCM', description: 'Cloud-based supply chain management.', url: 'https://www.oracle.com/scm/', image: 'https://picsum.photos/seed/oracle-scm/600/400', dataAiHint: 'cloud scm', pricing: 'Paid' },
        ]
    },
    {
        title: "Real Estate & Property",
        icon: "Building",
        tools: [
            { name: 'Zillow', description: 'The leading real estate and rental marketplace.', url: 'https://www.zillow.com/', image: 'https://picsum.photos/seed/zillow-biz/600/400', dataAiHint: 'real estate', pricing: 'Freemium' },
            { name: 'Redfin', description: 'Real estate brokerage with modern technology.', url: 'https://www.redfin.com/', image: 'https://picsum.photos/seed/redfin-re/600/400', dataAiHint: 'real estate', pricing: 'Freemium' },
            { name: 'CoStar', description: 'Commercial real estate information and analytics.', url: 'https://www.costar.com/', image: 'https://picsum.photos/seed/costar-re/600/400', dataAiHint: 'commercial real estate', pricing: 'Paid' },
        ]
    },
    {
        title: "Inventory Management",
        icon: "Box",
        tools: [
            { name: 'Cin7', description: 'Automated inventory management.', url: 'https://www.cin7.com/', image: 'https://picsum.photos/seed/cin7-biz/600/400', dataAiHint: 'inventory software', pricing: 'Paid' },
            { name: 'Zoho Inventory', description: 'Online inventory management software.', url: 'https://www.zoho.com/inventory/', image: 'https://picsum.photos/seed/zoho-inventory/600/400', dataAiHint: 'inventory control', pricing: 'Freemium' },
            { name: 'inFlow Inventory', description: 'Inventory management for small business.', url: 'https://www.inflowinventory.com/', image: 'https://picsum.photos/seed/inflow-inventory/600/400', dataAiHint: 'small business', pricing: 'Paid' },
        ]
    },
    {
        title: "Team & People Management",
        icon: "Users",
        tools: [
            { name: '15Five', description: 'Continuous performance management.', url: 'https://www.15five.com/', image: 'https://picsum.photos/seed/15five-biz/600/400', dataAiHint: 'performance review', pricing: 'Paid' },
            { name: 'Culture Amp', description: 'Employee engagement and performance platform.', url: 'https://www.cultureamp.com/', image: 'https://picsum.photos/seed/cultureamp-biz/600/400', dataAiHint: 'employee engagement', pricing: 'Paid' },
            { name: 'Lattice', description: 'The people management platform.', url: 'https://lattice.com/', image: 'https://picsum.photos/seed/lattice-hr/600/400', dataAiHint: 'people management', pricing: 'Paid' },
        ]
    },
    {
        title: "Developer Tools",
        icon: "Code",
        tools: [
            { name: 'GitHub', description: 'The complete developer platform.', url: 'https://github.com/', image: 'https://picsum.photos/seed/github-biz/600/400', dataAiHint: 'code hosting', pricing: 'Freemium' },
            { name: 'GitLab', description: 'The One DevOps Platform.', url: 'https://about.gitlab.com/', image: 'https://picsum.photos/seed/gitlab-biz/600/400', dataAiHint: 'devops platform', pricing: 'Freemium' },
            { name: 'Postman', description: 'The collaboration platform for API development.', url: 'https://www.postman.com/', image: 'https://picsum.photos/seed/postman-dev/600/400', dataAiHint: 'api development', pricing: 'Freemium' },
        ]
    },
    {
        title: "Knowledge Management",
        icon: "BrainCircuit",
        tools: [
            { name: 'Confluence', description: 'Team workspace for knowledge and collaboration.', url: 'https://www.atlassian.com/software/confluence', image: 'https://picsum.photos/seed/confluence-biz/600/400', dataAiHint: 'knowledge base', pricing: 'Freemium' },
            { name: 'Guru', description: 'A knowledge management solution that works in your workflow.', url: 'https://www.getguru.com/', image: 'https://picsum.photos/seed/guru-biz/600/400', dataAiHint: 'company wiki', pricing: 'Freemium' },
            { name: 'Slab', description: 'A knowledge hub for the modern workplace.', url: 'https://slab.com/', image: 'https://picsum.photos/seed/slab-km/600/400', dataAiHint: 'modern workplace', pricing: 'Freemium' },
        ]
    },
    {
        title: "Document Management",
        icon: "FileText",
        tools: [
            { name: 'Google Workspace', description: 'Productivity and collaboration tools.', url: 'https://workspace.google.com/', image: 'https://picsum.photos/seed/gworkspace-biz/600/400', dataAiHint: 'collaboration tools', pricing: 'Paid' },
            { name: 'Microsoft 365', description: 'Productivity cloud for work and life.', url: 'https://www.microsoft.com/en-us/microsoft-365', image: 'https://picsum.photos/seed/m365-biz/600/400', dataAiHint: 'office apps', pricing: 'Paid' },
            { name: 'Dropbox', description: 'Cloud storage, file synchronization, and client software.', url: 'https://www.dropbox.com/', image: 'https://picsum.photos/seed/dropbox-dm/600/400', dataAiHint: 'file storage', pricing: 'Freemium' },
        ]
    },
    {
        title: "Surveys & Feedback",
        icon: "CheckSquare",
        tools: [
            { name: 'SurveyMonkey', description: 'Online survey software and questionnaire tool.', url: 'https://www.surveymonkey.com/', image: 'https://picsum.photos/seed/surveymonkey-biz/600/400', dataAiHint: 'online surveys', pricing: 'Freemium' },
            { name: 'Typeform', description: 'Create forms, surveys, and quizzes that people enjoy answering.', url: 'https://www.typeform.com/', image: 'https://picsum.photos/seed/typeform-biz/600/400', dataAiHint: 'conversational forms', pricing: 'Freemium' },
            { name: 'Qualtrics', description: 'Experience management platform.', url: 'https://www.qualtrics.com/', image: 'https://picsum.photos/seed/qualtrics-surveys/600/400', dataAiHint: 'experience management', pricing: 'Paid' },
        ]
    },
    {
        title: "Automation",
        icon: "Settings",
        tools: [
            { name: 'Zapier', description: 'Automation for busy people.', url: 'https://zapier.com/', image: 'https://picsum.photos/seed/zapier-biz/600/400', dataAiHint: 'app integration', pricing: 'Freemium' },
            { name: 'Make (formerly Integromat)', description: 'Visually create, build, and automate.', url: 'https://www.make.com/', image: 'https://picsum.photos/seed/make-biz/600/400', dataAiHint: 'workflow automation', pricing: 'Freemium' },
            { name: 'UiPath', description: 'Robotic Process Automation (RPA) platform.', url: 'https://www.uipath.com/', image: 'https://picsum.photos/seed/uipath-auto/600/400', dataAiHint: 'rpa', pricing: 'Paid' },
        ]
    },
    {
        title: "Customer Loyalty",
        icon: "Heart",
        tools: [
            { name: 'Smile.io', description: 'Loyalty programs for small businesses.', url: 'https://smile.io/', image: 'https://picsum.photos/seed/smileio-biz/600/400', dataAiHint: 'rewards program', pricing: 'Paid' },
            { name: 'Yotpo', description: 'eCommerce marketing platform with loyalty & referrals.', url: 'https://www.yotpo.com/platform/loyalty-referrals/', image: 'https://picsum.photos/seed/yotpo-loyalty/600/400', dataAiHint: 'loyalty referrals', pricing: 'Paid' },
        ]
    },
    {
        title: "Reviews & Reputation",
        icon: "Star",
        tools: [
            { name: 'Podium', description: 'Interaction Management platform.', url: 'https://www.podium.com/', image: 'https://picsum.photos/seed/podium-biz/600/400', dataAiHint: 'online reviews', pricing: 'Paid' },
            { name: 'Birdeye', description: 'All-in-one experience marketing platform.', url: 'https://birdeye.com/', image: 'https://picsum.photos/seed/birdeye-reviews/600/400', dataAiHint: 'experience marketing', pricing: 'Paid' },
        ]
    },
    {
        title: "Learning & Development",
        icon: "BookOpen",
        tools: [
            { name: 'Coursera for Business', description: 'Workforce development and training.', url: 'https://www.coursera.org/business', image: 'https://picsum.photos/seed/coursera-biz/600/400', dataAiHint: 'employee training', pricing: 'Paid' },
            { name: 'Udemy Business', description: 'Online learning platform for professional development.', url: 'https://business.udemy.com/', image: 'https://picsum.photos/seed/udemy-biz/600/400', dataAiHint: 'corporate training', pricing: 'Paid' },
        ]
    },
    {
        title: "Market Intelligence",
        icon: "Search",
        tools: [
            { name: 'Crayon', description: 'Market and competitive intelligence software.', url: 'https://www.crayon.co/', image: 'https://picsum.photos/seed/crayon-mi/600/400', dataAiHint: 'competitive intelligence', pricing: 'Paid' },
            { name: 'Similarweb', description: 'Digital intelligence for your business.', url: 'https://www.similarweb.com/', image: 'https://picsum.photos/seed/similarweb-mi/600/400', dataAiHint: 'website traffic', pricing: 'Freemium' },
        ]
    },
    {
        title: "Content Repurposing",
        icon: "Recycle",
        tools: [
            { name: 'Opus Clip', description: 'Turn long videos into viral shorts with AI.', url: 'https://www.opus.pro/', image: 'https://picsum.photos/seed/opusclip-biz/600/400', dataAiHint: 'video clips', pricing: 'Freemium' },
            { name: 'Vidyo.ai', description: 'Make short videos from long ones instantly.', url: 'https://vidyo.ai/', image: 'https://picsum.photos/seed/vidyo-ai/600/400', dataAiHint: 'repurpose video', pricing: 'Freemium' },
        ]
    },
    {
        title: "Business Process Management",
        icon: "Briefcase",
        tools: [
            { name: 'Kissflow', description: 'Work platform to manage all of your work.', url: 'https://kissflow.com/', image: 'https://picsum.photos/seed/kissflow-bpm/600/400', dataAiHint: 'bpm software', pricing: 'Paid' },
            { name: 'ProcessMaker', description: 'Low-code business process management.', url: 'https://www.processmaker.com/', image: 'https://picsum.photos/seed/processmaker/600/400', dataAiHint: 'low-code bpm', pricing: 'Paid' },
        ]
    },
    {
        title: "Chatbots & Conversational AI",
        icon: "Bot",
        tools: [
            { name: 'Drift', description: 'Conversational AI for sales and marketing.', url: 'https://www.drift.com/', image: 'https://picsum.photos/seed/drift-bot/600/400', dataAiHint: 'sales chatbot', pricing: 'Paid' },
            { name: 'ManyChat', description: 'Automate interactive conversations in Instagram DMs, Facebook Messenger.', url: 'https://manychat.com/', image: 'https://picsum.photos/seed/manychat-bot/600/400', dataAiHint: 'messenger marketing', pricing: 'Freemium' },
        ]
    },
    {
        title: "Forecasting",
        icon: "LineChart",
        tools: [
            { name: 'Jira', description: 'Project management with forecasting abilities.', url: 'https://www.atlassian.com/software/jira', image: 'https://picsum.photos/seed/jira-forecast/600/400', dataAiHint: 'agile forecasting', pricing: 'Freemium' },
            { name: 'Anaplan', description: 'Platform for connected planning.', url: 'https://www.anaplan.com/', image: 'https://picsum.photos/seed/anaplan-forecast/600/400', dataAiHint: 'connected planning', pricing: 'Paid' },
        ]
    }
];
