
// This is a server-only file to prevent client-side components (like icons)
// from being bundled in server-side code.

import { automationWorkflowToolData } from './automation-workflow-tools-data';
import { businessToolData } from './business-tools-data';
import { chatbotAssistantToolData } from './chatbot-assistant-tools-data';
import { codingToolData } from './coding-tools-data';
import { contentCreationToolData } from './content-creation-tool-data';
import { converterToolData } from './converter-tools-data';
import { dataAnalyticsToolData } from './data-analytics-tool-data';
import { databaseBackendToolData } from './database-backend-tools-data';
import { eCommerceToolData } from './ecommerce-tools-data';
import { educationLearningToolData } from './education-learning-tools-data';
import { financeAccountingToolData } from './finance-accounting-tool-data';
import { freelancerToolData } from './freelancer-tools-data';
import { graphicDesignToolData } from './graphic-design-tool-data';
import { imageEditingToolData } from './image-editing-tool-data';
import { invoiceBillingToolData } from './invoice-billing-tool-data';
import { marketingSeoToolData } from './marketing-seo-tool-data';
import { productivityToolData } from './productivity-tool-data';
import { researchKnowledgeToolData } from './research-knowledge-tool-data';
import { securityPrivacyToolData } from './security-privacy-tool-data';
import { seoAnalyticsToolData } from './seo-analytics-tool-data';
import { socialMediaToolData } from './social-media-tool-data';
import { startupToolData } from './startup-tool-data';
import { studentAiToolData } from './student-tools-data';
import { videoEditingToolData } from './video-editing-tools-data';
import { websiteBuilderToolData } from './website-builder-tools-data';
import { writingToolData } from './writing-tools-data';
import { aiAgentsToolData } from './ai-agents-data';
import { voiceAudioAiToolData } from './voice-audio-ai-data';
import { aiSearchToolData } from './ai-search-data';
import { healthcareAiToolData } from './healthcare-ai-data';
import { smartIntegrationsToolData } from './smart-integrations-data';
import { aiSafetyTestingToolData } from './ai-safety-testing-data';

// Define a server-safe tool type without React components
type ServerTool = {
    name: string;
    description: string;
    url: string;
    category?: string;
};

// Map the imported data to the server-safe type
const allData = [
  automationWorkflowToolData,
  businessToolData,
  chatbotAssistantToolData,
  codingToolData,
  contentCreationToolData,
  converterToolData,
  dataAnalyticsToolData,
  databaseBackendToolData,
  eCommerceToolData,
  educationLearningToolData,
  financeAccountingToolData,
  freelancerToolData,
  graphicDesignToolData,
  imageEditingToolData,
  invoiceBillingToolData,
  marketingSeoToolData,
  productivityToolData,
  researchKnowledgeToolData,
  securityPrivacyToolData,
  seoAnalyticsToolData,
  socialMediaToolData,
  startupToolData,
  studentAiToolData,
  videoEditingToolData,
  websiteBuilderToolData,
  writingToolData,
  aiAgentsToolData,
  voiceAudioAiToolData,
  aiSearchToolData,
  healthcareAiToolData,
  smartIntegrationsToolData,
  aiSafetyTestingToolData,
].flat();


const combinedTools = (allData ?? []).flatMap(category => 
  Array.isArray(category?.tools) ? category.tools.map(tool => ({ 
      name: tool.name,
      description: tool.description,
      url: tool.url,
      category: category.title 
    })) : []
);

// Create a unique list of tools
const uniqueTools: ServerTool[] = [];
const toolNames = new Set<string>();

for (const tool of combinedTools) {
    if (tool && tool.name && !toolNames.has(tool.name)) {
        uniqueTools.push(tool);
        toolNames.add(tool.name);
    }
}

export const allToolsServer = uniqueTools;
