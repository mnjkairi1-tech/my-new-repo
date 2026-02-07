

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

export const aiSearchToolData: ToolCategory[] = [
    {
        title: "Semantic Search",
        icon: "BrainCircuit",
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
        ]
    },
    {
        title: "Enterprise Search",
        icon: "Building",
        tools: [
            { name: 'Algolia', description: 'Hosted search API for websites and mobile apps.', url: 'https://www.algolia.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=algolia.com', dataAiHint: 'search api', pricing: 'Paid' },
            { name: 'Elasticsearch', description: 'A distributed, RESTful search and analytics engine.', url: 'https://www.elastic.co/elasticsearch/', image: 'https://www.google.com/s2/favicons?sz=128&domain=elastic.co', dataAiHint: 'search engine', pricing: 'Freemium' },
            { name: 'Coveo', description: 'AI-powered relevance platform for enterprise search.', url: 'https://www.coveo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=coveo.com', dataAiHint: 'relevance platform', pricing: 'Paid' },
            { name: 'Sinequa', description: 'Intelligent search platform for complex organizations.', url: 'https://www.sinequa.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sinequa.com', dataAiHint: 'intelligent search', pricing: 'Paid' },
            { name: 'Lucidworks Fusion', description: 'Cloud-native search platform.', url: 'https://lucidworks.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lucidworks.com', dataAiHint: 'cloud-native search', pricing: 'Paid' },
        ]
    },
    {
        title: "Document Search",
        icon: "FileSearch",
        tools: [
            { name: 'Humata AI', description: 'Your AI for files. Ask questions, get answers, and summarize.', url: 'https://www.humata.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=humata.ai', dataAiHint: 'document ai', pricing: 'Freemium' },
            { name: 'ChatPDF', description: 'Chat with any PDF to get summaries and answers.', url: 'https://www.chatpdf.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=chatpdf.com', dataAiHint: 'pdf conversation', pricing: 'Freemium' },
            { name: 'DocuChat', description: 'AI chatbot for your documents.', url: 'https://www.docuchat.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=docuchat.io', dataAiHint: 'document chatbot', pricing: 'Paid' },
            { name: 'FileGPT', description: 'Chat with your documents.', url: 'https://filegpt.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=filegpt.io', dataAiHint: 'ai file reader', pricing: 'Freemium' },
            { name: 'PDF.ai', description: 'Chat with your PDF documents.', url: 'https://pdf.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pdf.ai', dataAiHint: 'pdf search', pricing: 'Freemium' },
        ]
    },
    {
        title: "Website Search",
        icon: "Globe",
        tools: [
            { name: 'Algolia', description: 'Add a powerful search to your website.', url: 'https://www.algolia.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=algolia.com', dataAiHint: 'site search', pricing: 'Paid' },
            { name: 'Google Programmable Search', description: 'Create a search engine for your website.', url: 'https://programmablesearchengine.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'custom search', pricing: 'Freemium' },
            { name: 'Swiftype', description: 'Add search to your website with ease.', url: 'https://swiftype.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=swiftype.com', dataAiHint: 'elastic search', pricing: 'Paid' },
            { name: 'Searchspring', description: 'AI-driven search for e-commerce sites.', url: 'https://searchspring.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=searchspring.com', dataAiHint: 'ecommerce search', pricing: 'Paid' },
        ]
    },
    {
        title: "Image Search AI",
        icon: "ImageIcon",
        tools: [
            { name: 'Google Lens', description: 'Search what you see.', url: 'https://lens.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'visual search', pricing: 'Free' },
            { name: 'Pinterest Lens', description: 'Visual discovery tool for finding ideas on Pinterest.', url: 'https://help.pinterest.com/en/article/pinterest-lens', image: 'https://www.google.com/s2/favicons?sz=128&domain=pinterest.com', dataAiHint: 'idea discovery', pricing: 'Free' },
            { name: 'TinEye', description: 'Reverse image search.', url: 'https://tineye.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tineye.com', dataAiHint: 'reverse search', pricing: 'Free' },
            { name: 'Yandex Images', description: 'Image search and reverse image search.', url: 'https://yandex.com/images/', image: 'https://www.google.com/s2/favicons?sz=128&domain=yandex.com', dataAiHint: 'image search', pricing: 'Free' },
        ]
    },
    {
        title: "Video Search AI",
        icon: "Video",
        tools: [
            { name: 'Twelve Labs', description: 'Multimodal AI for understanding video.', url: 'https://twelvelabs.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=twelvelabs.io', dataAiHint: 'video understanding', pricing: 'Paid' },
            { name: 'VFRAME', description: 'Open source computer vision for video analysis.', url: 'https://vframe.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=vframe.io', dataAiHint: 'video analysis', pricing: 'Free' },
            { name: 'Valossa', description: 'AI for video recognition and intelligence.', url: 'https://valossa.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=valossa.com', dataAiHint: 'video recognition', pricing: 'Paid' },
            { name: 'Amazon Rekognition Video', description: 'Automated video analysis.', url: 'https://aws.amazon.com/rekognition/video/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'aws video', pricing: 'Paid' },
        ]
    },
    {
        title: "Voice Search",
        icon: "Mic",
        tools: [
            { name: 'Google Assistant', description: 'Your personal Google, always ready to help.', url: 'https://assistant.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'voice assistant', pricing: 'Free' },
            { name: 'Amazon Alexa', description: 'The voice service that powers Echo devices.', url: 'https://www.amazon.com/alexa', image: 'https://www.google.com/s2/favicons?sz=128&domain=amazon.com', dataAiHint: 'smart speaker', pricing: 'Free' },
            { name: 'Siri', description: 'Apple\'s intelligent assistant.', url: 'https://www.apple.com/siri/', image: 'https://www.google.com/s2/favicons?sz=128&domain=apple.com', dataAiHint: 'apple assistant', pricing: 'Free' },
            { name: 'Houndify', description: 'Voice AI platform.', url: 'https://www.houndify.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=houndify.com', dataAiHint: 'voice ai', pricing: 'Paid' },
        ]
    },
    {
        title: "Code Search AI",
        icon: "Code",
        tools: [
            { name: 'Sourcegraph', description: 'Understand and fix code faster with code search.', url: 'https://about.sourcegraph.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sourcegraph.com', dataAiHint: 'code search', pricing: 'Freemium' },
            { name: 'Phind', description: 'The AI search engine for developers.', url: 'https://www.phind.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=phind.com', dataAiHint: 'developer search', pricing: 'Free' },
            { name: 'GitHub Code Search', description: 'Search code on GitHub.', url: 'https://github.com/search', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'github search', pricing: 'Free' },
            { name: 'Grep.app', description: 'Search across a half million git repositories.', url: 'https://grep.app/', image: 'https://www.google.com/s2/favicons?sz=128&domain=grep.app', dataAiHint: 'git search', pricing: 'Free' },
        ]
    },
    {
        title: "Academic Search",
        icon: "GraduationCap",
        tools: [
            { name: 'Google Scholar', description: 'Broadly search for scholarly literature.', url: 'https://scholar.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'academic search', pricing: 'Free' },
            { name: 'Semantic Scholar', description: 'AI-powered research tool for scientific literature.', url: 'https://www.semanticscholar.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=semanticscholar.org', dataAiHint: 'scientific literature', pricing: 'Free' },
            { name: 'Elicit', description: 'The AI Research Assistant.', url: 'https://elicit.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=elicit.org', dataAiHint: 'research assistant', pricing: 'Freemium' },
            { name: 'Connected Papers', description: 'A visual tool to explore academic papers.', url: 'https://www.connectedpapers.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=connectedpapers.com', dataAiHint: 'visual explorer', pricing: 'Free' },
        ]
    },
    { 
        title: "Legal Document Search", 
        icon: "Scale", 
        tools: [
            { name: 'Casetext', description: 'AI legal research.', url: 'https://casetext.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=casetext.com', dataAiHint: 'legal research', pricing: 'Paid' },
            { name: 'LexisNexis', description: 'Legal & professional solutions.', url: 'https://www.lexisnexis.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lexisnexis.com', dataAiHint: 'legal database', pricing: 'Paid' },
            { name: 'Westlaw', description: 'Legal research service.', url: 'https://www.westlaw.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=westlaw.com', dataAiHint: 'legal research', pricing: 'Paid' },
            { name: 'vLex', description: 'Global legal intelligence platform.', url: 'https://vlex.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=vlex.com', dataAiHint: 'legal intelligence', pricing: 'Paid' },
        ] 
    },
    { 
        title: "Medical Search AI", 
        icon: "HeartPulse", 
        tools: [
            { name: 'PubMed', description: 'Biomedical literature from MEDLINE.', url: 'https://pubmed.ncbi.nlm.nih.gov/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ncbi.nlm.nih.gov', dataAiHint: 'medical literature', pricing: 'Free' },
            { name: 'UpToDate', description: 'Evidence-based clinical decision support.', url: 'https://www.uptodate.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=wolterskluwer.com', dataAiHint: 'clinical support', pricing: 'Paid' },
            { name: 'Human Dx', description: 'The clinical reasoning platform.', url: 'https://www.humandx.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=humandx.org', dataAiHint: 'clinical reasoning', pricing: 'Free' },
            { name: 'Glass AI', description: 'AI for medical knowledge.', url: 'https://glass.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=glass.ai', dataAiHint: 'medical knowledge', pricing: 'Paid' },
        ] 
    },
    { 
        title: "Multilingual Search", 
        icon: "Languages", 
        tools: [
            { name: 'Yandex', description: 'A Russian multinational technology company.', url: 'https://yandex.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=yandex.com', dataAiHint: 'russian search', pricing: 'Free' },
            { name: 'Baidu', description: 'A Chinese multinational technology company.', url: 'https://www.baidu.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=baidu.com', dataAiHint: 'chinese search', pricing: 'Free' },
            { name: 'Naver', description: 'A South Korean online platform.', url: 'https://www.naver.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=naver.com', dataAiHint: 'korean search', pricing: 'Free' },
        ] 
    },
    { 
        title: "Context-Aware Search", 
        icon: "Crosshair", 
        tools: [
             { name: 'Kagi', description: 'A user-centric search engine that provides context.', url: 'https://kagi.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kagi.com', dataAiHint: 'user-centric search', pricing: 'Paid' },
             { name: 'Google', description: 'The world\'s most popular search engine.', url: 'https://google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'search engine', pricing: 'Free' },
        ]
    },
    {
        title: "Conversational Search",
        icon: "MessageSquare",
        tools: [
            { name: 'Perplexity AI', description: 'An answer engine for discovering and sharing knowledge.', url: 'https://www.perplexity.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=perplexity.ai', dataAiHint: 'answer engine', pricing: 'Freemium' },
            { name: 'ChatGPT', description: 'Conversational AI that can search the web.', url: 'https://chat.openai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=openai.com', dataAiHint: 'ai chat', pricing: 'Freemium' },
            { name: 'Google Gemini', description: 'Google\'s conversational AI with search capabilities.', url: 'https://gemini.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'google ai', pricing: 'Free' },
            { name: 'You.com', description: 'AI chatbot and search engine.', url: 'https://you.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=you.com', dataAiHint: 'search engine', pricing: 'Free' },
            { name: 'Phind', description: 'The AI search engine for developers.', url: 'https://www.phind.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=phind.com', dataAiHint: 'developer search', pricing: 'Free' },
        ]
    },
    { 
        title: "Real-Time Search", 
        icon: "Clock", 
        tools: [
            { name: 'X (Twitter)', description: 'Search for real-time conversations and news.', url: 'https://x.com/explore', image: 'https://www.google.com/s2/favicons?sz=128&domain=x.com', dataAiHint: 'real-time news', pricing: 'Free' },
            { name: 'Google News', description: 'Comprehensive up-to-date news coverage.', url: 'https://news.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'news coverage', pricing: 'Free' },
            { name: 'Datadog', description: 'Real-time monitoring and log management.', url: 'https://www.datadoghq.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=datadoghq.com', dataAiHint: 'log management', pricing: 'Paid' },
        ]
    },
    { 
        title: "Privacy-Focused Search", 
        icon: "Shield", 
        tools: [
            { name: 'DuckDuckGo', description: 'The search engine that doesn\'t track you.', url: 'https://duckduckgo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=duckduckgo.com', dataAiHint: 'privacy search', pricing: 'Free' },
            { name: 'Brave Search', description: 'Private, independent search engine.', url: 'https://search.brave.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=brave.com', dataAiHint: 'independent search', pricing: 'Free' },
            { name: 'Startpage', description: 'Search privately without tracking.', url: 'https://www.startpage.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=startpage.com', dataAiHint: 'private search', pricing: 'Free' },
            { name: 'Swisscows', description: 'A data-secure search engine.', url: 'https://swisscows.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=swisscows.com', dataAiHint: 'data secure', pricing: 'Free' },
        ] 
    },
    { 
        title: "News Search AI", 
        icon: "Newspaper", 
        tools: [
            { name: 'Google News', description: 'Comprehensive up-to-date news coverage.', url: 'https://news.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'news coverage', pricing: 'Free' },
            { name: 'Bing News', description: 'News from thousands of the world’s most popular sources.', url: 'https://www.bing.com/news', image: 'https://www.google.com/s2/favicons?sz=128&domain=bing.com', dataAiHint: 'microsoft news', pricing: 'Free' },
            { name: 'Feedly', description: 'News aggregator for various sources.', url: 'https://feedly.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=feedly.com', dataAiHint: 'news aggregator', pricing: 'Freemium' },
            { name: 'Inoreader', description: 'Content and news reader for power users.', url: 'https://www.inoreader.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=inoreader.com', dataAiHint: 'power user', pricing: 'Freemium' },
        ] 
    },
    { 
        title: "Knowledge Graph Search", 
        icon: "Share2", 
        tools: [
            { name: 'Diffbot', description: 'Knowledge-as-a-Service, creating a universal database of structured knowledge.', url: 'https://www.diffbot.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=diffbot.com', dataAiHint: 'structured knowledge', pricing: 'Paid' },
            { name: 'Stardog', description: 'An enterprise Knowledge Graph Platform.', url: 'https://www.stardog.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=stardog.com', dataAiHint: 'enterprise kg', pricing: 'Paid' },
            { name: 'Neo4j', description: 'The world\'s leading graph database.', url: 'https://neo4j.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=neo4j.com', dataAiHint: 'graph database', pricing: 'Freemium' },
        ] 
    },
    { 
        title: "Internal Tool Search", 
        icon: "Wrench", 
        tools: [
            { name: 'Glean', description: 'AI-powered work assistant that searches across all your company\'s apps.', url: 'https://www.glean.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=glean.com', dataAiHint: 'work assistant', pricing: 'Paid' },
            { name: 'Elastic Workplace Search', description: 'A single search experience for your team\'s content.', url: 'https://www.elastic.co/workplace-search', image: 'https://www.google.com/s2/favicons?sz=128&domain=elastic.co', dataAiHint: 'workplace search', pricing: 'Paid' },
            { name: 'Coveo', description: 'AI-powered relevance platform.', url: 'https://www.coveo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=coveo.com', dataAiHint: 'relevance platform', pricing: 'Paid' },
        ] 
    },
    { 
        title: "AI Web Crawlers", 
        icon: "Globe2", 
        tools: [
            { name: 'Scrapy', description: 'An open source and collaborative framework for extracting the data you need from websites.', url: 'https://scrapy.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=scrapy.org', dataAiHint: 'web crawling', pricing: 'Free' },
            { name: 'Apify', description: 'Web scraping and automation platform.', url: 'https://apify.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=apify.com', dataAiHint: 'web automation', pricing: 'Freemium' },
            { name: 'Octoparse', description: 'A no-code web scraping tool.', url: 'https://www.octoparse.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=octoparse.com', dataAiHint: 'no-code scraping', pricing: 'Freemium' },
        ] 
    },
    { 
        title: "AI Fact-Checking Search", 
        icon: "CheckCheck", 
        tools: [
            { name: 'Snopes', description: 'The internet\'s definitive fact-checking resource.', url: 'https://www.snopes.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=snopes.com', dataAiHint: 'fact check', pricing: 'Free' },
            { name: 'PolitiFact', description: 'Fact-checking U.S. politics.', url: 'https://www.politifact.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=politifact.com', dataAiHint: 'political facts', pricing: 'Free' },
            { name: 'FactCheck.org', description: 'A nonpartisan, nonprofit consumer advocate for voters.', url: 'https://www.factcheck.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=factcheck.org', dataAiHint: 'voter information', pricing: 'Free' },
        ] 
    }
];
