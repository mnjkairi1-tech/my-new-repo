
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
            { name: 'Pinecone', description: 'Vector database for AI-powered search.', url: 'https://www.pinecone.io/', image: 'https://picsum.photos/seed/pinecone/600/400', dataAiHint: 'vector database', pricing: 'Freemium' },
            { name: 'Weaviate', description: 'Open-source vector database.', url: 'https://weaviate.io/', image: 'https://picsum.photos/seed/weaviate/600/400', dataAiHint: 'open source vector', pricing: 'Free' },
            { name: 'Vectara', description: 'Neural network-based search-as-a-service.', url: 'https://vectara.com/', image: 'https://picsum.photos/seed/vectara-sem/600/400', dataAiHint: 'neural search', pricing: 'Paid' },
            { name: 'Jina AI', description: 'Open source multimodal AI for search applications.', url: 'https://jina.ai/', image: 'https://picsum.photos/seed/jina-ai-sem/600/400', dataAiHint: 'multimodal search', pricing: 'Freemium' },
            { name: 'Milvus', description: 'Open-source vector database for similarity search.', url: 'https://milvus.io/', image: 'https://picsum.photos/seed/milvus-sem/600/400', dataAiHint: 'similarity search', pricing: 'Free' },
            { name: 'Qdrant', description: 'Vector Similarity Search Engine.', url: 'https://qdrant.tech/', image: 'https://picsum.photos/seed/qdrant-sem/600/400', dataAiHint: 'vector engine', pricing: 'Freemium' },
            { name: 'Cohere Rerank', description: 'State-of-the-art reranking model for semantic search.', url: 'https://cohere.com/rerank', image: 'https://picsum.photos/seed/cohere-sem/600/400', dataAiHint: 'rerank model', pricing: 'Paid' },
            { name: 'S-BERT', description: 'Sentence-Transformers for creating sentence embeddings.', url: 'https://www.sbert.net/', image: 'https://picsum.photos/seed/sbert/600/400', dataAiHint: 'sentence embeddings', pricing: 'Free' },
            { name: 'Haystack', description: 'Open-source framework for building NLP search systems.', url: 'https://haystack.deepset.ai/', image: 'https://picsum.photos/seed/haystack-sem/600/400', dataAiHint: 'nlp search', pricing: 'Free' },
            { name: 'OpenSearch', description: 'Distributed search and analytics suite with k-NN search.', url: 'https://opensearch.org/', image: 'https://picsum.photos/seed/opensearch-sem/600/400', dataAiHint: 'knn search', pricing: 'Free' },
            { name: 'LanceDB', description: 'Embedded, serverless vector database.', url: 'https://lancedb.com/', image: 'https://picsum.photos/seed/lancedb-sem/600/400', dataAiHint: 'serverless vector', pricing: 'Free' },
            { name: 'Marqo', description: 'Open-source tensor search for humans.', url: 'https://www.marqo.ai/', image: 'https://picsum.photos/seed/marqo-sem/600/400', dataAiHint: 'tensor search', pricing: 'Free' },
            { name: 'Zilliz Cloud', description: 'Managed cloud vector database powered by Milvus.', url: 'https://zilliz.com/cloud', image: 'https://picsum.photos/seed/zilliz-sem/600/400', dataAiHint: 'managed milvus', pricing: 'Paid' },
            { name: 'Activeloop Deep Lake', description: 'Database for AI with a focus on deep learning data.', url: 'https://www.activeloop.ai/', image: 'https://picsum.photos/seed/activeloop/600/400', dataAiHint: 'deep learning', pricing: 'Freemium' },
            { name: 'ScaNN', description: 'Scalable Nearest Neighbors library from Google.', url: 'https://github.com/google-research/google-research/tree/master/scann', image: 'https://picsum.photos/seed/scann/600/400', dataAiHint: 'nearest neighbor', pricing: 'Free' },
            { name: 'Vald', description: 'A highly scalable distributed vector search engine.', url: 'https://vald.vdaas.org/', image: 'https://picsum.photos/seed/vald-sem/600/400', dataAiHint: 'distributed vector', pricing: 'Free' },
            { name: 'Text-Embeddings-Inference', description: 'A toolkit for serving text-embeddings models.', url: 'https://github.com/huggingface/text-embeddings-inference', image: 'https://picsum.photos/seed/text-embeddings/600/400', dataAiHint: 'hugging face', pricing: 'Free' },
            { name: 'FAISS', description: 'Library for efficient similarity search by Facebook AI.', url: 'https://faiss.ai/', image: 'https://picsum.photos/seed/faiss-sem/600/400', dataAiHint: 'similarity search', pricing: 'Free' },
            { name: 'Nomic Atlas', description: 'Tool for visualizing and interacting with massive embedding datasets.', url: 'https://atlas.nomic.ai/', image: 'https://picsum.photos/seed/nomic/600/400', dataAiHint: 'embedding visualization', pricing: 'Free' },
            { name: 'Annoy', description: 'Approximate Nearest Neighbors Oh Yeah by Spotify.', url: 'https://github.com/spotify/annoy', image: 'https://picsum.photos/seed/annoy-sem/600/400', dataAiHint: 'spotify ann', pricing: 'Free' }
        ]
    },
    {
        title: "Enterprise Search",
        icon: <Building className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Algolia', description: 'Hosted search API for websites and mobile apps.', url: 'https://www.algolia.com/', image: 'https://picsum.photos/seed/algolia-search/600/400', dataAiHint: 'search api', pricing: 'Paid' },
            { name: 'Elasticsearch', description: 'A distributed, RESTful search and analytics engine.', url: 'https://www.elastic.co/elasticsearch/', image: 'https://picsum.photos/seed/elasticsearch-search/600/400', dataAiHint: 'search engine', pricing: 'Freemium' },
            { name: 'Coveo', description: 'AI-powered relevance platform for enterprise search.', url: 'https://www.coveo.com/', image: 'https://picsum.photos/seed/coveo-ent/600/400', dataAiHint: 'relevance platform', pricing: 'Paid' },
            { name: 'Sinequa', description: 'Intelligent search platform for complex organizations.', url: 'https://www.sinequa.com/', image: 'https://picsum.photos/seed/sinequa-ent/600/400', dataAiHint: 'intelligent search', pricing: 'Paid' },
            { name: 'Lucidworks Fusion', description: 'Cloud-native search platform.', url: 'https://lucidworks.com/', image: 'https://picsum.photos/seed/lucidworks/600/400', dataAiHint: 'cloud-native search', pricing: 'Paid' },
            { name: 'Mindbreeze', description: 'Insight engine for enterprise knowledge.', url: 'https://www.mindbreeze.com/', image: 'https://picsum.photos/seed/mindbreeze/600/400', dataAiHint: 'insight engine', pricing: 'Paid' },
            { name: 'SearchUnify', description: 'Cognitive search and insights platform.', url: 'https://www.searchunify.com/', image: 'https://picsum.photos/seed/searchunify/600/400', dataAiHint: 'cognitive search', pricing: 'Paid' },
            { name: 'Funnelback', description: 'Enterprise search solution.', url: 'https://www.funnelback.com/', image: 'https://picsum.photos/seed/funnelback/600/400', dataAiHint: 'search solution', pricing: 'Paid' },
            { name: 'Yext', description: 'AI search platform for websites, apps, and workspaces.', url: 'https://www.yext.com/', image: 'https://picsum.photos/seed/yext-search/600/400', dataAiHint: 'ai search', pricing: 'Paid' },
            { name: 'Swiftype', description: 'Site search and enterprise search by Elastic.', url: 'https://swiftype.com/', image: 'https://picsum.photos/seed/swiftype/600/400', dataAiHint: 'elastic search', pricing: 'Paid' },
            { name: 'Micro Focus IDOL', description: 'Intelligent Data Operating Layer for enterprise data.', url: 'https://www.microfocus.com/en-us/products/idol-unstructured-data-analytics/overview', image: 'https://picsum.photos/seed/idol-search/600/400', dataAiHint: 'unstructured data', pricing: 'Paid' },
            { name: 'SearchBlox', description: 'Enterprise search, federation, and data integration.', url: 'https://www.searchblox.com/', image: 'https://picsum.photos/seed/searchblox/600/400', dataAiHint: 'data federation', pricing: 'Paid' },
            { name: 'IBM Watson Discovery', description: 'AI-powered search and text-analytics.', url: 'https://www.ibm.com/cloud/watson-discovery', image: 'https://picsum.photos/seed/watson-discovery/600/400', dataAiHint: 'text analytics', pricing: 'Paid' },
            { name: 'MarkLogic', description: 'A multi-model database with search capabilities.', url: 'https://www.marklogic.com/', image: 'https://picsum.photos/seed/marklogic-search/600/400', dataAiHint: 'multi-model db', pricing: 'Paid' },
            { name: 'Inbenta', description: 'Symbolic AI-based conversational platform with search.', url: 'https://www.inbenta.com/', image: 'https://picsum.photos/seed/inbenta-search/600/400', dataAiHint: 'conversational platform', pricing: 'Paid' },
            { name: 'Hawksearch', description: 'AI-powered search, recommendations, and personalization.', url: 'https://www.hawksearch.com/', image: 'https://picsum.photos/seed/hawksearch/600/400', dataAiHint: 'search personalization', pricing: 'Paid' },
            { name: 'Constructor.io', description: 'AI-first product discovery platform.', url: 'https://constructor.io/', image: 'https://picsum.photos/seed/constructor-search/600/400', dataAiHint: 'product discovery', pricing: 'Paid' },
            { name: 'Glean', description: 'AI-powered work assistant that searches across all your company\'s apps.', url: 'https://www.glean.com/', image: 'https://picsum.photos/seed/glean-search/600/400', dataAiHint: 'work assistant', pricing: 'Paid' },
            { name: 'Guru', description: 'Knowledge management solution that works in your workflow.', url: 'https://www.getguru.com/', image: 'https://picsum.photos/seed/guru-search/600/400', dataAiHint: 'knowledge management', pricing: 'Freemium' },
            { name: 'Stravito', description: 'Knowledge management for market research and insights.', url: 'https://www.stravito.com/', image: 'https://picsum.photos/seed/stravito/600/400', dataAiHint: 'market research', pricing: 'Paid' },
        ]
    },
    {
        title: "Document Search",
        icon: <FileSearch className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Humata AI', description: 'Your AI for files. Ask questions, get answers, and summarize.', url: 'https://www.humata.ai/', image: 'https://picsum.photos/seed/humataai-search/600/400', dataAiHint: 'document ai', pricing: 'Freemium' },
            { name: 'ChatPDF', description: 'Chat with any PDF to get summaries and answers.', url: 'https://www.chatpdf.com/', image: 'https://picsum.photos/seed/chatpdf-search/600/400', dataAiHint: 'pdf conversation', pricing: 'Freemium' },
            { name: 'DocuChat', description: 'AI chatbot for your documents.', url: 'https://www.docuchat.io/', image: 'https://picsum.photos/seed/docuchat/600/400', dataAiHint: 'document chatbot', pricing: 'Paid' },
            { name: 'FileGPT', description: 'Chat with your documents.', url: 'https://filegpt.io/', image: 'https://picsum.photos/seed/filegpt/600/400', dataAiHint: 'ai file reader', pricing: 'Freemium' },
            { name: 'PDF.ai', description: 'Chat with your PDF documents.', url: 'https://pdf.ai/', image: 'https://picsum.photos/seed/pdfai-search/600/400', dataAiHint: 'pdf search', pricing: 'Freemium' },
            { name: 'AskYourPDF', description: 'The best PDF AI summarizer and chatbot.', url: 'https://askyourpdf.com/', image: 'https://picsum.photos/seed/askyourpdf/600/400', dataAiHint: 'pdf summarizer', pricing: 'Freemium' },
            { name: 'Documate', description: 'AI-powered document automation.', url: 'https://documate.org/', image: 'https://picsum.photos/seed/documate/600/400', dataAiHint: 'document automation', pricing: 'Paid' },
            { name: 'Docalysis', description: 'Analyze your documents with AI.', url: 'https://docalysis.com/', image: 'https://picsum.photos/seed/docalysis/600/400', dataAiHint: 'document analysis', pricing: 'Freemium' },
            { name: 'Paperlee', description: 'Read papers and documents faster.', url: 'https://www.paperlee.com/', image: 'https://picsum.photos/seed/paperlee/600/400', dataAiHint: 'fast reading', pricing: 'Paid' },
            { name: 'Unriddle', description: 'AI research assistant for any document.', url: 'https://www.unriddle.ai/', image: 'https://picsum.photos/seed/unriddle/600/400', dataAiHint: 'research assistant', pricing: 'Freemium' },
            { name: 'Memex', description: 'A privacy-first browser extension to annotate and organize your online research.', url: 'https://getmemex.com/', image: 'https://picsum.photos/seed/memex-doc/600/400', dataAiHint: 'web annotation', pricing: 'Free' },
            { name: 'DevonThink', description: 'A document management system for Mac and iOS.', url: 'https://www.devontechnologies.com/apps/devonthink', image: 'https://picsum.photos/seed/devonthink/600/400', dataAiHint: 'mac document', pricing: 'Paid' },
            { name: 'Pinpoint by Google', description: 'Explore and analyze large collections of documents.', url: 'https://journaliststudio.google.com/pinpoint/', image: 'https://picsum.photos/seed/pinpoint/600/400', dataAiHint: 'document analysis', pricing: 'Free' },
            { name: 'Nuclino', description: 'A modern, simple, and fast wiki for teams.', url: 'https://www.nuclino.com/', image: 'https://picsum.photos/seed/nuclino-doc/600/400', dataAiHint: 'team wiki', pricing: 'Freemium' },
            { name: 'Slite', description: 'Knowledge base and async communication for teams.', url: 'https://slite.com/', image: 'https://picsum.photos/seed/slite-doc/600/400', dataAiHint: 'knowledge base', pricing: 'Freemium' },
            { name: 'Alfresco', description: 'Open-source content management and process automation.', url: 'https://www.alfresco.com/', image: 'https://picsum.photos/seed/alfresco-doc/600/400', dataAiHint: 'content management', pricing: 'Freemium' },
            { name: 'M-Files', description: 'Intelligent information management.', url: 'https://www.m-files.com/', image: 'https://picsum.photos/seed/m-files/600/400', dataAiHint: 'information management', pricing: 'Paid' },
            { name: 'DocuWare', description: 'Document management & workflow automation.', url: 'https://www.docuware.com/', image: 'https://picsum.photos/seed/docuware/600/400', dataAiHint: 'workflow automation', pricing: 'Paid' },
            { name: 'OpenKM', description: 'Open source document management system.', url: 'https://www.openkm.com/', image: 'https://picsum.photos/seed/openkm/600/400', dataAiHint: 'open source doc', pricing: 'Free' },
            { name: 'Nuxeo', description: 'A cloud-native content services platform.', url: 'https://www.nuxeo.com/', image: 'https://picsum.photos/seed/nuxeo/600/400', dataAiHint: 'content services', pricing: 'Paid' }
        ]
    },
    {
        title: "Website Search",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Algolia', description: 'Add a powerful search to your website.', url: 'https://www.algolia.com/', image: 'https://picsum.photos/seed/algolia-site/600/400', dataAiHint: 'site search', pricing: 'Paid' },
            { name: 'Google Programmable Search Engine', description: 'Create a search engine for your website.', url: 'https://programmablesearchengine.google.com/', image: 'https://picsum.photos/seed/g-programmable/600/400', dataAiHint: 'custom search', pricing: 'Freemium' },
            { name: 'Swiftype', description: 'Add search to your website with ease.', url: 'https://swiftype.com/', image: 'https://picsum.photos/seed/swiftype-site/600/400', dataAiHint: 'elastic search', pricing: 'Paid' },
            { name: 'Searchspring', description: 'AI-driven search for e-commerce sites.', url: 'https://searchspring.com/', image: 'https://picsum.photos/seed/searchspring-site/600/400', dataAiHint: 'ecommerce search', pricing: 'Paid' },
            { name: 'AddSearch', description: 'Site search for websites of all sizes.', url: 'https://www.addsearch.com/', image: 'https://picsum.photos/seed/addsearch/600/400', dataAiHint: 'website search', pricing: 'Paid' },
            { name: 'Cludo', description: 'Intelligent site search.', url: 'https://www.cludo.com/', image: 'https://picsum.photos/seed/cludo/600/400', dataAiHint: 'intelligent search', pricing: 'Paid' },
            { name: 'Amazon CloudSearch', description: 'A managed search service in the AWS Cloud.', url: 'https://aws.amazon.com/cloudsearch/', image: 'https://picsum.photos/seed/cloudsearch/600/400', dataAiHint: 'aws search', pricing: 'Paid' },
            { name: 'Azure Cognitive Search', description: 'AI-powered search service for mobile and web app development.', url: 'https://azure.microsoft.com/en-us/products/search/', image: 'https://picsum.photos/seed/azure-search/600/400', dataAiHint: 'cognitive search', pricing: 'Paid' },
            { name: 'Elastic Site Search', description: 'Add search to your website with a pre-tuned engine.', url: 'https://www.elastic.co/site-search', image: 'https://picsum.photos/seed/elastic-site/600/400', dataAiHint: 'pre-tuned engine', pricing: 'Paid' },
            { name: 'Search.io', description: 'The world\'s most powerful search and discovery platform.', url: 'https://www.search.io/', image: 'https://picsum.photos/seed/searchio-site/600/400', dataAiHint: 'discovery platform', pricing: 'Paid' },
            { name: 'Jetboost', description: 'Real-time search & filtering for Webflow.', url: 'https://www.jetboost.io/', image: 'https://picsum.photos/seed/jetboost/600/400', dataAiHint: 'webflow search', pricing: 'Paid' },
            { name: 'Tastewp', description: 'WordPress staging with one click.', url: 'https://tastewp.com/', image: 'https://picsum.photos/seed/tastewp/600/400', dataAiHint: 'wordpress staging', pricing: 'Free' },
            { name: 'SearchWP', description: 'A powerful custom search plugin for WordPress.', url: 'https://searchwp.com/', image: 'https://picsum.photos/seed/searchwp/600/400', dataAiHint: 'wordpress plugin', pricing: 'Paid' },
            { name: 'Relevanssi', description: 'A better search for your WordPress site.', url: 'https://www.relevanssi.com/', image: 'https://picsum.photos/seed/relevanssi/600/400', dataAiHint: 'wordpress search', pricing: 'Freemium' },
            { name: 'Ivory Search', description: 'Advanced WordPress search plugin.', url: 'https://ivorysearch.com/', image: 'https://picsum.photos/seed/ivorysearch/600/400', dataAiHint: 'advanced search', pricing: 'Freemium' },
            { name: 'Site Search 360', description: 'A smart search solution for any website.', url: 'https://sitesearch360.com/', image: 'https://picsum.photos/seed/sitesearch360/600/400', dataAiHint: 'smart search', pricing: 'Freemium' },
            { name: 'Doofinder', description: 'On-site search engine for e-commerce.', url: 'https://www.doofinder.com/', image: 'https://picsum.photos/seed/doofinder/600/400', dataAiHint: 'ecommerce search', pricing: 'Paid' },
            { name: 'Luigi’s Box', description: 'Search and product discovery for e-commerce.', url: 'https://luigisbox.com/', image: 'https://picsum.photos/seed/luigisbox/600/400', dataAiHint: 'product discovery', pricing: 'Paid' },
            { name: 'Expertrec', description: 'Custom search engine for your website.', url: 'https://www.expertrec.com/', image: 'https://picsum.photos/seed/expertrec/600/400', dataAiHint: 'custom engine', pricing: 'Paid' },
            { name: 'Sooqr', description: 'The most relevant and converting site search.', url: 'https://www.sooqr.com/', image: 'https://picsum.photos/seed/sooqr/600/400', dataAiHint: 'converting search', pricing: 'Paid' }
        ]
    },
    {
        title: "Image Search AI",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Lens', description: 'Search what you see.', url: 'https://lens.google/', image: 'https://picsum.photos/seed/google-lens-search/600/400', dataAiHint: 'visual search', pricing: 'Free' },
            { name: 'Pinterest Lens', description: 'Visual discovery tool for finding ideas on Pinterest.', url: 'https://help.pinterest.com/en/article/pinterest-lens', image: 'https://picsum.photos/seed/pinterest-lens/600/400', dataAiHint: 'idea discovery', pricing: 'Free' },
            { name: 'TinEye', description: 'Reverse image search.', url: 'https://tineye.com/', image: 'https://picsum.photos/seed/tineye/600/400', dataAiHint: 'reverse search', pricing: 'Free' },
            { name: 'Yandex Images', description: 'Image search and reverse image search.', url: 'https://yandex.com/images/', image: 'https://picsum.photos/seed/yandex-img/600/400', dataAiHint: 'image search', pricing: 'Free' },
            { name: 'Bing Visual Search', description: 'Search the web using an image.', url: 'https://www.bing.com/visualsearch', image: 'https://picsum.photos/seed/bing-visual/600/400', dataAiHint: 'bing search', pricing: 'Free' },
            { name: 'Adobe Stock Visual Search', description: 'Find similar stock images visually.', url: 'https://stock.adobe.com/', image: 'https://picsum.photos/seed/adobe-visual/600/400', dataAiHint: 'stock images', pricing: 'Paid' },
            { name: 'Shutterstock Visual Search', description: 'Search by image to find similar content.', url: 'https://www.shutterstock.com/search/image', image: 'https://picsum.photos/seed/shutterstock-visual/600/400', dataAiHint: 'similar content', pricing: 'Paid' },
            { name: 'Getty Images Visual Search', description: 'Find similar images and videos.', url: 'https://www.gettyimages.com/solutions/visual-search', image: 'https://picsum.photos/seed/getty-visual/600/400', dataAiHint: 'similar videos', pricing: 'Paid' },
            { name: 'Amazon Rekognition', description: 'Automate your image and video analysis with ML.', url: 'https://aws.amazon.com/rekognition/', image: 'https://picsum.photos/seed/rekognition/600/400', dataAiHint: 'image analysis', pricing: 'Paid' },
            { name: 'Google Cloud Vision AI', description: 'Derive insights from your images.', url: 'https://cloud.google.com/vision', image: 'https://picsum.photos/seed/gvision-img/600/400', dataAiHint: 'image insights', pricing: 'Paid' },
            { name: 'Clarifai', description: 'AI platform for unstructured data.', url: 'https://www.clarifai.com/', image: 'https://picsum.photos/seed/clarifai-img/600/400', dataAiHint: 'computer vision', pricing: 'Paid' },
            { name: 'Imagga', description: 'Image recognition API.', url: 'https://imagga.com/', image: 'https://picsum.photos/seed/imagga/600/400', dataAiHint: 'image recognition', pricing: 'Paid' },
            { name: 'CamFind', description: 'Mobile visual search engine.', url: 'https://camfindapp.com/', image: 'https://picsum.photos/seed/camfind/600/400', dataAiHint: 'mobile visual', pricing: 'Free' },
            { name: 'Lexica', description: 'The Stable Diffusion search engine.', url: 'https://lexica.art/', image: 'https://picsum.photos/seed/lexica-img/600/400', dataAiHint: 'prompt search', pricing: 'Freemium' },
            { name: 'Same Energy', description: 'Visual search engine.', url: 'https://same.energy/', image: 'https://picsum.photos/seed/same-energy/600/400', dataAiHint: 'artistic styles', pricing: 'Free' },
            { name: 'PimEyes', description: 'Face recognition search engine.', url: 'https://pimeyes.com/', image: 'https://picsum.photos/seed/pimeyes/600/400', dataAiHint: 'face recognition', pricing: 'Paid' },
            { name: 'Karma Decay', description: 'Reverse image search for Reddit.', url: 'http://karmadecay.com/', image: 'https://picsum.photos/seed/karmadecay/600/400', dataAiHint: 'reddit search', pricing: 'Free' },
            { name: 'SauceNAO', description: 'Reverse image search for anime and artists.', url: 'https://saucenao.com/', image: 'https://picsum.photos/seed/saucenao/600/400', dataAiHint: 'anime search', pricing: 'Free' },
            { name: 'IQDB', description: 'Multi-service image search.', url: 'https://iqdb.org/', image: 'https://picsum.photos/seed/iqdb/600/400', dataAiHint: 'multi-service', pricing: 'Free' },
            { name: 'Picular', description: 'Google, but for colors.', url: 'https://picular.co/', image: 'https://picsum.photos/seed/picular/600/400', dataAiHint: 'color search', pricing: 'Free' }
        ]
    },
    {
        title: "Video Search AI",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Twelve Labs', description: 'Multimodal AI for understanding video.', url: 'https://twelvelabs.io/', image: 'https://picsum.photos/seed/twelvelabs-vid/600/400', dataAiHint: 'video understanding', pricing: 'Paid' },
            { name: 'VFRAME', description: 'Open source computer vision for video analysis.', url: 'https://vframe.io/', image: 'https://picsum.photos/seed/vframe/600/400', dataAiHint: 'video analysis', pricing: 'Free' },
            { name: 'Valossa', description: 'AI for video recognition and intelligence.', url: 'https://valossa.com/', image: 'https://picsum.photos/seed/valossa/600/400', dataAiHint: 'video recognition', pricing: 'Paid' },
            { name: 'Amazon Rekognition Video', description: 'Automated video analysis.', url: 'https://aws.amazon.com/rekognition/video/', image: 'https://picsum.photos/seed/rekognition-vid/600/400', dataAiHint: 'aws video', pricing: 'Paid' },
            { name: 'Azure AI Video Indexer', description: 'Extract insights from your videos.', url: 'https://azure.microsoft.com/en-us/products/ai-video-indexer/', image: 'https://picsum.photos/seed/azure-video/600/400', dataAiHint: 'video insights', pricing: 'Paid' },
            { name: 'Google Cloud Video AI', description: 'Video analysis with machine learning.', url: 'https://cloud.google.com/video-intelligence', image: 'https://picsum.photos/seed/gvision-vid/600/400', dataAiHint: 'ml video', pricing: 'Paid' },
            { name: 'Clarifai', description: 'AI platform for unstructured video data.', url: 'https://www.clarifai.com/', image: 'https://picsum.photos/seed/clarifai-vid/600/400', dataAiHint: 'unstructured data', pricing: 'Paid' },
            { name: 'Mobius Labs', description: 'Computer vision solutions for businesses.', url: 'https://www.mobiuslabs.com/', image: 'https://picsum.photos/seed/mobius-vid/600/400', dataAiHint: 'computer vision', pricing: 'Paid' },
            { name: 'Viisights', description: 'Behavioral recognition for real-time video intelligence.', url: 'https://www.viisights.com/', image: 'https://picsum.photos/seed/viisights/600/400', dataAiHint: 'behavioral recognition', pricing: 'Paid' },
            { name: 'Kaltura', description: 'Video platform with search and discovery features.', url: 'https://corp.kaltura.com/', image: 'https://picsum.photos/seed/kaltura/600/400', dataAiHint: 'video platform', pricing: 'Paid' },
            { name: 'Panopto', description: 'Video management system with inside-video search.', url: 'https://www.panopto.com/', image: 'https://picsum.photos/seed/panopto/600/400', dataAiHint: 'video management', pricing: 'Paid' },
            { name: 'YuJa', description: 'Enterprise video platform with smart search.', url: 'https://www.yuja.com/', image: 'https://picsum.photos/seed/yuja/600/400', dataAiHint: 'enterprise video', pricing: 'Paid' },
            { name: 'AnyClip', description: 'The Visual Intelligence Company.', url: 'https://anyclip.com/', image: 'https://picsum.photos/seed/anyclip/600/400', dataAiHint: 'visual intelligence', pricing: 'Paid' },
            { name: 'Veritone', description: 'Enterprise AI platform.', url: 'https://www.veritone.com/', image: 'https://picsum.photos/seed/veritone/600/400', dataAiHint: 'enterprise ai', pricing: 'Paid' },
            { name: 'Hive', description: 'Cloud-based AI models for content understanding.', url: 'https://thehive.ai/', image: 'https://picsum.photos/seed/hive-vid/600/400', dataAiHint: 'content understanding', pricing: 'Paid' },
            { name: 'Marvin', description: 'AI-powered qualitative data analysis.', url: 'https://www.heymarvin.com/', image: 'https://picsum.photos/seed/marvin-vid/600/400', dataAiHint: 'qualitative data', pricing: 'Paid' },
            { name: 'Reduct.video', description: 'Transcribe, search, and edit your video footage.', url: 'https://reduct.video/', image: 'https://picsum.photos/seed/reduct-vid/600/400', dataAiHint: 'text-based video', pricing: 'Paid' },
            { name: 'Simon Says', description: 'AI transcription and video assembly.', url: 'https://www.simonsays.ai/', image: 'https://picsum.photos/seed/simonsays/600/400', dataAiHint: 'video assembly', pricing: 'Paid' },
            { name: 'Trint', description: 'AI audio transcription for video content.', url: 'https://trint.com/', image: 'https://picsum.photos/seed/trint-vid/600/400', dataAiHint: 'audio transcription', pricing: 'Paid' },
            { name: 'Otter.ai', description: 'Transcribe meetings and videos.', url: 'https://otter.ai/', image: 'https://picsum.photos/seed/otter-vid/600/400', dataAiHint: 'meeting transcription', pricing: 'Freemium' }
        ]
    },
    {
        title: "Voice Search",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Assistant', description: 'Your personal Google, always ready to help.', url: 'https://assistant.google.com/', image: 'https://picsum.photos/seed/google-assistant-search/600/400', dataAiHint: 'voice assistant', pricing: 'Free' },
            { name: 'Amazon Alexa', description: 'The voice service that powers Echo devices.', url: 'https://www.amazon.com/alexa', image: 'https://picsum.photos/seed/alexa-search/600/400', dataAiHint: 'smart speaker', pricing: 'Free' },
            { name: 'Siri', description: 'Apple\'s intelligent assistant.', url: 'https://www.apple.com/siri/', image: 'https://picsum.photos/seed/siri-search/600/400', dataAiHint: 'apple assistant', pricing: 'Free' },
            { name: 'Microsoft Cortana', description: 'Your personal productivity assistant.', url: 'https://www.microsoft.com/en-us/cortana', image: 'https://picsum.photos/seed/cortana-search/600/400', dataAiHint: 'productivity assistant', pricing: 'Free' },
            { name: 'SoundHound', description: 'A faster and smarter voice assistant.', url: 'https://soundhound.com/hound/', image: 'https://picsum.photos/seed/hound-search/600/400', dataAiHint: 'natural language', pricing: 'Free' },
            { name: 'Google Voice Search', description: 'Search Google with your voice.', url: 'https://www.google.com/', image: 'https://picsum.photos/seed/gvoice-search/600/400', dataAiHint: 'google search', pricing: 'Free' },
            { name: 'Houndify', description: 'Voice AI platform.', url: 'https://www.houndify.com/', image: 'https://picsum.photos/seed/houndify/600/400', dataAiHint: 'voice ai', pricing: 'Paid' },
            { name: 'Picovoice', description: 'On-device voice recognition.', url: 'https://picovoice.ai/', image: 'https://picsum.photos/seed/picovoice/600/400', dataAiHint: 'edge ai', pricing: 'Freemium' },
            { name: 'Speechly', description: 'Voice interface API for web and mobile.', url: 'https://www.speechly.com/', image: 'https://picsum.photos/seed/speechly/600/400', dataAiHint: 'voice interface', pricing: 'Freemium' },
            { name: 'Alan AI', description: 'Add a voice interface to any application.', url: 'https://alan.app/', image: 'https://picsum.photos/seed/alan-ai/600/400', dataAiHint: 'app voice', pricing: 'Paid' },
            { name: 'Vocol.ai', description: 'Voice collaboration platform.', url: 'https://www.vocol.ai/', image: 'https://picsum.photos/seed/vocol-ai/600/400', dataAiHint: 'voice collaboration', pricing: 'Paid' },
            { name: 'Mycroft', description: 'The open source voice assistant.', url: 'https://mycroft.ai/', image: 'https://picsum.photos/seed/mycroft-ai/600/400', dataAiHint: 'open source', pricing: 'Free' },
            { name: 'Wit.ai', description: 'Natural language for developers.', url: 'https://wit.ai/', image: 'https://picsum.photos/seed/wit-ai/600/400', dataAiHint: 'nlp platform', pricing: 'Free' },
            { name: 'Dragon by Nuance', description: 'Speech recognition software.', url: 'https://www.nuance.com/dragon.html', image: 'https://picsum.photos/seed/dragon-nuance/600/400', dataAiHint: 'dictation software', pricing: 'Paid' },
            { name: 'AssemblyAI', description: 'AI models for speech-to-text and more.', url: 'https://www.assemblyai.com/', image: 'https://picsum.photos/seed/assemblyai/600/400', dataAiHint: 'speech-to-text api', pricing: 'Paid' },
            { name: 'Deepgram', description: 'Speech-to-text API for enterprises.', url: 'https://deepgram.com/', image: 'https://picsum.photos/seed/deepgram/600/400', dataAiHint: 'enterprise stt', pricing: 'Paid' },
            { name: 'Rev.ai', description: 'Automated speech-to-text.', url: 'https://www.rev.ai/', image: 'https://picsum.photos/seed/rev-ai/600/400', dataAiHint: 'speech recognition', pricing: 'Paid' },
            { name: 'Voicera', description: 'AI assistant for your meetings.', url: 'https://www.voicera.com/', image: 'https://picsum.photos/seed/voicera-search/600/400', dataAiHint: 'meeting assistant', pricing: 'Paid' },
            { name: 'Bixby', description: 'Samsung\'s intelligent assistant.', url: 'https://www.samsung.com/global/galaxy/apps/bixby/', image: 'https://picsum.photos/seed/bixby-search/600/400', dataAiHint: 'samsung assistant', pricing: 'Free' },
            { name: 'Yandex Alice', description: 'Russian-speaking intelligent assistant.', url: 'https://yandex.com/alice', image: 'https://picsum.photos/seed/yandex-alice/600/400', dataAiHint: 'russian assistant', pricing: 'Free' },
        ]
    },
    {
        title: "Code Search AI",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Sourcegraph', description: 'Understand and fix code faster with code search.', url: 'https://about.sourcegraph.com/', image: 'https://picsum.photos/seed/sourcegraph-search/600/400', dataAiHint: 'code search', pricing: 'Freemium' },
            { name: 'Phind', description: 'The AI search engine for developers.', url: 'https://www.phind.com/', image: 'https://picsum.photos/seed/phind-search/600/400', dataAiHint: 'developer search', pricing: 'Free' },
            { name: 'GitHub Code Search', description: 'Search code on GitHub.', url: 'https://github.com/search', image: 'https://picsum.photos/seed/gh-code-search/600/400', dataAiHint: 'github search', pricing: 'Free' },
            { name: 'Grep.app', description: 'Search across a half million git repositories.', url: 'https://grep.app/', image: 'https://picsum.photos/seed/grep-app/600/400', dataAiHint: 'git search', pricing: 'Free' },
            { name: 'Blackbox AI', description: 'AI code generation, explanation, and search.', url: 'https://www.blackbox.ai/', image: 'https://picsum.photos/seed/blackbox-search/600/400', dataAiHint: 'ai code search', pricing: 'Freemium' },
            { name: 'You.com', description: 'AI chatbot and search engine with code search capabilities.', url: 'https://you.com/', image: 'https://picsum.photos/seed/youcom-code/600/400', dataAiHint: 'code search', pricing: 'Free' },
            { name: 'Tabnine', description: 'AI assistant that helps you write code faster.', url: 'https://www.tabnine.com/', image: 'https://picsum.photos/seed/tabnine-search/600/400', dataAiHint: 'code completion', pricing: 'Freemium' },
            { name: 'CodeGrep', description: 'Semantic code search for teams.', url: 'https://www.codegrep.com/', image: 'https://picsum.photos/seed/codegrep-search/600/400', dataAiHint: 'semantic search', pricing: 'Paid' },
            { name: 'Codeask', description: 'A code search engine for your codebase.', url: 'https://www.codeask.io/', image: 'https://picsum.photos/seed/codeask/600/400', dataAiHint: 'codebase search', pricing: 'Paid' },
            { name: 'Buildt', description: 'AI code search for your entire codebase.', url: 'https://www.buildt.ai/', image: 'https://picsum.photos/seed/buildt-search/600/400', dataAiHint: 'ai code search', pricing: 'Freemium' },
            { name: 'OpenGrok', description: 'A fast and usable source code search and cross reference engine.', url: 'https://oracle.github.io/opengrok/', image: 'https://picsum.photos/seed/opengrok/600/400', dataAiHint: 'source code engine', pricing: 'Free' },
            { name: 'Livegrep', description: 'A fast, client-side code search.', url: 'https://livegrep.com/', image: 'https://picsum.photos/seed/livegrep-search/600/400', dataAiHint: 'client-side search', pricing: 'Free' },
            { name: 'Snyk Code', description: 'Static application security testing that finds and fixes vulnerabilities.', url: 'https://snyk.io/product/snyk-code/', image: 'https://picsum.photos/seed/snyk-code/600/400', dataAiHint: 'sast', pricing: 'Freemium' },
            { name: 'SonarCloud', description: 'Cloud-based code quality and security.', url: 'https://sonarcloud.io/', image: 'https://picsum.photos/seed/sonarcloud-search/600/400', dataAiHint: 'code quality', pricing: 'Freemium' },
            { name: 'Krugle', description: 'Code search for enterprises.', url: 'https://www.krugle.com/', image: 'https://picsum.photos/seed/krugle/600/400', dataAiHint: 'enterprise code', pricing: 'Paid' },
            { name: 'CodeSee', description: 'Visualize your codebase.', url: 'https://www.codesee.io/', image: 'https://picsum.photos/seed/codesee-search/600/400', dataAiHint: 'code visualization', pricing: 'Freemium' },
            { name: 'CodeFactor', description: 'Automated code review for GitHub and BitBucket.', url: 'https://www.codefactor.io/', image: 'https://picsum.photos/seed/codefactor/600/400', dataAiHint: 'code review', pricing: 'Freemium' },
            { name: 'Code Climate', description: 'Automated code review and quality analytics.', url: 'https://codeclimate.com/', image: 'https://picsum.photos/seed/codeclimate/600/400', dataAiHint: 'quality analytics', pricing: 'Paid' },
            { name: 'Zoekt', description: 'A fast, trigram-based code search tool from Google.', url: 'https://github.com/google/zoekt', image: 'https://picsum.photos/seed/zoekt/600/400', dataAiHint: 'trigram search', pricing: 'Free' },
            { name: 'Cody by Sourcegraph', description: 'AI coding assistant that lives in your editor.', url: 'https://sourcegraph.com/cody', image: 'https://picsum.photos/seed/cody-sourcegraph/600/400', dataAiHint: 'ai coding assistant', pricing: 'Freemium' }
        ]
    },
    {
        title: "Academic Search",
        icon: <GraduationCap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Scholar', description: 'Broadly search for scholarly literature.', url: 'https://scholar.google.com/', image: 'https://picsum.photos/seed/googlescholar-acad/600/400', dataAiHint: 'academic search', pricing: 'Free' },
            { name: 'Semantic Scholar', description: 'AI-powered research tool for scientific literature.', url: 'https://www.semanticscholar.org/', image: 'https://picsum.photos/seed/semanticscholar-acad/600/400', dataAiHint: 'scientific literature', pricing: 'Free' },
            { name: 'Elicit', description: 'The AI Research Assistant.', url: 'https://elicit.org/', image: 'https://picsum.photos/seed/elicit-acad/600/400', dataAiHint: 'research assistant', pricing: 'Freemium' },
            { name: 'Connected Papers', description: 'A visual tool to explore academic papers.', url: 'https://www.connectedpapers.com/', image: 'https://picsum.photos/seed/connectedpapers-acad/600/400', dataAiHint: 'visual explorer', pricing: 'Free' },
            { name: 'Research Rabbit', description: 'Your personal research assistant.', url: 'https://www.researchrabbit.ai/', image: 'https://picsum.photos/seed/researchrabbit-acad/600/400', dataAiHint: 'literature map', pricing: 'Free' },
            { name: 'Scite', description: 'See how research has been cited.', url: 'https://scite.ai/', image: 'https://picsum.photos/seed/scite-acad/600/400', dataAiHint: 'smart citations', pricing: 'Freemium' },
            { name: 'PubMed', description: 'Biomedical literature from MEDLINE.', url: 'https://pubmed.ncbi.nlm.nih.gov/', image: 'https://picsum.photos/seed/pubmed-acad/600/400', dataAiHint: 'medical literature', pricing: 'Free' },
            { name: 'JSTOR', description: 'A digital library of academic journals, books, and primary sources.', url: 'https://www.jstor.org/', image: 'https://picsum.photos/seed/jstor-acad/600/400', dataAiHint: 'digital library', pricing: 'Paid' },
            { name: 'arXiv', description: 'Open-access archive for scholarly articles.', url: 'https://arxiv.org/', image: 'https://picsum.photos/seed/arxiv-acad/600/400', dataAiHint: 'research preprints', pricing: 'Free' },
            { name: 'Scopus', description: 'A large abstract and citation database.', url: 'https://www.scopus.com/', image: 'https://picsum.photos/seed/scopus-acad/600/400', dataAiHint: 'citation database', pricing: 'Paid' },
            { name: 'Web of Science', description: 'Global citation database.', url: 'https://www.webofscience.com/', image: 'https://picsum.photos/seed/webofscience-acad/600/400', dataAiHint: 'research database', pricing: 'Paid' },
            { name: 'Dimensions', description: 'The world’s largest linked research information dataset.', url: 'https://www.dimensions.ai/', image: 'https://picsum.photos/seed/dimensions-acad/600/400', dataAiHint: 'linked research', pricing: 'Freemium' },
            { name: 'BASE', description: 'Search engine for academic open access web resources.', url: 'https://www.base-search.net/', image: 'https://picsum.photos/seed/base-acad/600/400', dataAiHint: 'open access', pricing: 'Free' },
            { name: 'CORE', description: 'The world’s largest collection of open access research papers.', url: 'https://core.ac.uk/', image: 'https://picsum.photos/seed/core-acad/600/400', dataAiHint: 'research papers', pricing: 'Free' },
            { name: 'RefSeek', description: 'Academic search engine for students and researchers.', url: 'https://www.refseek.com/', image: 'https://picsum.photos/seed/refseek-acad/600/400', dataAiHint: 'student search', pricing: 'Free' },
            { name: 'ERIC', description: 'An online library of education research and information.', url: 'https://eric.ed.gov/', image: 'https://picsum.photos/seed/eric-acad/600/400', dataAiHint: 'education research', pricing: 'Free' },
            { name: 'OpenAlex', description: 'A free and open catalog of the global research system.', url: 'https://openalex.org/', image: 'https://picsum.photos/seed/openalex-acad/600/400', dataAiHint: 'research catalog', pricing: 'Free' },
            { name: 'SSRN', description: 'Preprint server for social sciences and humanities.', url: 'https://www.ssrn.com/', image: 'https://picsum.photos/seed/ssrn-acad/600/400', dataAiHint: 'social science', pricing: 'Free' },
            { name: 'Academia.edu', description: 'Share and discover research.', url: 'https://www.academia.edu/', image: 'https://picsum.photos/seed/academiaedu-acad/600/400', dataAiHint: 'share research', pricing: 'Freemium' },
            { name: 'ResearchGate', description: 'The professional network for scientists and researchers.', url: 'https://www.researchgate.net/', image: 'https://picsum.photos/seed/researchgate-acad/600/400', dataAiHint: 'scientist network', pricing: 'Free' },
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
            { name: 'Perplexity AI', description: 'An answer engine for discovering and sharing knowledge.', url: 'https://www.perplexity.ai/', image: 'https://picsum.photos/seed/perplexity-convo/600/400', dataAiHint: 'answer engine', pricing: 'Freemium' },
            { name: 'ChatGPT', description: 'Conversational AI that can search the web.', url: 'https://chat.openai.com/', image: 'https://picsum.photos/seed/chatgpt-convo/600/400', dataAiHint: 'ai chat', pricing: 'Freemium' },
            { name: 'Google Gemini', description: 'Google\'s conversational AI with search capabilities.', url: 'https://gemini.google.com/', image: 'https://picsum.photos/seed/gemini-convo/600/400', dataAiHint: 'google ai', pricing: 'Free' },
            { name: 'You.com', description: 'AI chatbot and search engine.', url: 'https://you.com/', image: 'https://picsum.photos/seed/youcom-convo/600/400', dataAiHint: 'search engine', pricing: 'Free' },
            { name: 'Phind', description: 'The AI search engine for developers.', url: 'https://www.phind.com/', image: 'https://picsum.photos/seed/phind-convo/600/400', dataAiHint: 'developer search', pricing: 'Free' },
            { name: 'Andi', description: 'Search for the next generation.', url: 'https://andisearch.com/', image: 'https://picsum.photos/seed/andi-search/600/400', dataAiHint: 'generative ai', pricing: 'Free' },
            { name: 'Neeva', description: 'Ad-free, private search (Acquired by Snowflake).', url: 'https://neeva.com/', image: 'https://picsum.photos/seed/neeva-search/600/400', dataAiHint: 'private search', pricing: 'Free' },
            { name: 'Yep.com', description: 'A search engine that rewards creators.', url: 'https://yep.com/', image: 'https://picsum.photos/seed/yep-search/600/400', dataAiHint: 'creator economy', pricing: 'Free' },
            { name: 'Komo Search', description: 'Fast, private, and ad-free AI search.', url: 'https://komo.ai/', image: 'https://picsum.photos/seed/komo-search/600/400', dataAiHint: 'private ai search', pricing: 'Free' },
            { name: 'Exa', description: 'Search the web with a new kind of model.', url: 'https://exa.ai/', image: 'https://picsum.photos/seed/exa-search/600/400', dataAiHint: 'ai search model', pricing: 'Paid' },
            { name: 'Metaphor', description: 'A new kind of search engine.', url: 'https://metaphor.systems/', image: 'https://picsum.photos/seed/metaphor-search/600/400', dataAiHint: 'intelligent search', pricing: 'Free' },
            { name: 'Poe by Quora', description: 'Fast, helpful AI chat.', url: 'https://poe.com/', image: 'https://picsum.photos/seed/poe-convo/600/400', dataAiHint: 'ai chatbot', pricing: 'Freemium' },
            { name: 'Bing Chat', description: 'Now Microsoft Copilot. AI-powered copilot for the web.', url: 'https://copilot.microsoft.com/', image: 'https://picsum.photos/seed/bing-chat/600/400', dataAiHint: 'web copilot', pricing: 'Free' },
            { name: 'Brave Search', description: 'Private, independent search engine.', url: 'https://search.brave.com/', image: 'https://picsum.photos/seed/brave-search/600/400', dataAiHint: 'privacy search', pricing: 'Free' },
            { name: 'Waldo', description: 'AI-powered search for your internal knowledge.', url: 'https://www.waldo.com/', image: 'https://picsum.photos/seed/waldo-search/600/400', dataAiHint: 'internal knowledge', pricing: 'Paid' },
            { name: 'Zoe', description: 'Your personal AI travel assistant.', url: 'https://zoe.com/', image: 'https://picsum.photos/seed/zoe-search/600/400', dataAiHint: 'travel assistant', pricing: 'Free' },
            { name: 'Aide', description: 'Conversational search for sales teams.', url: 'https://aide.app/', image: 'https://picsum.photos/seed/aide-search/600/400', dataAiHint: 'sales teams', pricing: 'Paid' },
            { name: 'Leap', description: 'AI-powered search for enterprise applications.', url: 'https://www.leap.ai/', image: 'https://picsum.photos/seed/leap-search/600/400', dataAiHint: 'enterprise search', pricing: 'Paid' },
            { name: 'Myriad', description: 'Search and organize your digital world.', url: 'https://www.myriad.com/', image: 'https://picsum.photos/seed/myriad-search/600/400', dataAiHint: 'digital organization', pricing: 'Freemium' },
            { name: 'Awell', description: 'Care pathway automation for clinical teams.', url: 'https://www.awell.health/', image: 'https://picsum.photos/seed/awell-search/600/400', dataAiHint: 'clinical teams', pricing: 'Paid' }
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
                image: `https://picsum.photos/seed/${category.title.toLowerCase().replace(/\s+/g, '-')}-${i}/600/400`,
                dataAiHint: 'ai search',
                pricing: i % 3 === 0 ? 'Free' : (i % 2 === 0 ? 'Freemium' : 'Paid'),
            });
        }
    }
});
