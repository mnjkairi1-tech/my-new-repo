
'use client';

import React from 'react';
import { 
    Zap, Link2, GitBranch, Cloud, Database, Puzzle, Workflow, Server, Cpu, BrainCircuit,
    ShoppingBag, Users, LineChart, Wallet, HeartPulse, Building, UserCog, Mail, MessageSquare,
    Share2, GitPullRequest, Container, Code, Settings, Repeat, Layers, File, BarChart3, CloudCog,
    GanttChartSquare, Handshake, Bot, Smartphone
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

export const smartIntegrationsToolData: ToolCategory[] = [
    {
        title: "iPaaS (Integration Platform as a Service)",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zapier', description: 'Connects your apps and automates workflows.', url: 'https://zapier.com/', image: 'https://picsum.photos/seed/zapier-ipaas/600/400', dataAiHint: 'app integration', pricing: 'Freemium' },
            { name: 'Make (Integromat)', description: 'Visually create, build, and automate.', url: 'https://www.make.com/', image: 'https://picsum.photos/seed/make-ipaas/600/400', dataAiHint: 'visual automation', pricing: 'Freemium' },
            { name: 'Workato', description: 'Enterprise automation platform.', url: 'https://www.workato.com/', image: 'https://picsum.photos/seed/workato-ipaas/600/400', dataAiHint: 'enterprise automation', pricing: 'Paid' },
            { name: 'Boomi', description: 'Cloud-native integration platform.', url: 'https://boomi.com/', image: 'https://picsum.photos/seed/boomi-ipaas/600/400', dataAiHint: 'data integration', pricing: 'Paid' },
            { name: 'MuleSoft Anypoint Platform', description: 'Integration platform for SOA, SaaS, and APIs.', url: 'https://www.mulesoft.com/', image: 'https://picsum.photos/seed/mulesoft-ipaas/600/400', dataAiHint: 'api integration', pricing: 'Paid' },
            { name: 'Celigo', description: 'iPaaS for business and technical users.', url: 'https://www.celigo.com/', image: 'https://picsum.photos/seed/celigo-ipaas/600/400', dataAiHint: 'business integration', pricing: 'Paid' },
            { name: 'Jitterbit', description: 'API integration platform to automate business processes.', url: 'https://www.jitterbit.com/', image: 'https://picsum.photos/seed/jitterbit-ipaas/600/400', dataAiHint: 'business process', pricing: 'Paid' },
            { name: 'Tray.io', description: 'General automation platform.', url: 'https://tray.io/', image: 'https://picsum.photos/seed/tray-ipaas/600/400', dataAiHint: 'api automation', pricing: 'Paid' },
            { name: 'Informatica Intelligent Cloud Services', description: 'Enterprise cloud data management.', url: 'https://www.informatica.com/products/integration-platform-as-a-service.html', image: 'https://picsum.photos/seed/informatica-ipaas/600/400', dataAiHint: 'data management', pricing: 'Paid' },
            { name: 'SnapLogic', description: 'Intelligent integration platform.', url: 'https://www.snaplogic.com/', image: 'https://picsum.photos/seed/snaplogic-ipaas/600/400', dataAiHint: 'intelligent integration', pricing: 'Paid' },
            { name: 'TIBCO Cloud Integration', description: 'Enterprise iPaaS.', url: 'https://www.tibco.com/products/cloud-integration', image: 'https://picsum.photos/seed/tibco-ipaas/600/400', dataAiHint: 'enterprise ipaas', pricing: 'Paid' },
            { name: 'Oracle Integration Cloud', description: 'Automate business processes and integrate applications.', url: 'https://www.oracle.com/integration/', image: 'https://picsum.photos/seed/oracle-ipaas/600/400', dataAiHint: 'oracle integration', pricing: 'Paid' },
            { name: 'n8n', description: 'Extendable workflow automation.', url: 'https://n8n.io/', image: 'https://picsum.photos/seed/n8n-ipaas/600/400', dataAiHint: 'open source', pricing: 'Freemium' },
            { name: 'IFTTT', description: 'If This Then That. Simple app connections.', url: 'https://ifttt.com/', image: 'https://picsum.photos/seed/ifttt-ipaas/600/400', dataAiHint: 'applets', pricing: 'Freemium' },
            { name: 'Parabola', description: 'Automate your manual data tasks.', url: 'https://parabola.io/', image: 'https://picsum.photos/seed/parabola-ipaas/600/400', dataAiHint: 'data tasks', pricing: 'Paid' },
            { name: 'Alloy Automation', description: 'E-commerce automation platform.', url: 'https://runalloy.com/', image: 'https://picsum.photos/seed/alloy-ipaas/600/400', dataAiHint: 'ecommerce automation', pricing: 'Paid' },
            { name: 'Pipedream', description: 'A developer-focused integration platform.', url: 'https://pipedream.com/', image: 'https://picsum.photos/seed/pipedream/600/400', dataAiHint: 'developer integration', pricing: 'Freemium' },
            { name: 'Integrately', description: '1-click automation platform.', url: 'https://integrately.com/', image: 'https://picsum.photos/seed/integrately/600/400', dataAiHint: '1-click automation', pricing: 'Freemium' },
            { name: 'Microsoft Power Automate', description: 'Automate tasks and processes across applications.', url: 'https://powerautomate.microsoft.com/', image: 'https://picsum.photos/seed/powerautomate-ipaas/600/400', dataAiHint: 'microsoft automation', pricing: 'Freemium' },
            { name: 'LeadsBridge', description: 'Connect marketing tools for lead generation.', url: 'https://leadsbridge.com/', image: 'https://picsum.photos/seed/leadsbridge/600/400', dataAiHint: 'lead generation', pricing: 'Paid' },
        ]
    },
    {
        title: "API Management",
        icon: <Link2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Kong', description: 'Cloud-native API gateway and platform.', url: 'https://konghq.com/', image: 'https://picsum.photos/seed/kong-api/600/400', dataAiHint: 'api gateway', pricing: 'Freemium' },
            { name: 'Apigee', description: 'Google Cloud\'s API management platform.', url: 'https://cloud.google.com/apigee', image: 'https://picsum.photos/seed/apigee-api/600/400', dataAiHint: 'google api', pricing: 'Paid' },
            { name: 'MuleSoft Anypoint Platform', description: 'A unified platform for API management and integration.', url: 'https://www.mulesoft.com/', image: 'https://picsum.photos/seed/mulesoft-api/600/400', dataAiHint: 'unified platform', pricing: 'Paid' },
            { name: 'Tyk', description: 'Open source API gateway and management platform.', url: 'https://tyk.io/', image: 'https://picsum.photos/seed/tyk-api/600/400', dataAiHint: 'open source api', pricing: 'Freemium' },
            { name: 'Postman', description: 'The collaboration platform for API development.', url: 'https://www.postman.com/', image: 'https://picsum.photos/seed/postman-api/600/400', dataAiHint: 'api development', pricing: 'Freemium' },
            { name: 'Amazon API Gateway', description: 'Create, publish, and secure APIs at any scale.', url: 'https://aws.amazon.com/api-gateway/', image: 'https://picsum.photos/seed/aws-apigw/600/400', dataAiHint: 'aws api', pricing: 'Paid' },
            { name: 'Azure API Management', description: 'Hybrid, multi-cloud management platform for APIs.', url: 'https://azure.microsoft.com/en-us/products/api-management/', image: 'https://picsum.photos/seed/azure-apim/600/400', dataAiHint: 'azure api', pricing: 'Paid' },
            { name: 'WSO2 API Manager', description: 'Open-source full lifecycle API management.', url: 'https://wso2.com/api-manager/', image: 'https://picsum.photos/seed/wso2-api/600/400', dataAiHint: 'open source management', pricing: 'Free' },
            { name: 'Stoplight', description: 'The API design, development, and documentation platform.', url: 'https://stoplight.io/', image: 'https://picsum.photos/seed/stoplight-api/600/400', dataAiHint: 'api design', pricing: 'Freemium' },
            { name: 'Gravitee', description: 'Open-source API management platform.', url: 'https://www.gravitee.io/', image: 'https://picsum.photos/seed/gravitee/600/400', dataAiHint: 'api platform', pricing: 'Freemium' },
            { name: 'KrakenD', description: 'Ultra-High performance open-source API Gateway.', url: 'https://www.krakend.io/', image: 'https://picsum.photos/seed/krakend/600/400', dataAiHint: 'api gateway', pricing: 'Free' },
            { name: 'Hasura', description: 'Instant GraphQL on all your data.', url: 'https://hasura.io/', image: 'https://picsum.photos/seed/hasura-api/600/400', dataAiHint: 'graphql api', pricing: 'Freemium' },
            { name: 'TheGraph', description: 'Indexing protocol for querying networks like Ethereum.', url: 'https://thegraph.com/', image: 'https://picsum.photos/seed/thegraph/600/400', dataAiHint: 'web3 api', pricing: 'Paid' },
            { name: 'SwaggerHub', description: 'API design and documentation platform.', url: 'https://swagger.io/tools/swaggerhub/', image: 'https://picsum.photos/seed/swaggerhub/600/400', dataAiHint: 'openapi hub', pricing: 'Paid' },
            { name: 'Axway', description: 'Amplify API Management Platform.', url: 'https://www.axway.com/', image: 'https://picsum.photos/seed/axway/600/400', dataAiHint: 'enterprise api', pricing: 'Paid' },
            { name: 'Akana', description: 'Enterprise API management.', url: 'https://www.akana.com/', image: 'https://picsum.photos/seed/akana/600/400', dataAiHint: 'api lifecycle', pricing: 'Paid' },
            { name: 'Red Hat 3scale API Management', description: 'API management for enterprises.', url: 'https://www.redhat.com/en/technologies/middleware/3scale', image: 'https://picsum.photos/seed/3scale/600/400', dataAiHint: 'redhat api', pricing: 'Paid' },
            { name: 'RapidAPI', description: 'The world\'s largest API Hub.', url: 'https://rapidapi.com/', image: 'https://picsum.photos/seed/rapidapi/600/400', dataAiHint: 'api marketplace', pricing: 'Freemium' },
            { name: 'Moesif', description: 'API analytics and monitoring.', url: 'https://www.moesif.com/', image: 'https://picsum.photos/seed/moesif/600/400', dataAiHint: 'api analytics', pricing: 'Freemium' },
            { name: 'Traefik', description: 'Cloud-native application proxy.', url: 'https://traefik.io/', image: 'https://picsum.photos/seed/traefik/600/400', dataAiHint: 'application proxy', pricing: 'Free' },
        ]
    },
    {
        title: "Cloud Data Integration",
        icon: <CloudCog className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Fivetran', description: 'Automated data integration.', url: 'https://www.fivetran.com/', image: 'https://picsum.photos/seed/fivetran-etl/600/400', dataAiHint: 'elt platform', pricing: 'Paid' },
            { name: 'Stitch', description: 'A simple, powerful ETL service.', url: 'https://www.stitchdata.com/', image: 'https://picsum.photos/seed/stitch-etl/600/400', dataAiHint: 'etl service', pricing: 'Freemium' },
            { name: 'Airbyte', description: 'Open-source data integration platform.', url: 'https://airbyte.com/', image: 'https://picsum.photos/seed/airbyte-etl/600/400', dataAiHint: 'open source etl', pricing: 'Free' },
            { name: 'Matillion', description: 'Cloud-native data integration and transformation.', url: 'https://www.matillion.com/', image: 'https://picsum.photos/seed/matillion-etl/600/400', dataAiHint: 'cloud etl', pricing: 'Paid' },
            { name: 'AWS Glue', description: 'A serverless data integration service.', url: 'https://aws.amazon.com/glue/', image: 'https://picsum.photos/seed/aws-glue/600/400', dataAiHint: 'serverless etl', pricing: 'Paid' },
            { name: 'Azure Data Factory', description: 'Cloud-based data integration service.', url: 'https://azure.microsoft.com/en-us/products/data-factory/', image: 'https://picsum.photos/seed/adf/600/400', dataAiHint: 'azure data', pricing: 'Paid' },
            { name: 'Google Cloud Data Fusion', description: 'A fully managed, cloud-native data integration service.', url: 'https://cloud.google.com/data-fusion', image: 'https://picsum.photos/seed/gcp-datafusion/600/400', dataAiHint: 'gcp data', pricing: 'Paid' },
            { name: 'Talend Cloud', description: 'Data integration and data integrity in the cloud.', url: 'https://www.talend.com/', image: 'https://picsum.photos/seed/talend-cloud/600/400', dataAiHint: 'cloud data', pricing: 'Paid' },
            { name: 'Hevo Data', description: 'A no-code data pipeline.', url: 'https://hevodata.com/', image: 'https://picsum.photos/seed/hevo-data/600/400', dataAiHint: 'no-code pipeline', pricing: 'Paid' },
            { name: 'Rivery', description: 'The complete data integration platform.', url: 'https://rivery.io/', image: 'https://picsum.photos/seed/rivery-data/600/400', dataAiHint: 'data ops', pricing: 'Paid' },
            { name: 'Meltano', description: 'Open source DataOps platform.', url: 'https://meltano.com/', image: 'https://picsum.photos/seed/meltano-etl/600/400', dataAiHint: 'dataops', pricing: 'Free' },
            { name: 'Singer', description: 'Open-source standard for writing scripts that move data.', url: 'https://www.singer.io/', image: 'https://picsum.photos/seed/singer-io/600/400', dataAiHint: 'data scripting', pricing: 'Free' },
            { name: 'Pentaho', description: 'Data integration and business analytics platform.', url: 'https://www.hitachivantara.com/en-us/products/pentaho-platform.html', image: 'https://picsum.photos/seed/pentaho/600/400', dataAiHint: 'business analytics', pricing: 'Paid' },
            { name: 'StreamSets', description: 'A DataOps platform for modern data integration.', url: 'https://streamsets.com/', image: 'https://picsum.photos/seed/streamsets/600/400', dataAiHint: 'dataops platform', pricing: 'Paid' },
            { name: 'dbt', description: 'The transformation layer in the modern data stack.', url: 'https://www.getdbt.com/', image: 'https://picsum.photos/seed/dbt/600/400', dataAiHint: 'data transformation', pricing: 'Freemium' },
            { name: 'Informatica Intelligent Cloud Services', description: 'Enterprise cloud data management.', url: 'https://www.informatica.com/products/integration-platform-as-a-service.html', image: 'https://picsum.photos/seed/informatica-cloud/600/400', dataAiHint: 'cloud data management', pricing: 'Paid' },
            { name: 'SnapLogic', description: 'Intelligent integration platform.', url: 'https://www.snaplogic.com/', image: 'https://picsum.photos/seed/snaplogic-etl/600/400', dataAiHint: 'intelligent integration', pricing: 'Paid' },
            { name: 'Etleap', description: 'ETL for modern data teams.', url: 'https://etleap.com/', image: 'https://picsum.photos/seed/etleap/600/400', dataAiHint: 'analytics etl', pricing: 'Paid' },
            { name: 'Adverity', description: 'Marketing analytics platform with data integration.', url: 'https://www.adverity.com/', image: 'https://picsum.photos/seed/adverity/600/400', dataAiHint: 'marketing analytics', pricing: 'Paid' },
            { name: 'Panoply', description: 'Cloud data platform.', url: 'https://panoply.io/', image: 'https://picsum.photos/seed/panoply/600/400', dataAiHint: 'data platform', pricing: 'Paid' },
        ]
    },
    { title: "CRM Integrations", icon: <Users className="w-5 h-5 text-primary"/>, tools: [
        { name: 'Outfunnel', description: 'App connector for sales and marketing.', url: 'https://outfunnel.com/', image: 'https://picsum.photos/seed/outfunnel/600/400', dataAiHint: 'sales marketing', pricing: 'Paid'},
        { name: 'HubSpot Data Sync', description: 'Sync data between HubSpot and other apps.', url: 'https://www.hubspot.com/products/operations/data-sync', image: 'https://picsum.photos/seed/hubspot-sync/600/400', dataAiHint: 'data sync', pricing: 'Freemium'},
        { name: 'Salesforce Integration', description: 'Integrate Salesforce with other applications.', url: 'https://www.salesforce.com/products/integration/', image: 'https://picsum.photos/seed/sf-integration/600/400', dataAiHint: 'salesforce connect', pricing: 'Paid'},
        { name: 'PieSync (HubSpot)', description: 'Syncs customer data between apps.', url: 'https://www.hubspot.com/products/operations/data-sync', image: 'https://picsum.photos/seed/piesync/600/400', dataAiHint: 'customer data sync', pricing: 'Freemium'},
    ] },
    { title: "ERP Integrations", icon: <Building className="w-5 h-5 text-primary"/>, tools: [
        { name: 'Celigo', description: 'iPaaS for business and technical users.', url: 'https://www.celigo.com/', image: 'https://picsum.photos/seed/celigo-erp/600/400', dataAiHint: 'netsuite sap', pricing: 'Paid'},
        { name: 'Jitterbit', description: 'ERP integration solutions.', url: 'https://www.jitterbit.com/', image: 'https://picsum.photos/seed/jitterbit-erp/600/400', dataAiHint: 'erp automation', pricing: 'Paid'},
        { name: 'Boomi', description: 'Integrate your ERP with other systems.', url: 'https://boomi.com/', image: 'https://picsum.photos/seed/boomi-erp/600/400', dataAiHint: 'sap oracle', pricing: 'Paid'},
        { name: 'Cleo', description: 'Ecosystem integration platform for B2B.', url: 'https://www.cleo.com/', image: 'https://picsum.photos/seed/cleo-erp/600/400', dataAiHint: 'b2b integration', pricing: 'Paid'},
    ] },
    { title: "E-commerce Integrations", icon: <ShoppingBag className="w-5 h-5 text-primary"/>, tools: [
        { name: 'Alloy Automation', description: 'E-commerce automation platform.', url: 'https://runalloy.com/', image: 'https://picsum.photos/seed/alloy-ecom/600/400', dataAiHint: 'shopify automation', pricing: 'Paid'},
        { name: 'Klaviyo', description: 'Email & SMS marketing for e-commerce.', url: 'https://www.klaviyo.com/', image: 'https://picsum.photos/seed/klaviyo-ecom/600/400', dataAiHint: 'ecommerce marketing', pricing: 'Freemium'},
        { name: 'Gorgias', description: 'Helpdesk for e-commerce stores.', url: 'https://www.gorgias.com/', image: 'https://picsum.photos/seed/gorgias-ecom/600/400', dataAiHint: 'shopify helpdesk', pricing: 'Paid'},
        { name: 'ShipStation', description: 'E-commerce shipping software.', url: 'https://www.shipstation.com/', image: 'https://picsum.photos/seed/shipstation-ecom/600/400', dataAiHint: 'shipping software', pricing: 'Paid'},
    ] },
    { title: "Marketing Automation Integrations", icon: <Mail className="w-5 h-5 text-primary"/>, tools: [
        { name: 'HubSpot Marketing Hub', description: 'Marketing automation software.', url: 'https://www.hubspot.com/products/marketing', image: 'https://picsum.photos/seed/hubspot-mktg-integ/600/400', dataAiHint: 'marketing automation', pricing: 'Freemium' },
        { name: 'Marketo Engage', description: 'Marketing automation for B2B.', url: 'https://business.adobe.com/products/marketo/adobe-marketo.html', image: 'https://picsum.photos/seed/marketo-integ/600/400', dataAiHint: 'b2b marketing', pricing: 'Paid' },
        { name: 'Pardot', description: 'Salesforce B2B marketing automation.', url: 'https://www.salesforce.com/products/marketing-cloud/account-engagement/', image: 'https://picsum.photos/seed/pardot-integ/600/400', dataAiHint: 'salesforce marketing', pricing: 'Paid' },
        { name: 'ActiveCampaign', description: 'Customer experience automation.', url: 'https://www.activecampaign.com/', image: 'https://picsum.photos/seed/activecampaign-integ/600/400', dataAiHint: 'email automation', pricing: 'Paid' },
    ] },
    { title: "Financial App Integrations", icon: <Wallet className="w-5 h-5 text-primary"/>, tools: [
        { name: 'Plaid', description: 'Securely connect users\' financial accounts to your app.', url: 'https://plaid.com/', image: 'https://picsum.photos/seed/plaid-fin/600/400', dataAiHint: 'financial data', pricing: 'Paid' },
        { name: 'Stripe', description: 'Payments infrastructure for the internet.', url: 'https://stripe.com/', image: 'https://picsum.photos/seed/stripe-fin/600/400', dataAiHint: 'payment gateway', pricing: 'Paid' },
        { name: 'QuickBooks API', description: 'Integrate with QuickBooks accounting software.', url: 'https://developer.intuit.com/app/developer/qbo/docs/api', image: 'https://picsum.photos/seed/quickbooks-api/600/400', dataAiHint: 'accounting api', pricing: 'Free' },
        { name: 'Xero API', description: 'Build integrations with Xero accounting software.', url: 'https://developer.xero.com/', image: 'https://picsum.photos/seed/xero-api/600/400', dataAiHint: 'accounting api', pricing: 'Free' },
    ] },
    { title: "HRIS Integrations", icon: <UserCog className="w-5 h-5 text-primary"/>, tools: [
        { name: 'Workday Integrations', description: 'Connect Workday with your enterprise applications.', url: 'https://www.workday.com/en-us/platform/integrations.html', image: 'https://picsum.photos/seed/workday-integ/600/400', dataAiHint: 'hris api', pricing: 'Paid' },
        { name: 'BambooHR Integrations', description: 'Integrate with HR software for small and medium businesses.', url: 'https://www.bamboohr.com/integrations/', image: 'https://picsum.photos/seed/bamboohr-integ/600/400', dataAiHint: 'hr software', pricing: 'Paid' },
        { name: 'Finch', description: 'A single API for payroll and HRIS systems.', url: 'https://tryfinch.com/', image: 'https://picsum.photos/seed/finch-hris/600/400', dataAiHint: 'hr api', pricing: 'Paid' },
        { name: 'Merge', description: 'Unified API for HR, payroll, and recruiting.', url: 'https://merge.dev/', image: 'https://picsum.photos/seed/merge-hris/600/400', dataAiHint: 'unified api', pricing: 'Paid' },
    ] },
    { title: "Customer Support Integrations", icon: <MessageSquare className="w-5 h-5 text-primary"/>, tools: [
        { name: 'Zendesk Integrations', description: 'Integrate Zendesk with your other tools.', url: 'https://www.zendesk.com/apps/', image: 'https://picsum.photos/seed/zendesk-integ/600/400', dataAiHint: 'support tools', pricing: 'Paid' },
        { name: 'Intercom Integrations', description: 'Connect Intercom with your tech stack.', url: 'https://www.intercom.com/integrations/', image: 'https://picsum.photos/seed/intercom-integ/600/400', dataAiHint: 'tech stack', pricing: 'Paid' },
        { name: 'Freshdesk Integrations', description: 'Integrate your helpdesk with business apps.', url: 'https://freshdesk.com/integrations/', image: 'https://picsum.photos/seed/freshdesk-integ/600/400', dataAiHint: 'business apps', pricing: 'Freemium' },
    ] },
    { title: "Project Management Integrations", icon: <GanttChartSquare className="w-5 h-5 text-primary"/>, tools: [
        { name: 'Jira Integrations', description: 'Connect Jira with developer tools.', url: 'https://www.atlassian.com/software/jira/integrations', image: 'https://picsum.photos/seed/jira-integ/600/400', dataAiHint: 'developer tools', pricing: 'Freemium' },
        { name: 'Asana Integrations', description: 'Connect Asana with your favorite apps.', url: 'https://asana.com/apps', image: 'https://picsum.photos/seed/asana-integ/600/400', dataAiHint: 'favorite apps', pricing: 'Freemium' },
        { name: 'Trello Power-Ups', description: 'Integrate apps right into your Trello boards.', url: 'https://trello.com/power-ups', image: 'https://picsum.photos/seed/trello-integ/600/400', dataAiHint: 'trello apps', pricing: 'Freemium' },
    ] },
    { title: "Communication Tool Integrations", icon: <Share2 className="w-5 h-5 text-primary"/>, tools: [
        { name: 'Slack Integrations', description: 'Connect your tools and services to Slack.', url: 'https://slack.com/apps', image: 'https://picsum.photos/seed/slack-integ/600/400', dataAiHint: 'slack apps', pricing: 'Freemium' },
        { name: 'Microsoft Teams Integrations', description: 'Add apps to Microsoft Teams.', url: 'https://appsource.microsoft.com/en-us/marketplace/apps?product=teams', image: 'https://picsum.photos/seed/teams-integ/600/400', dataAiHint: 'teams apps', pricing: 'Freemium' },
    ] },
    { title: "BI & Analytics Integrations", icon: <BarChart3 className="w-5 h-5 text-primary"/>, tools: [
        { name: 'Tableau Connectors', description: 'Connect to your data, wherever it lives.', url: 'https://www.tableau.com/products/data-connectors', image: 'https://picsum.photos/seed/tableau-integ/600/400', dataAiHint: 'data connectors', pricing: 'Paid' },
        { name: 'Power BI Connectors', description: 'Connect to hundreds of data sources.', url: 'https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-data-sources', image: 'https://picsum.photos/seed/powerbi-integ/600/400', dataAiHint: 'data sources', pricing: 'Freemium' },
    ] },
    { title: "Healthcare (HL7/FHIR) Integrations", icon: <HeartPulse className="w-5 h-5 text-primary"/>, tools: [
        { name: 'Mirth Connect', description: 'Open-source healthcare integration engine.', url: 'https://www.nextgen.com/products-and-services/mirth-connect', image: 'https://picsum.photos/seed/mirth-connect/600/400', dataAiHint: 'healthcare integration', pricing: 'Free' },
        { name: 'Redox', description: 'The platform for healthcare data exchange.', url: 'https://www.redoxengine.com/', image: 'https://picsum.photos/seed/redox-health/600/400', dataAiHint: 'fhir api', pricing: 'Paid' },
    ] },
    { title: "B2B & EDI Integration", icon: <Handshake className="w-5 h-5 text-primary"/>, tools: [
        { name: 'Cleo Integration Cloud', description: 'Ecosystem integration platform.', url: 'https://www.cleo.com/', image: 'https://picsum.photos/seed/cleo-b2b/600/400', dataAiHint: 'edi platform', pricing: 'Paid' },
        { name: 'SPS Commerce', description: 'Retail industry\'s largest trading partner network.', url: 'https://www.spscommerce.com/', image: 'https://picsum.photos/seed/sps-commerce/600/400', dataAiHint: 'retail network', pricing: 'Paid' },
    ] },
    { title: "IoT & IIoT Integration", icon: <Cpu className="w-5 h-5 text-primary"/>, tools: [
        { name: 'AWS IoT Core', description: 'Connect IoT devices to the AWS cloud.', url: 'https://aws.amazon.com/iot-core/', image: 'https://picsum.photos/seed/aws-iot-integ/600/400', dataAiHint: 'iot cloud', pricing: 'Paid' },
        { name: 'Azure IoT Hub', description: 'Connect, monitor, and manage billions of IoT assets.', url: 'https://azure.microsoft.com/en-us/products/iot-hub/', image: 'https://picsum.photos/seed/azure-iot/600/400', dataAiHint: 'iot assets', pricing: 'Paid' },
    ] },
    { title: "AI & Machine Learning Integrations", icon: <BrainCircuit className="w-5 h-5 text-primary"/>, tools: [
        { name: 'Hugging Face Hub', description: 'The home of the AI community.', url: 'https://huggingface.co/', image: 'https://picsum.photos/seed/hf-integ/600/400', dataAiHint: 'ml models', pricing: 'Free' },
        { name: 'Weights & Biases', description: 'Developer tools for machine learning.', url: 'https://wandb.ai/', image: 'https://picsum.photos/seed/wandb/600/400', dataAiHint: 'ml ops', pricing: 'Freemium' },
    ] },
    { title: "Event-Driven Architecture", icon: <GitPullRequest className="w-5 h-5 text-primary"/>, tools: [
        { name: 'Apache Kafka', description: 'Distributed event streaming platform.', url: 'https://kafka.apache.org/', image: 'https://picsum.photos/seed/kafka-integ/600/400', dataAiHint: 'event streaming', pricing: 'Free' },
        { name: 'RabbitMQ', description: 'Open source message broker.', url: 'https://www.rabbitmq.com/', image: 'https://picsum.photos/seed/rabbitmq/600/400', dataAiHint: 'message broker', pricing: 'Free' },
    ] },
    { title: "Data Synchronization Tools", icon: <Repeat className="w-5 h-5 text-primary"/>, tools: [
        { name: 'Segment', description: 'Customer Data Platform (CDP).', url: 'https://segment.com/', image: 'https://picsum.photos/seed/segment-sync/600/400', dataAiHint: 'customer data', pricing: 'Freemium' },
        { name: 'RudderStack', description: 'Customer data platform for developers.', url: 'https://www.rudderstack.com/', image: 'https://picsum.photos/seed/rudderstack-sync/600/400', dataAiHint: 'cdp for developers', pricing: 'Freemium' },
    ] },
    { title: "Embedded Integrations (iPaaS)", icon: <Puzzle className="w-5 h-5 text-primary"/>, tools: [
        { name: 'Workato Embedded', description: 'Add integrations to your product.', url: 'https://www.workato.com/embedded-integration', image: 'https://picsum.photos/seed/workato-embed/600/400', dataAiHint: 'product integrations', pricing: 'Paid' },
        { name: 'Merge', description: 'Unified API for B2B apps.', url: 'https://merge.dev/', image: 'https://picsum.photos/seed/merge-embed/600/400', dataAiHint: 'unified api', pricing: 'Paid' },
    ] },
    { title: "API Aggregators", icon: <Layers className="w-5 h-5 text-primary"/>, tools: [
        { name: 'Plaid', description: 'Securely connect users\' financial accounts.', url: 'https://plaid.com/', image: 'https://picsum.photos/seed/plaid-agg/600/400', dataAiHint: 'financial api', pricing: 'Paid' },
        { name: 'Finch', description: 'A single API for payroll and HRIS systems.', url: 'https://tryfinch.com/', image: 'https://picsum.photos/seed/finch-hris/600/400', dataAiHint: 'hr api', pricing: 'Paid' },
    ] },
    { title: "Robotic Process Automation (RPA)", icon: <Bot className="w-5 h-5 text-primary"/>, tools: [
        { name: 'UiPath', description: 'Leading platform for enterprise automation.', url: 'https://www.uipath.com/', image: 'https://picsum.photos/seed/uipath-rpa/600/400', dataAiHint: 'rpa platform', pricing: 'Paid' },
        { name: 'Automation Anywhere', description: 'Cloud-native intelligent automation.', url: 'https://www.automationanywhere.com/', image: 'https://picsum.photos/seed/aa-rpa/600/400', dataAiHint: 'intelligent automation', pricing: 'Paid' },
    ] },
    { title: "File Transfer Automation", icon: <File className="w-5 h-5 text-primary"/>, tools: [
        { name: 'GoAnywhere MFT', description: 'Managed File Transfer solution.', url: 'https://www.goanywhere.com/', image: 'https://picsum.photos/seed/goanywhere/600/400', dataAiHint: 'mft', pricing: 'Paid' },
        { name: 'Globalscape EFT', description: 'Enterprise-grade Managed File Transfer.', url: 'https://www.globalscape.com/eft', image: 'https://picsum.photos/seed/globalscape/600/400', dataAiHint: 'eft', pricing: 'Paid' },
    ] },
    { title: "Citizen Integrator Platforms", icon: <Users className="w-5 h-5 text-primary"/>, tools: [
        { name: 'Zapier', description: 'Automation for busy people.', url: 'https://zapier.com/', image: 'https://picsum.photos/seed/zapier-citizen/600/400', dataAiHint: 'app integration', pricing: 'Freemium' },
        { name: 'Make', description: 'Visually create, build, and automate.', url: 'https://www.make.com/', image: 'https://picsum.photos/seed/make-citizen/600/400', dataAiHint: 'visual automation', pricing: 'Freemium' },
        { name: 'IFTTT', description: 'If This Then That. Simple app connections.', url: 'https://ifttt.com/', image: 'https://picsum.photos/seed/ifttt-citizen/600/400', dataAiHint: 'applets', pricing: 'Freemium' },
        { name: 'Microsoft Power Automate', description: 'Automate tasks across applications.', url: 'https://powerautomate.microsoft.com/', image: 'https://picsum.photos/seed/powerautomate-citizen/600/400', dataAiHint: 'process automation', pricing: 'Freemium' },
    ] },
    { title: "Mobile App Integration", icon: <Smartphone className="w-5 h-5 text-primary"/>, tools: [
        { name: 'Firebase', description: 'An app development platform by Google.', url: 'https://firebase.google.com/', image: 'https://picsum.photos/seed/firebase-mobile/600/400', dataAiHint: 'app platform', pricing: 'Freemium' },
        { name: 'AWS Amplify', description: 'Build fullstack web and mobile apps.', url: 'https://aws.amazon.com/amplify/', image: 'https://picsum.photos/seed/amplify-mobile/600/400', dataAiHint: 'aws apps', pricing: 'Freemium' },
        { name: 'Appwrite', description: 'An open-source backend platform for developers.', url: 'https://appwrite.io/', image: 'https://picsum.photos/seed/appwrite-mobile/600/400', dataAiHint: 'open source backend', pricing: 'Free' },
        { name: 'RevenueCat', description: 'In-app subscription management.', url: 'https://www.revenuecat.com/', image: 'https://picsum.photos/seed/revenuecat/600/400', dataAiHint: 'in-app purchases', pricing: 'Freemium' },
    ] },
    { title: "Data Transformation (ETL)", icon: <GitBranch className="w-5 h-5 text-primary"/>, tools: [
        { name: 'dbt', description: 'The transformation layer in the modern data stack.', url: 'https://www.getdbt.com/', image: 'https://picsum.photos/seed/dbt-etl/600/400', dataAiHint: 'data transformation', pricing: 'Freemium' },
        { name: 'Fivetran', description: 'Automated data integration.', url: 'https://www.fivetran.com/', image: 'https://picsum.photos/seed/fivetran-etl/600/400', dataAiHint: 'elt platform', pricing: 'Paid' },
        { name: 'Stitch', description: 'A simple, powerful ETL service.', url: 'https://www.stitchdata.com/', image: 'https://picsum.photos/seed/stitch-etl/600/400', dataAiHint: 'etl service', pricing: 'Freemium' },
        { name: 'Airbyte', description: 'Open-source data integration platform.', url: 'https://airbyte.com/', image: 'https://picsum.photos/seed/airbyte/600/400', dataAiHint: 'open source etl', pricing: 'Free' },
    ] },
    { title: "Reverse ETL", icon: <Database className="w-5 h-5 text-primary"/>, tools: [
        { name: 'Census', description: 'Sync your data warehouse to all your apps.', url: 'https://www.getcensus.com/', image: 'https://picsum.photos/seed/census-retl/600/400', dataAiHint: 'data sync', pricing: 'Paid' },
        { name: 'Hightouch', description: 'The leading Reverse ETL platform.', url: 'https://hightouch.com/', image: 'https://picsum.photos/seed/hightouch-retl/600/400', dataAiHint: 'reverse etl', pricing: 'Freemium' },
        { name: 'RudderStack', description: 'Customer data platform for developers.', url: 'https://www.rudderstack.com/', image: 'https://picsum.photos/seed/rudderstack-retl/600/400', dataAiHint: 'customer data', pricing: 'Freemium' },
        { name: 'Segment', description: 'Customer Data Platform with reverse ETL capabilities.', url: 'https://segment.com/', image: 'https://picsum.photos/seed/segment-retl/600/400', dataAiHint: 'cdp', pricing: 'Freemium' },
    ] },
    { title: "CI/CD Pipeline Integrations", icon: <Workflow className="w-5 h-5 text-primary"/>, tools: [
        { name: 'GitHub Actions', description: 'Automate your workflow from idea to production.', url: 'https://github.com/features/actions', image: 'https://picsum.photos/seed/gh-actions-integ/600/400', dataAiHint: 'workflow automation', pricing: 'Freemium' },
        { name: 'Jenkins', description: 'Open source automation server.', url: 'https://www.jenkins.io/', image: 'https://picsum.photos/seed/jenkins-cicd/600/400', dataAiHint: 'ci cd', pricing: 'Free' },
        { name: 'CircleCI', description: 'Continuous integration and delivery.', url: 'https://circleci.com/', image: 'https://picsum.photos/seed/circleci-cicd/600/400', dataAiHint: 'ci cd platform', pricing: 'Freemium' },
    ] },
    { title: "Serverless Integration", icon: <Cloud className="w-5 h-5 text-primary"/>, tools: [
        { name: 'AWS Lambda', description: 'Run code without thinking about servers.', url: 'https://aws.amazon.com/lambda/', image: 'https://picsum.photos/seed/aws-lambda-integ/600/400', dataAiHint: 'serverless', pricing: 'Paid' },
        { name: 'Google Cloud Functions', description: 'Event-driven serverless compute platform.', url: 'https://cloud.google.com/functions', image: 'https://picsum.photos/seed/gcp-functions/600/400', dataAiHint: 'serverless compute', pricing: 'Paid' },
        { name: 'Azure Functions', description: 'Event-driven, serverless compute.', url: 'https://azure.microsoft.com/en-us/products/functions/', image: 'https://picsum.photos/seed/azure-functions/600/400', dataAiHint: 'azure serverless', pricing: 'Paid' },
    ] },
    { title: 'Custom Connector Development', icon: <Code className="w-5 h-5 text-primary"/>, tools: [
        { name: 'Workato Connector SDK', description: 'Build connectors for the Workato platform.', url: 'https://docs.workato.com/connector-sdk.html', image: 'https://picsum.photos/seed/workato-sdk/600/400', dataAiHint: 'connector sdk', pricing: 'Paid' },
        { name: 'MuleSoft Anypoint Connector DevKit', description: 'SDK for building custom connectors.', url: 'https://www.mulesoft.com/', image: 'https://picsum.photos/seed/mulesoft-sdk/600/400', dataAiHint: 'dev kit', pricing: 'Paid' },
    ] }
];
