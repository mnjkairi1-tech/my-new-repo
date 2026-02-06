
'use client';

import React from 'react';
import { 
    BrainCircuit, Building, FileSearch, Globe, ImageIcon, Video, Mic, Code, GraduationCap, Scale,
    HeartPulse, Languages, Crosshair, MessageSquare, GitBranch, Clock, ShoppingCart, Newspaper, Share2,
    User, Shield, ThumbsUp, Wrench, Database, Globe2, HelpCircle, Users, BarChart, Eye, CheckCheck
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

export const aiSearchToolData: ToolCategory[] = [
    {
        title: "Semantic Search",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Pinecone', description: 'Vector database for AI-powered search.', url: 'https://www.pinecone.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pinecone.io', dataAiHint: 'vector database', pricing: 'Freemium' },
            { name: 'Weaviate', description: 'Open-source vector database.', url: 'https://weaviate.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=weaviate.io', dataAiHint: 'open source vector', pricing: 'Free' },
            { name: 'Vectara', description: 'Neural network-based search-as-a-service.', url: 'https://vectara.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=vectara.com', dataAiHint: 'neural search', pricing: 'Paid' },
            { name: 'Jina AI', description: 'Open source multimodal AI for search applications.', url: 'https://jina.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jina.ai', dataAiHint: 'multimodal search', pricing: 'Freemium' },
            { name: 'Milvus', description: 'Open-source vector database for similarity search.', url: 'https://milvus.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=milvus.io', dataAiHint: 'similarity search', pricing: 'Free' },
            { name: 'Qdrant', description: 'Vector Similarity Search Engine.', url: 'https://qdrant.tech/', image: 'https://www.google.com/s2/favicons?sz=128&domain=qdrant.tech', dataAiHint: 'vector engine', pricing: 'Freemium' },
            { name: 'Cohere Rerank', description: 'State-of-the-art reranking model for semantic search.', url: 'https://cohere.com/rerank', image: 'https://www.google.com/s2/favicons?sz=128&domain=cohere.com', dataAiHint: 'rerank model', pricing: 'Paid' },
            { name: 'Sentence-Transformers', description: 'Sentence embeddings for creating sentence embeddings.', url: 'https://www.sbert.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sbert.net', dataAiHint: 'sentence embeddings', pricing: 'Free' },
            { name: 'Haystack', description: 'Open-source framework for building NLP search systems.', url: 'https://haystack.deepset.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=deepset.ai', dataAiHint: 'nlp search', pricing: 'Free' },
            { name: 'OpenSearch', description: 'Distributed search and analytics suite with k-NN search.', url: 'https://opensearch.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=opensearch.org', dataAiHint: 'knn search', pricing: 'Free' },
            { name: 'LanceDB', description: 'Embedded, serverless vector database.', url: 'https://lancedb.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lancedb.com', dataAiHint: 'serverless vector', pricing: 'Free' },
            { name: 'Marqo', description: 'Open-source tensor search for humans.', url: 'https://www.marqo.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=marqo.ai', dataAiHint: 'tensor search', pricing: 'Free' },
            { name: 'Zilliz Cloud', description: 'Managed cloud vector database powered by Milvus.', url: 'https://zilliz.com/cloud', image: 'https://www.google.com/s2/favicons?sz=128&domain=zilliz.com', dataAiHint: 'managed milvus', pricing: 'Paid' },
            { name: 'Activeloop Deep Lake', description: 'Database for AI with a focus on deep learning data.', url: 'https://www.activeloop.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=activeloop.ai', dataAiHint: 'deep learning', pricing: 'Freemium' },
            { name: 'ScaNN', description: 'Scalable Nearest Neighbors library from Google.', url: 'https://github.com/google-research/google-research/tree/master/scann', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'nearest neighbor', pricing: 'Free' },
            { name: 'Vald', description: 'A highly scalable distributed vector search engine.', url: 'https://vald.vdaas.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=vald.vdaas.org', dataAiHint: 'distributed vector', pricing: 'Free' },
            { name: 'Hugging Face Inference', description: 'A toolkit for serving text-embeddings models.', url: 'https://github.com/huggingface/text-embeddings-inference', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'hugging face', pricing: 'Free' },
            { name: 'FAISS', description: 'Library for efficient similarity search by Facebook AI.', url: 'https://faiss.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=faiss.ai', dataAiHint: 'similarity search', pricing: 'Free' },
            { name: 'Nomic Atlas', description: 'Tool for visualizing and interacting with massive embedding datasets.', url: 'https://atlas.nomic.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=nomic.ai', dataAiHint: 'embedding visualization', pricing: 'Free' },
            { name: 'Annoy', description: 'Approximate Nearest Neighbors Oh Yeah by Spotify.', url: 'https://github.com/spotify/annoy', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'spotify ann', pricing: 'Free' }
        ]
    },
    {
        title: "Enterprise Search",
        icon: <Building className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Algolia', description: 'Hosted search API for websites and mobile apps.', url: 'https://www.algolia.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=algolia.com', dataAiHint: 'search api', pricing: 'Paid' },
            { name: 'Elasticsearch', description: 'A distributed, RESTful search and analytics engine.', url: 'https://www.elastic.co/elasticsearch/', image: 'https://www.google.com/s2/favicons?sz=128&domain=elastic.co', dataAiHint: 'search engine', pricing: 'Freemium' },
            { name: 'Coveo', description: 'AI-powered relevance platform for enterprise search.', url: 'https://www.coveo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=coveo.com', dataAiHint: 'relevance platform', pricing: 'Paid' },
            { name: 'Sinequa', description: 'Intelligent search platform for complex organizations.', url: 'https://www.sinequa.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sinequa.com', dataAiHint: 'intelligent search', pricing: 'Paid' },
            { name: 'Lucidworks Fusion', description: 'Cloud-native search platform.', url: 'https://lucidworks.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lucidworks.com', dataAiHint: 'cloud-native search', pricing: 'Paid' },
            { name: 'Mindbreeze', description: 'Insight engine for enterprise knowledge.', url: 'https://www.mindbreeze.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mindbreeze.com', dataAiHint: 'insight engine', pricing: 'Paid' },
            { name: 'SearchUnify', description: 'Cognitive search and insights platform.', url: 'https://www.searchunify.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=searchunify.com', dataAiHint: 'cognitive search', pricing: 'Paid' },
            { name: 'Funnelback', description: 'Enterprise search solution.', url: 'https://www.funnelback.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=funnelback.com', dataAiHint: 'search solution', pricing: 'Paid' },
            { name: 'Yext', description: 'AI search platform for websites, apps, and workspaces.', url: 'https://www.yext.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=yext.com', dataAiHint: 'ai search', pricing: 'Paid' },
            { name: 'Swiftype', description: 'Site search and enterprise search by Elastic.', url: 'https://swiftype.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=swiftype.com', dataAiHint: 'elastic search', pricing: 'Paid' },
            { name: 'Micro Focus IDOL', description: 'Intelligent Data Operating Layer for enterprise data.', url: 'https://www.microfocus.com/en-us/products/idol-unstructured-data-analytics/overview', image: 'https://www.google.com/s2/favicons?sz=128&domain=microfocus.com', dataAiHint: 'unstructured data', pricing: 'Paid' },
            { name: 'SearchBlox', description: 'Enterprise search, federation, and data integration.', url: 'https://www.searchblox.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=searchblox.com', dataAiHint: 'data federation', pricing: 'Paid' },
            { name: 'IBM Watson Discovery', description: 'AI-powered search and text-analytics.', url: 'https://www.ibm.com/cloud/watson-discovery', image: 'https://www.google.com/s2/favicons?sz=128&domain=ibm.com', dataAiHint: 'text analytics', pricing: 'Paid' },
            { name: 'MarkLogic', description: 'A multi-model database with search capabilities.', url: 'https://www.marklogic.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=marklogic.com', dataAiHint: 'multi-model db', pricing: 'Paid' },
            { name: 'Inbenta', description: 'Symbolic AI-based conversational platform with search.', url: 'https://www.inbenta.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=inbenta.com', dataAiHint: 'conversational platform', pricing: 'Paid' },
            { name: 'Hawksearch', description: 'AI-powered search, recommendations, and personalization.', url: 'https://www.hawksearch.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hawksearch.com', dataAiHint: 'search personalization', pricing: 'Paid' },
            { name: 'Constructor.io', description: 'AI-first product discovery platform.', url: 'https://constructor.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=constructor.io', dataAiHint: 'product discovery', pricing: 'Paid' },
            { name: 'Glean', description: 'AI-powered work assistant that searches across all your company\'s apps.', url: 'https://www.glean.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=glean.com', dataAiHint: 'work assistant', pricing: 'Paid' },
            { name: 'Guru', description: 'Knowledge management solution that works in your workflow.', url: 'https://www.getguru.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=getguru.com', dataAiHint: 'knowledge management', pricing: 'Freemium' },
            { name: 'Stravito', description: 'Knowledge management for market research and insights.', url: 'https://www.stravito.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=stravito.com', dataAiHint: 'market research', pricing: 'Paid' },
        ]
    },
    {
        title: "Document Search",
        icon: <FileSearch className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Humata AI', description: 'Your AI for files. Ask questions, get answers, and summarize.', url: 'https://www.humata.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=humata.ai', dataAiHint: 'document ai', pricing: 'Freemium' },
            { name: 'ChatPDF', description: 'Chat with any PDF to get summaries and answers.', url: 'https://www.chatpdf.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=chatpdf.com', dataAiHint: 'pdf conversation', pricing: 'Freemium' },
            { name: 'DocuChat', description: 'AI chatbot for your documents.', url: 'https://www.docuchat.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=docuchat.io', dataAiHint: 'document chatbot', pricing: 'Paid' },
            { name: 'FileGPT', description: 'Chat with your documents.', url: 'https://filegpt.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=filegpt.io', dataAiHint: 'ai file reader', pricing: 'Freemium' },
            { name: 'PDF.ai', description: 'Chat with your PDF documents.', url: 'https://pdf.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pdf.ai', dataAiHint: 'pdf search', pricing: 'Freemium' },
            { name: 'AskYourPDF', description: 'The best PDF AI summarizer and chatbot.', url: 'https://askyourpdf.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=askyourpdf.com', dataAiHint: 'pdf summarizer', pricing: 'Freemium' },
            { name: 'Documate', description: 'AI-powered document automation.', url: 'https://documate.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=documate.org', dataAiHint: 'document automation', pricing: 'Paid' },
            { name: 'Docalysis', description: 'Analyze your documents with AI.', url: 'https://docalysis.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=docalysis.com', dataAiHint: 'document analysis', pricing: 'Freemium' },
            { name: 'Paperlee', description: 'Read papers and documents faster.', url: 'https://www.paperlee.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=paperlee.com', dataAiHint: 'fast reading', pricing: 'Paid' },
            { name: 'Unriddle', description: 'AI research assistant for any document.', url: 'https://www.unriddle.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=unriddle.ai', dataAiHint: 'research assistant', pricing: 'Freemium' },
            { name: 'Memex', description: 'A privacy-first browser extension to annotate and organize your online research.', url: 'https://getmemex.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=getmemex.com', dataAiHint: 'web annotation', pricing: 'Free' },
            { name: 'DevonThink', description: 'A document management system for Mac and iOS.', url: 'https://www.devontechnologies.com/apps/devonthink', image: 'https://www.google.com/s2/favicons?sz=128&domain=devontechnologies.com', dataAiHint: 'mac document', pricing: 'Paid' },
            { name: 'Pinpoint by Google', description: 'Explore and analyze large collections of documents.', url: 'https://journaliststudio.google.com/pinpoint/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'document analysis', pricing: 'Free' },
            { name: 'Nuclino', description: 'A modern, simple, and fast wiki for teams.', url: 'https://www.nuclino.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=nuclino.com', dataAiHint: 'team wiki', pricing: 'Freemium' },
            { name: 'Slite', description: 'Knowledge base and async communication for teams.', url: 'https://slite.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=slite.com', dataAiHint: 'knowledge base', pricing: 'Freemium' },
            { name: 'Alfresco', description: 'Open-source content management and process automation.', url: 'https://www.alfresco.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=alfresco.com', dataAiHint: 'content management', pricing: 'Freemium' },
            { name: 'M-Files', description: 'Intelligent information management.', url: 'https://www.m-files.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=m-files.com', dataAiHint: 'information management', pricing: 'Paid' },
            { name: 'DocuWare', description: 'Document management & workflow automation.', url: 'https://www.docuware.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=docuware.com', dataAiHint: 'workflow automation', pricing: 'Paid' },
            { name: 'OpenKM', description: 'Open source document management system.', url: 'https://www.openkm.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=openkm.com', dataAiHint: 'open source doc', pricing: 'Free' },
            { name: 'Nuxeo', description: 'A cloud-native content services platform.', url: 'https://www.nuxeo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=nuxeo.com', dataAiHint: 'content services', pricing: 'Paid' }
        ]
    },
    {
        title: "Website Search",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Algolia', description: 'Add a powerful search to your website.', url: 'https://www.algolia.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=algolia.com', dataAiHint: 'site search', pricing: 'Paid' },
            { name: 'Google Programmable Search Engine', description: 'Create a search engine for your website.', url: 'https://programmablesearchengine.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'custom search', pricing: 'Freemium' },
            { name: 'Swiftype', description: 'Add search to your website with ease.', url: 'https://swiftype.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=swiftype.com', dataAiHint: 'elastic search', pricing: 'Paid' },
            { name: 'Searchspring', description: 'AI-driven search for e-commerce sites.', url: 'https://searchspring.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=searchspring.com', dataAiHint: 'ecommerce search', pricing: 'Paid' },
            { name: 'AddSearch', description: 'Site search for websites of all sizes.', url: 'https://www.addsearch.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=addsearch.com', dataAiHint: 'website search', pricing: 'Paid' },
            { name: 'Cludo', description: 'Intelligent site search.', url: 'https://www.cludo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cludo.com', dataAiHint: 'intelligent search', pricing: 'Paid' },
            { name: 'Amazon CloudSearch', description: 'A managed search service in the AWS Cloud.', url: 'https://aws.amazon.com/cloudsearch/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'aws search', pricing: 'Paid' },
            { name: 'Azure Cognitive Search', description: 'AI-powered search service for mobile and web app development.', url: 'https://azure.microsoft.com/en-us/products/search/', image: 'https://www.google.com/s2/favicons?sz=128&domain=azure.microsoft.com', dataAiHint: 'cognitive search', pricing: 'Paid' },
            { name: 'Elastic Site Search', description: 'Add search to your website with a pre-tuned engine.', url: 'https://www.elastic.co/site-search', image: 'https://www.google.com/s2/favicons?sz=128&domain=elastic.co', dataAiHint: 'pre-tuned engine', pricing: 'Paid' },
            { name: 'Search.io', description: 'The world\'s most powerful search and discovery platform.', url: 'https://www.search.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=search.io', dataAiHint: 'discovery platform', pricing: 'Paid' },
            { name: 'Jetboost', description: 'Real-time search & filtering for Webflow.', url: 'https://www.jetboost.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jetboost.io', dataAiHint: 'webflow search', pricing: 'Paid' },
            { name: 'Tastewp', description: 'WordPress staging with one click.', url: 'https://tastewp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tastewp.com', dataAiHint: 'wordpress staging', pricing: 'Free' },
            { name: 'SearchWP', description: 'A powerful custom search plugin for WordPress.', url: 'https://searchwp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=searchwp.com', dataAiHint: 'wordpress plugin', pricing: 'Paid' },
            { name: 'Relevanssi', description: 'A better search for your WordPress site.', url: 'https://www.relevanssi.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=relevanssi.com', dataAiHint: 'wordpress search', pricing: 'Freemium' },
            { name: 'Ivory Search', description: 'Advanced WordPress search plugin.', url: 'https://ivorysearch.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ivorysearch.com', dataAiHint: 'advanced search', pricing: 'Freemium' },
            { name: 'Site Search 360', description: 'A smart search solution for any website.', url: 'https://sitesearch360.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sitesearch360.com', dataAiHint: 'smart search', pricing: 'Freemium' },
            { name: 'Doofinder', description: 'On-site search engine for e-commerce.', url: 'https://www.doofinder.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=doofinder.com', dataAiHint: 'ecommerce search', pricing: 'Paid' },
            { name: 'Luigi’s Box', description: 'Search and product discovery for e-commerce.', url: 'https://luigisbox.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=luigisbox.com', dataAiHint: 'product discovery', pricing: 'Paid' },
            { name: 'Expertrec', description: 'Custom search engine for your website.', url: 'https://www.expertrec.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=expertrec.com', dataAiHint: 'custom engine', pricing: 'Paid' },
            { name: 'Sooqr', description: 'The most relevant and converting site search.', url: 'https://www.sooqr.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sooqr.com', dataAiHint: 'converting search', pricing: 'Paid' }
        ]
    },
    {
        title: "Image Search AI",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Lens', description: 'Search what you see.', url: 'https://lens.google/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'visual search', pricing: 'Free' },
            { name: 'Pinterest Lens', description: 'Visual discovery tool for finding ideas on Pinterest.', url: 'https://help.pinterest.com/en/article/pinterest-lens', image: 'https://www.google.com/s2/favicons?sz=128&domain=pinterest.com', dataAiHint: 'idea discovery', pricing: 'Free' },
            { name: 'TinEye', description: 'Reverse image search.', url: 'https://tineye.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tineye.com', dataAiHint: 'reverse search', pricing: 'Free' },
            { name: 'Yandex Images', description: 'Image search and reverse image search.', url: 'https://yandex.com/images/', image: 'https://www.google.com/s2/favicons?sz=128&domain=yandex.com', dataAiHint: 'image search', pricing: 'Free' },
            { name: 'Bing Visual Search', description: 'Search the web using an image.', url: 'https://www.bing.com/visualsearch', image: 'https://www.google.com/s2/favicons?sz=128&domain=bing.com', dataAiHint: 'bing search', pricing: 'Free' },
            { name: 'Adobe Stock Visual Search', description: 'Find similar stock images visually.', url: 'https://stock.adobe.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=adobe.com', dataAiHint: 'stock images', pricing: 'Paid' },
            { name: 'Shutterstock Visual Search', description: 'Search by image to find similar content.', url: 'https://www.shutterstock.com/search/image', image: 'https://www.google.com/s2/favicons?sz=128&domain=shutterstock.com', dataAiHint: 'similar content', pricing: 'Paid' },
            { name: 'Getty Images Visual Search', description: 'Find similar images and videos.', url: 'https://www.gettyimages.com/solutions/visual-search', image: 'https://www.google.com/s2/favicons?sz=128&domain=gettyimages.com', dataAiHint: 'similar videos', pricing: 'Paid' },
            { name: 'Amazon Rekognition', description: 'Automate your image and video analysis with ML.', url: 'https://aws.amazon.com/rekognition/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'image analysis', pricing: 'Paid' },
            { name: 'Google Cloud Vision AI', description: 'Derive insights from your images.', url: 'https://cloud.google.com/vision', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloud.google.com', dataAiHint: 'image insights', pricing: 'Paid' },
            { name: 'Clarifai', description: 'AI platform for unstructured data.', url: 'https://www.clarifai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=clarifai.com', dataAiHint: 'computer vision', pricing: 'Paid' },
            { name: 'Imagga', description: 'Image recognition API.', url: 'https://imagga.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=imagga.com', dataAiHint: 'image recognition', pricing: 'Paid' },
            { name: 'CamFind', description: 'Mobile visual search engine.', url: 'https://camfindapp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=camfindapp.com', dataAiHint: 'mobile visual', pricing: 'Free' },
            { name: 'Lexica', description: 'The Stable Diffusion search engine.', url: 'https://lexica.art/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lexica.art', dataAiHint: 'prompt search', pricing: 'Freemium' },
            { name: 'Same Energy', description: 'Visual search engine.', url: 'https://same.energy/', image: 'https://www.google.com/s2/favicons?sz=128&domain=same.energy', dataAiHint: 'artistic styles', pricing: 'Free' },
            { name: 'PimEyes', description: 'Face recognition search engine.', url: 'https://pimeyes.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pimeyes.com', dataAiHint: 'face recognition', pricing: 'Paid' },
            { name: 'Karma Decay', description: 'Reverse image search for Reddit.', url: 'http://karmadecay.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=karmadecay.com', dataAiHint: 'reddit search', pricing: 'Free' },
            { name: 'SauceNAO', description: 'Reverse image search for anime and artists.', url: 'https://saucenao.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=saucenao.com', dataAiHint: 'anime search', pricing: 'Free' },
            { name: 'IQDB', description: 'Multi-service image search.', url: 'https://iqdb.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=iqdb.org', dataAiHint: 'multi-service', pricing: 'Free' },
            { name: 'Picular', description: 'Google, but for colors.', url: 'https://picular.co/', image: 'https://www.google.com/s2/favicons?sz=128&domain=picular.co', dataAiHint: 'color search', pricing: 'Free' }
        ]
    },
    {
        title: "Video Search AI",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Twelve Labs', description: 'Multimodal AI for understanding video.', url: 'https://twelvelabs.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=twelvelabs.io', dataAiHint: 'video understanding', pricing: 'Paid' },
            { name: 'VFRAME', description: 'Open source computer vision for video analysis.', url: 'https://vframe.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=vframe.io', dataAiHint: 'video analysis', pricing: 'Free' },
            { name: 'Valossa', description: 'AI for video recognition and intelligence.', url: 'https://valossa.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=valossa.com', dataAiHint: 'video recognition', pricing: 'Paid' },
            { name: 'Amazon Rekognition Video', description: 'Automated video analysis.', url: 'https://aws.amazon.com/rekognition/video/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'aws video', pricing: 'Paid' },
            { name: 'Azure AI Video Indexer', description: 'Extract insights from your videos.', url: 'https://azure.microsoft.com/en-us/products/ai-video-indexer/', image: 'https://www.google.com/s2/favicons?sz=128&domain=azure.microsoft.com', dataAiHint: 'video insights', pricing: 'Paid' },
            { name: 'Google Cloud Video AI', description: 'Video analysis with machine learning.', url: 'https://cloud.google.com/video-intelligence', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloud.google.com', dataAiHint: 'ml video', pricing: 'Paid' },
            { name: 'Clarifai', description: 'AI platform for unstructured video data.', url: 'https://www.clarifai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=clarifai.com', dataAiHint: 'unstructured data', pricing: 'Paid' },
            { name: 'Mobius Labs', description: 'Computer vision solutions for businesses.', url: 'https://www.mobiuslabs.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mobiuslabs.com', dataAiHint: 'computer vision', pricing: 'Paid' },
            { name: 'Viisights', description: 'Behavioral recognition for real-time video intelligence.', url: 'https://www.viisights.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=viisights.com', dataAiHint: 'behavioral recognition', pricing: 'Paid' },
            { name: 'Kaltura', description: 'Video platform with search and discovery features.', url: 'https://corp.kaltura.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kaltura.com', dataAiHint: 'video platform', pricing: 'Paid' },
            { name: 'Panopto', description: 'Video management system with inside-video search.', url: 'https://www.panopto.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=panopto.com', dataAiHint: 'video management', pricing: 'Paid' },
            { name: 'YuJa', description: 'Enterprise video platform with smart search.', url: 'https://www.yuja.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=yuja.com', dataAiHint: 'enterprise video', pricing: 'Paid' },
            { name: 'AnyClip', description: 'The Visual Intelligence Company.', url: 'https://anyclip.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=anyclip.com', dataAiHint: 'visual intelligence', pricing: 'Paid' },
            { name: 'Veritone', description: 'Enterprise AI platform.', url: 'https://www.veritone.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=veritone.com', dataAiHint: 'enterprise ai', pricing: 'Paid' },
            { name: 'Hive', description: 'Cloud-based AI models for content understanding.', url: 'https://thehive.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=thehive.ai', dataAiHint: 'content understanding', pricing: 'Paid' },
            { name: 'Marvin', description: 'AI-powered qualitative data analysis.', url: 'https://www.heymarvin.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=heymarvin.com', dataAiHint: 'qualitative data', pricing: 'Paid' },
            { name: 'Reduct.video', description: 'Transcribe, search, and edit your video footage.', url: 'https://reduct.video/', image: 'https://www.google.com/s2/favicons?sz=128&domain=reduct.video', dataAiHint: 'text-based video', pricing: 'Paid' },
            { name: 'Simon Says', description: 'AI transcription and video assembly.', url: 'https://www.simonsays.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=simonsays.ai', dataAiHint: 'video assembly', pricing: 'Paid' },
            { name: 'Trint', description: 'AI audio transcription for video content.', url: 'https://trint.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=trint.com', dataAiHint: 'audio transcription', pricing: 'Paid' },
            { name: 'Otter.ai', description: 'Transcribe meetings and videos.', url: 'https://otter.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=otter.ai', dataAiHint: 'meeting transcription', pricing: 'Freemium' }
        ]
    },
    {
        title: "Voice Search",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Assistant', description: 'Your personal Google, always ready to help.', url: 'https://assistant.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'voice assistant', pricing: 'Free' },
            { name: 'Amazon Alexa', description: 'The voice service that powers Echo devices.', url: 'https://www.amazon.com/alexa', image: 'https://www.google.com/s2/favicons?sz=128&domain=amazon.com', dataAiHint: 'smart speaker', pricing: 'Free' },
            { name: 'Siri', description: 'Apple\'s intelligent assistant.', url: 'https://www.apple.com/siri/', image: 'https://www.google.com/s2/favicons?sz=128&domain=apple.com', dataAiHint: 'apple assistant', pricing: 'Free' },
            { name: 'Microsoft Cortana', description: 'Your personal productivity assistant.', url: 'https://www.microsoft.com/en-us/cortana', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'productivity assistant', pricing: 'Free' },
            { name: 'SoundHound', description: 'A faster and smarter voice assistant.', url: 'https://soundhound.com/hound/', image: 'https://www.google.com/s2/favicons?sz=128&domain=soundhound.com', dataAiHint: 'natural language', pricing: 'Free' },
            { name: 'Google Voice Search', description: 'Search Google with your voice.', url: 'https://www.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'google search', pricing: 'Free' },
            { name: 'Houndify', description: 'Voice AI platform.', url: 'https://www.houndify.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=houndify.com', dataAiHint: 'voice ai', pricing: 'Paid' },
            { name: 'Picovoice', description: 'On-device voice recognition.', url: 'https://picovoice.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=picovoice.ai', dataAiHint: 'edge ai', pricing: 'Freemium' },
            { name: 'Speechly', description: 'Voice interface API for web and mobile.', url: 'https://www.speechly.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=speechly.com', dataAiHint: 'voice interface', pricing: 'Freemium' },
            { name: 'Alan AI', description: 'Add a voice interface to any application.', url: 'https://alan.app/', image: 'https://www.google.com/s2/favicons?sz=128&domain=alan.app', dataAiHint: 'app voice', pricing: 'Paid' },
            { name: 'Vocol.ai', description: 'Voice collaboration platform.', url: 'https://www.vocol.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=vocol.ai', dataAiHint: 'voice collaboration', pricing: 'Paid' },
            { name: 'Mycroft', description: 'The open source voice assistant.', url: 'https://mycroft.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mycroft.ai', dataAiHint: 'open source', pricing: 'Free' },
            { name: 'Wit.ai', description: 'Natural language for developers.', url: 'https://wit.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=wit.ai', dataAiHint: 'nlp platform', pricing: 'Free' },
            { name: 'Dragon by Nuance', description: 'Speech recognition software.', url: 'https://www.nuance.com/dragon.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=nuance.com', dataAiHint: 'dictation software', pricing: 'Paid' },
            { name: 'AssemblyAI', description: 'AI models for speech-to-text and more.', url: 'https://www.assemblyai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=assemblyai.com', dataAiHint: 'speech-to-text api', pricing: 'Paid' },
            { name: 'Deepgram', description: 'Speech-to-text API for enterprises.', url: 'https://deepgram.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=deepgram.com', dataAiHint: 'enterprise stt', pricing: 'Paid' },
            { name: 'Rev.ai', description: 'Automated speech-to-text.', url: 'https://www.rev.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rev.ai', dataAiHint: 'speech recognition', pricing: 'Paid' },
            { name: 'Voicera', description: 'AI assistant for your meetings.', url: 'https://www.voicera.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=voicera.com', dataAiHint: 'meeting assistant', pricing: 'Paid' },
            { name: 'Bixby', description: 'Samsung\'s intelligent assistant.', url: 'https://www.samsung.com/global/galaxy/apps/bixby/', image: 'https://www.google.com/s2/favicons?sz=128&domain=samsung.com', dataAiHint: 'samsung assistant', pricing: 'Free' },
            { name: 'Yandex Alice', description: 'Russian-speaking intelligent assistant.', url: 'https://yandex.com/alice', image: 'https://www.google.com/s2/favicons?sz=128&domain=yandex.com', dataAiHint: 'russian assistant', pricing: 'Free' },
        ]
    },
    {
        title: "Code Search AI",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Sourcegraph', description: 'Understand and fix code faster with code search.', url: 'https://about.sourcegraph.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sourcegraph.com', dataAiHint: 'code search', pricing: 'Freemium' },
            { name: 'Phind', description: 'The AI search engine for developers.', url: 'https://www.phind.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=phind.com', dataAiHint: 'developer search', pricing: 'Free' },
            { name: 'GitHub Code Search', description: 'Search code on GitHub.', url: 'https://github.com/search', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'github search', pricing: 'Free' },
            { name: 'Grep.app', description: 'Search across a half million git repositories.', url: 'https://grep.app/', image: 'https://www.google.com/s2/favicons?sz=128&domain=grep.app', dataAiHint: 'git search', pricing: 'Free' },
            { name: 'Blackbox AI', description: 'AI code generation, explanation, and search.', url: 'https://www.blackbox.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=blackbox.ai', dataAiHint: 'ai code search', pricing: 'Freemium' },
            { name: 'You.com', description: 'AI chatbot and search engine with code search capabilities.', url: 'https://you.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=you.com', dataAiHint: 'code search', pricing: 'Free' },
            { name: 'Tabnine', description: 'AI assistant that helps you write code faster.', url: 'https://www.tabnine.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tabnine.com', dataAiHint: 'code completion', pricing: 'Freemium' },
            { name: 'CodeGrep', description: 'Semantic code search for teams.', url: 'https://www.codegrep.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=codegrep.com', dataAiHint: 'semantic search', pricing: 'Paid' },
            { name: 'Codeask', description: 'A code search engine for your codebase.', url: 'https://www.codeask.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=codeask.io', dataAiHint: 'codebase search', pricing: 'Paid' },
            { name: 'Buildt', description: 'AI code search for your entire codebase.', url: 'https://www.buildt.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=buildt.ai', dataAiHint: 'ai code search', pricing: 'Freemium' },
            { name: 'OpenGrok', description: 'A fast and usable source code search and cross reference engine.', url: 'https://oracle.github.io/opengrok/', image: 'https://www.google.com/s2/favicons?sz=128&domain=oracle.github.io', dataAiHint: 'source code engine', pricing: 'Free' },
            { name: 'Livegrep', description: 'A fast, client-side code search.', url: 'https://livegrep.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=livegrep.com', dataAiHint: 'client-side search', pricing: 'Free' },
            { name: 'Snyk Code', description: 'Static application security testing that finds and fixes vulnerabilities.', url: 'https://snyk.io/product/snyk-code/', image: 'https://www.google.com/s2/favicons?sz=128&domain=snyk.io', dataAiHint: 'sast', pricing: 'Freemium' },
            { name: 'SonarCloud', description: 'Cloud-based code quality and security.', url: 'https://sonarcloud.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sonarcloud.io', dataAiHint: 'code quality', pricing: 'Freemium' },
            { name: 'Krugle', description: 'Code search for enterprises.', url: 'https://www.krugle.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=krugle.com', dataAiHint: 'enterprise code', pricing: 'Paid' },
            { name: 'CodeSee', description: 'Visualize your codebase.', url: 'https://www.codesee.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=codesee.io', dataAiHint: 'code visualization', pricing: 'Freemium' },
            { name: 'CodeFactor', description: 'Automated code review for GitHub and BitBucket.', url: 'https://www.codefactor.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=codefactor.io', dataAiHint: 'code review', pricing: 'Freemium' },
            { name: 'Code Climate', description: 'Automated code review and quality analytics.', url: 'https://codeclimate.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=codeclimate.com', dataAiHint: 'quality analytics', pricing: 'Paid' },
            { name: 'Zoekt', description: 'A fast, trigram-based code search tool from Google.', url: 'https://github.com/google/zoekt', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'trigram search', pricing: 'Free' },
            { name: 'Cody by Sourcegraph', description: 'AI coding assistant that lives in your editor.', url: 'https://sourcegraph.com/cody', image: 'https://www.google.com/s2/favicons?sz=128&domain=sourcegraph.com', dataAiHint: 'ai coding assistant', pricing: 'Freemium' }
        ]
    },
    {
        title: "Academic Search",
        icon: <GraduationCap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Scholar', description: 'Broadly search for scholarly literature.', url: 'https://scholar.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'academic search', pricing: 'Free' },
            { name: 'Semantic Scholar', description: 'AI-powered research tool for scientific literature.', url: 'https://www.semanticscholar.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=semanticscholar.org', dataAiHint: 'scientific literature', pricing: 'Free' },
            { name: 'Elicit', description: 'The AI Research Assistant.', url: 'https://elicit.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=elicit.org', dataAiHint: 'research assistant', pricing: 'Freemium' },
            { name: 'Connected Papers', description: 'A visual tool to explore academic papers.', url: 'https://www.connectedpapers.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=connectedpapers.com', dataAiHint: 'visual explorer', pricing: 'Free' },
            { name: 'Research Rabbit', description: 'Your personal research assistant.', url: 'https://www.researchrabbit.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=researchrabbit.ai', dataAiHint: 'literature map', pricing: 'Free' },
            { name: 'Scite', description: 'See how research has been cited.', url: 'https://scite.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=scite.ai', dataAiHint: 'smart citations', pricing: 'Freemium' },
            { name: 'PubMed', description: 'Biomedical literature from MEDLINE.', url: 'https://pubmed.ncbi.nlm.nih.gov/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ncbi.nlm.nih.gov', dataAiHint: 'medical literature', pricing: 'Free' },
            { name: 'JSTOR', description: 'A digital library of academic journals, books, and primary sources.', url: 'https://www.jstor.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jstor.org', dataAiHint: 'digital library', pricing: 'Paid' },
            { name: 'arXiv', description: 'Open-access archive for scholarly articles.', url: 'https://arxiv.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=arxiv.org', dataAiHint: 'research preprints', pricing: 'Free' },
            { name: 'Scopus', description: 'A large abstract and citation database.', url: 'https://www.scopus.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=scopus.com', dataAiHint: 'citation database', pricing: 'Paid' },
            { name: 'Web of Science', description: 'Global citation database.', url: 'https://www.webofscience.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=webofscience.com', dataAiHint: 'research database', pricing: 'Paid' },
            { name: 'Dimensions', description: 'The world’s largest linked research information dataset.', url: 'https://www.dimensions.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=dimensions.ai', dataAiHint: 'linked research', pricing: 'Freemium' },
            { name: 'BASE', description: 'Search engine for academic open access web resources.', url: 'https://www.base-search.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=base-search.net', dataAiHint: 'open access', pricing: 'Free' },
            { name: 'CORE', description: 'The world’s largest collection of open access research papers.', url: 'https://core.ac.uk/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ac.uk', dataAiHint: 'research papers', pricing: 'Free' },
            { name: 'RefSeek', description: 'Academic search engine for students and researchers.', url: 'https://www.refseek.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=refseek.com', dataAiHint: 'student search', pricing: 'Free' },
            { name: 'ERIC', description: 'An online library of education research and information.', url: 'https://eric.ed.gov/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ed.gov', dataAiHint: 'education research', pricing: 'Free' },
            { name: 'OpenAlex', description: 'A free and open catalog of the global research system.', url: 'https://openalex.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=openalex.org', dataAiHint: 'research catalog', pricing: 'Free' },
            { name: 'SSRN', description: 'Preprint server for social sciences and humanities.', url: 'https://www.ssrn.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ssrn.com', dataAiHint: 'social science', pricing: 'Free' },
            { name: 'Academia.edu', description: 'Share and discover research.', url: 'https://www.academia.edu/', image: 'https://www.google.com/s2/favicons?sz=128&domain=academia.edu', dataAiHint: 'share research', pricing: 'Freemium' },
            { name: 'ResearchGate', description: 'The professional network for scientists and researchers.', url: 'https://www.researchgate.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=researchgate.net', dataAiHint: 'scientist network', pricing: 'Free' },
        ]
    },
    { title: "Legal Document Search", icon: <Scale className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Medical Search AI", icon: <HeartPulse className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Multilingual Search", icon: <Languages className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Context-Aware Search", icon: <Crosshair className="w-5 h-5 text-primary"/>, tools: [] },
    {
        title: "Conversational Search",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Perplexity AI', description: 'An answer engine for discovering and sharing knowledge.', url: 'https://www.perplexity.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=perplexity.ai', dataAiHint: 'answer engine', pricing: 'Freemium' },
            { name: 'ChatGPT', description: 'Conversational AI that can search the web.', url: 'https://chat.openai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=openai.com', dataAiHint: 'ai chat', pricing: 'Freemium' },
            { name: 'Google Gemini', description: 'Google\'s conversational AI with search capabilities.', url: 'https://gemini.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'google ai', pricing: 'Free' },
            { name: 'You.com', description: 'AI chatbot and search engine.', url: 'https://you.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=you.com', dataAiHint: 'search engine', pricing: 'Free' },
            { name: 'Phind', description: 'The AI search engine for developers.', url: 'https://www.phind.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=phind.com', dataAiHint: 'developer search', pricing: 'Free' },
            { name: 'Andi', description: 'Search for the next generation.', url: 'https://andisearch.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=andisearch.com', dataAiHint: 'generative ai', pricing: 'Free' },
            { name: 'Neeva', description: 'Ad-free, private search (Acquired by Snowflake).', url: 'https://neeva.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=neeva.com', dataAiHint: 'private search', pricing: 'Free' },
            { name: 'Yep.com', description: 'A search engine that rewards creators.', url: 'https://yep.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=yep.com', dataAiHint: 'creator economy', pricing: 'Free' },
            { name: 'Komo Search', description: 'Fast, private, and ad-free AI search.', url: 'https://komo.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=komo.ai', dataAiHint: 'private ai search', pricing: 'Free' },
            { name: 'Exa', description: 'Search the web with a new kind of model.', url: 'https://exa.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=exa.ai', dataAiHint: 'ai search model', pricing: 'Paid' },
            { name: 'Metaphor', description: 'A new kind of search engine.', url: 'https://metaphor.systems/', image: 'https://www.google.com/s2/favicons?sz=128&domain=metaphor.systems', dataAiHint: 'intelligent search', pricing: 'Free' },
            { name: 'Poe by Quora', description: 'Fast, helpful AI chat.', url: 'https://poe.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=poe.com', dataAiHint: 'ai chatbot', pricing: 'Freemium' },
            { name: 'Bing Chat', description: 'Now Microsoft Copilot. AI-powered copilot for the web.', url: 'https://copilot.microsoft.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'web copilot', pricing: 'Free' },
            { name: 'Brave Search', description: 'Private, independent search engine.', url: 'https://search.brave.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=brave.com', dataAiHint: 'privacy search', pricing: 'Free' },
            { name: 'Waldo', description: 'AI-powered search for your internal knowledge.', url: 'https://www.waldo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=waldo.com', dataAiHint: 'internal knowledge', pricing: 'Paid' },
            { name: 'Zoe', description: 'Your personal AI travel assistant.', url: 'https://zoe.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zoe.com', dataAiHint: 'travel assistant', pricing: 'Free' },
            { name: 'Aide', description: 'Conversational search for sales teams.', url: 'https://aide.app/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aide.app', dataAiHint: 'sales teams', pricing: 'Paid' },
            { name: 'Leap', description: 'AI-powered search for enterprise applications.', url: 'https://www.leap.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=leap.ai', dataAiHint: 'enterprise search', pricing: 'Paid' },
            { name: 'Myriad', description: 'Search and organize your digital world.', url: 'https://www.myriad.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=myriad.com', dataAiHint: 'digital organization', pricing: 'Freemium' },
            { name: 'Awell', description: 'Care pathway automation for clinical teams.', url: 'https://www.awell.health/', image: 'https://www.google.com/s2/favicons?sz=128&domain=awell.health', dataAiHint: 'clinical teams', pricing: 'Paid' }
        ]
    },
    { title: "Vector Search", icon: <GitBranch className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Real-Time Search", icon: <Clock className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "E-commerce Search AI", icon: <ShoppingCart className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "News Search AI", icon: <Newspaper className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Knowledge Graph Search", icon: <Share2 className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Personalized Search", icon: <User className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Privacy-Focused Search", icon: <Shield className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Recommendation-Based Search", icon: <ThumbsUp className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Internal Tool Search", icon: <Wrench className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Log & Data Search", icon: <Database className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI Web Crawlers", icon: <Globe2 className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Question-Answer Search", icon: <HelpCircle className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Social Media Search", icon: <Users className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Market Research Search", icon: <BarChart className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Competitive Intelligence Search", icon: <Eye className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI Fact-Checking Search", icon: <CheckCheck className="w-5 h-5 text-primary"/>, tools: [] }
];

// Auto-populate empty categories for demonstration
aiSearchToolData.forEach(category => {
    if (category.tools.length === 0) {
        for (let i = 1; i <= 20; i++) {
            category.tools.push({
                name: `${category.title.replace(' Tools', '').trim()} Tool ${i}`,
                description: `A sample tool for the ${category.title} category.`,
                url: '#',
                image: `https://www.google.com/s2/favicons?sz=128&domain=example.com`,
                dataAiHint: 'ai search',
                pricing: i % 3 === 0 ? 'Free' : (i % 2 === 0 ? 'Freemium' : 'Paid'),
            });
        }
    }
});
