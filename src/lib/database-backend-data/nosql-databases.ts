
import type { Tool } from '@/lib/types';

export const nosqlDatabasesTools: Tool[] = [
    { name: 'MongoDB', description: 'The developer data platform.', url: 'https://www.mongodb.com/', image: 'https://picsum.photos/seed/mongodb/600/400', dataAiHint: 'document database', pricing: 'Freemium' },
    { name: 'Redis', description: 'An in-memory data structure store, used as a database, cache, and message broker.', url: 'https://redis.io/', image: 'https://picsum.photos/seed/redis-nosql/600/400', dataAiHint: 'in-memory database', pricing: 'Freemium' },
    { name: 'Cassandra', description: 'A free and open-source, distributed, wide-column store NoSQL database.', url: 'https://cassandra.apache.org/', image: 'https://picsum.photos/seed/cassandra/600/400', dataAiHint: 'wide-column store', pricing: 'Free' },
    { name: 'Neo4j', description: 'The world\'s leading graph database.', url: 'https://neo4j.com/', image: 'https://picsum.photos/seed/neo4j/600/400', dataAiHint: 'graph database', pricing: 'Freemium' },
    { name: 'CouchDB', description: 'A database that uses JSON for documents, JavaScript for MapReduce queries.', url: 'https://couchdb.apache.org/', image: 'https://picsum.photos/seed/couchdb/600/400', dataAiHint: 'json database', pricing: 'Free' },
    { name: 'RavenDB', description: 'A NoSQL document database that\'s fully transactional (ACID).', url: 'https://ravendb.net/', image: 'https://picsum.photos/seed/ravendb/600/400', dataAiHint: 'acid nosql', pricing: 'Freemium' },
    { name: 'DynamoDB', description: 'Amazon\'s fast and flexible NoSQL database service.', url: 'https://aws.amazon.com/dynamodb/', image: 'https://picsum.photos/seed/dynamodb/600/400', dataAiHint: 'aws nosql', pricing: 'Paid' },
    { name: 'Couchbase', description: 'A distributed NoSQL cloud database.', url: 'https://www.couchbase.com/', image: 'https://picsum.photos/seed/couchbase/600/400', dataAiHint: 'cloud nosql', pricing: 'Paid' },
    { name: 'ArangoDB', description: 'A native multi-model database with a graph data model.', url: 'https://www.arangodb.com/', image: 'https://picsum.photos/seed/arangodb-graph/600/400', dataAiHint: 'multi-model db', pricing: 'Freemium' },
    { name: 'ScyllaDB', description: 'The monstrously fast and scalable NoSQL database.', url: 'https://www.scylladb.com/', image: 'https://picsum.photos/seed/scylladb/600/400', dataAiHint: 'cassandra alternative', pricing: 'Freemium' },
];
