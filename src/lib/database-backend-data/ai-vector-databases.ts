
import type { Tool } from '@/lib/types';

export const aiVectorDatabasesTools: Tool[] = [
    { name: 'Pinecone', description: 'Vector database for AI-powered search and applications.', url: 'https://www.pinecone.io/', image: 'https://picsum.photos/seed/pinecone/600/400', dataAiHint: 'vector database', pricing: 'Freemium' },
    { name: 'Weaviate', description: 'An open-source vector database.', url: 'https://weaviate.io/', image: 'https://picsum.photos/seed/weaviate/600/400', dataAiHint: 'open source vector', pricing: 'Free' },
    { name: 'Milvus', description: 'An open-source vector database for AI applications.', url: 'https://milvus.io/', image: 'https://picsum.photos/seed/milvus/600/400', dataAiHint: 'vector search', pricing: 'Free' },
    { name: 'Chroma', description: 'The AI-native open-source embedding database.', url: 'https://www.trychroma.com/', image: 'https://picsum.photos/seed/chroma/600/400', dataAiHint: 'embedding database', pricing: 'Free' },
    { name: 'Qdrant', description: 'Vector Similarity Search Engine.', url: 'https://qdrant.tech/', image: 'https://picsum.photos/seed/qdrant-sem/600/400', dataAiHint: 'vector engine', pricing: 'Freemium' },
    { name: 'LanceDB', description: 'Embedded, serverless vector database.', url: 'https://lancedb.com/', image: 'https://picsum.photos/seed/lancedb-sem/600/400', dataAiHint: 'serverless vector', pricing: 'Free' },
    { name: 'Marqo', description: 'Open-source tensor search for humans.', url: 'https://www.marqo.ai/', image: 'https://picsum.photos/seed/marqo-sem/600/400', dataAiHint: 'tensor search', pricing: 'Free' },
    { name: 'Vald', description: 'A highly scalable distributed vector search engine.', url: 'https://vald.vdaas.org/', image: 'https://picsum.photos/seed/vald-sem/600/400', dataAiHint: 'distributed vector', pricing: 'Free' },
    { name: 'FAISS', description: 'Library for efficient similarity search by Facebook AI.', url: 'https://faiss.ai/', image: 'https://picsum.photos/seed/faiss-sem/600/400', dataAiHint: 'similarity search', pricing: 'Free' },
    { name: 'Vespa', description: 'The open source big data serving engine.', url: 'https://vespa.ai/', image: 'https://picsum.photos/seed/vespa/600/400', dataAiHint: 'serving engine', pricing: 'Free' },
];
