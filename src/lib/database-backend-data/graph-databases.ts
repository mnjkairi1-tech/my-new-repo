
import type { Tool } from '@/lib/types';

export const graphDatabasesTools: Tool[] = [
    { name: 'Neo4j', description: 'The world\'s leading graph database.', url: 'https://neo4j.com/', image: 'https://picsum.photos/seed/neo4j-graph/600/400', dataAiHint: 'graph database', pricing: 'Freemium' },
    { name: 'ArangoDB', description: 'A native multi-model database with a graph data model.', url: 'https://www.arangodb.com/', image: 'https://picsum.photos/seed/arangodb-graph/600/400', dataAiHint: 'multi-model db', pricing: 'Freemium' },
    { name: 'Amazon Neptune', description: 'A fast, reliable, fully managed graph database service.', url: 'https://aws.amazon.com/neptune/', image: 'https://picsum.photos/seed/neptune-graph/600/400', dataAiHint: 'aws graph', pricing: 'Paid' },
    { name: 'TigerGraph', description: 'A platform for advanced analytics and machine learning on connected data.', url: 'https://www.tigergraph.com/', image: 'https://picsum.photos/seed/tigergraph/600/400', dataAiHint: 'graph analytics', pricing: 'Paid' },
    { name: 'Dgraph', description: 'An open-source, transactional, distributed, native graph database.', url: 'https://dgraph.io/', image: 'https://picsum.photos/seed/dgraph/600/400', dataAiHint: 'native graph', pricing: 'Free' },
    { name: 'JanusGraph', description: 'An open source, distributed graph database.', url: 'https://janusgraph.org/', image: 'https://picsum.photos/seed/janusgraph/600/400', dataAiHint: 'distributed graph', pricing: 'Free' },
    { name: 'OrientDB', description: 'An open source NoSQL multi-model database.', url: 'https://orientdb.org/', image: 'https://picsum.photos/seed/orientdb/600/400', dataAiHint: 'multi-model nosql', pricing: 'Free' },
    { name: 'Azure Cosmos DB', description: 'A multi-model database service with Gremlin (graph) API.', url: 'https://azure.microsoft.com/en-us/products/cosmos-db/', image: 'https://picsum.photos/seed/cosmosdb-graph/600/400', dataAiHint: 'gremlin api', pricing: 'Paid' },
    { name: 'Memgraph', description: 'The platform for graph computation on streaming data.', url: 'https://memgraph.com/', image: 'https://picsum.photos/seed/memgraph/600/400', dataAiHint: 'streaming graph', pricing: 'Freemium' },
    { name: 'FlockDB', description: 'A distributed graph database for storing adjacencies.', url: 'https://github.com/twitter-archive/flockdb', image: 'https://picsum.photos/seed/flockdb/600/400', dataAiHint: 'twitter graph', pricing: 'Free' },
];
