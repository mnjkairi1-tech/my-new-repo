
import type { Tool } from '@/lib/types';

export const aiVectorDatabasesTools: Tool[] = [
    { name: 'Pinecone', description: 'Vector database for AI-powered search and applications.', url: 'https://www.pinecone.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pinecone.io', dataAiHint: 'vector database', pricing: 'Freemium' },
    { name: 'Weaviate', description: 'An open-source vector database.', url: 'https://weaviate.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=weaviate.io', dataAiHint: 'open source vector', pricing: 'Free' },
    { name: 'Milvus', description: 'An open-source vector database for AI applications.', url: 'https://milvus.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=milvus.io', dataAiHint: 'vector search', pricing: 'Free' },
    { name: 'Chroma', description: 'The AI-native open-source embedding database.', url: 'https://www.trychroma.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=trychroma.com', dataAiHint: 'embedding database', pricing: 'Free' },
    { name: 'Qdrant', description: 'Vector Similarity Search Engine.', url: 'https://qdrant.tech/', image: 'https://www.google.com/s2/favicons?sz=128&domain=qdrant.tech', dataAiHint: 'vector engine', pricing: 'Freemium' },
    { name: 'LanceDB', description: 'Embedded, serverless vector database.', url: 'https://lancedb.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lancedb.com', dataAiHint: 'serverless vector', pricing: 'Free' },
    { name: 'Marqo', description: 'Open-source tensor search for humans.', url: 'https://www.marqo.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=marqo.ai', dataAiHint: 'tensor search', pricing: 'Free' },
    { name: 'Vald', description: 'A highly scalable distributed vector search engine.', url: 'https://vald.vdaas.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=vald.vdaas.org', dataAiHint: 'distributed vector', pricing: 'Free' },
    { name: 'FAISS', description: 'Library for efficient similarity search by Facebook AI.', url: 'https://faiss.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=faiss.ai', dataAiHint: 'similarity search', pricing: 'Free' },
    { name: 'Vespa', description: 'The open source big data serving engine.', url: 'https://vespa.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=vespa.ai', dataAiHint: 'serving engine', pricing: 'Free' },
];
