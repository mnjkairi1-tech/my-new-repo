
import type { Tool } from '@/lib/types';

export const graphDatabasesTools: Tool[] = [
    { name: 'Neo4j', description: 'The world\'s leading graph database.', url: 'https://neo4j.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=neo4j.com', dataAiHint: 'graph database', pricing: 'Freemium' },
    { name: 'ArangoDB', description: 'A native multi-model database with a graph data model.', url: 'https://www.arangodb.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=arangodb.com', dataAiHint: 'multi-model db', pricing: 'Freemium' },
    { name: 'Amazon Neptune', description: 'A fast, reliable, fully managed graph database service.', url: 'https://aws.amazon.com/neptune/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'aws graph', pricing: 'Paid' },
    { name: 'TigerGraph', description: 'A platform for advanced analytics and machine learning on connected data.', url: 'https://www.tigergraph.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tigergraph.com', dataAiHint: 'graph analytics', pricing: 'Paid' },
    { name: 'Dgraph', description: 'An open-source, transactional, distributed, native graph database.', url: 'https://dgraph.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=dgraph.io', dataAiHint: 'native graph', pricing: 'Free' },
    { name: 'JanusGraph', description: 'An open source, distributed graph database.', url: 'https://janusgraph.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=janusgraph.org', dataAiHint: 'distributed graph', pricing: 'Free' },
    { name: 'OrientDB', description: 'An open source NoSQL multi-model database.', url: 'https://orientdb.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=orientdb.org', dataAiHint: 'multi-model nosql', pricing: 'Free' },
    { name: 'Azure Cosmos DB', description: 'A multi-model database service with Gremlin (graph) API.', url: 'https://azure.microsoft.com/en-us/products/cosmos-db/', image: 'https://www.google.com/s2/favicons?sz=128&domain=azure.microsoft.com', dataAiHint: 'gremlin api', pricing: 'Paid' },
    { name: 'Memgraph', description: 'The platform for graph computation on streaming data.', url: 'https://memgraph.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=memgraph.com', dataAiHint: 'streaming graph', pricing: 'Freemium' },
    { name: 'FlockDB', description: 'A distributed graph database for storing adjacencies.', url: 'https://github.com/twitter-archive/flockdb', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'twitter graph', pricing: 'Free' },
];
