
import type { Tool } from '@/lib/types';

export const distributedDatabasesTools: Tool[] = [
    { name: 'CockroachDB', description: 'A distributed SQL database built on a transactional and strongly-consistent key-value store.', url: 'https://www.cockroachlabs.com/', image: 'https://picsum.photos/seed/cockroachdb/600/400', dataAiHint: 'distributed sql', pricing: 'Freemium' },
    { name: 'TiDB', description: 'An open-source, distributed, NewSQL database.', url: 'https://pingcap.com/products/tidb/', image: 'https://picsum.photos/seed/tidb/600/400', dataAiHint: 'htap database', pricing: 'Freemium' },
    { name: 'YugabyteDB', description: 'A high-performance, cloud-native distributed SQL database.', url: 'https://www.yugabyte.com/', image: 'https://picsum.photos/seed/yugabytedb/600/400', dataAiHint: 'cloud-native sql', pricing: 'Freemium' },
    { name: 'Cassandra', description: 'A free and open-source, distributed, wide-column store NoSQL database.', url: 'https://cassandra.apache.org/', image: 'https://picsum.photos/seed/cassandra-dist/600/400', dataAiHint: 'wide-column store', pricing: 'Free' },
    { name: 'Riak', description: 'A distributed NoSQL key-value data store.', url: 'https://riak.com/', image: 'https://picsum.photos/seed/riak/600/400', dataAiHint: 'key-value store', pricing: 'Paid' },
    { name: 'FoundationDB', description: 'An open source, distributed, transactional key-value store.', url: 'https://www.foundationdb.org/', image: 'https://picsum.photos/seed/foundationdb/600/400', dataAiHint: 'transactional kv', pricing: 'Free' },
    { name: 'etcd', description: 'A distributed reliable key-value store for the most critical data of a distributed system.', url: 'https://etcd.io/', image: 'https://picsum.photos/seed/etcd/600/400', dataAiHint: 'kubernetes data', pricing: 'Free' },
    { name: 'ScyllaDB', description: 'The monstrously fast and scalable NoSQL database.', url: 'https://www.scylladb.com/', image: 'https://picsum.photos/seed/scylladb/600/400', dataAiHint: 'cassandra alternative', pricing: 'Freemium' },
    { name: 'Amazon DynamoDB', description: 'Fast and flexible NoSQL database service.', url: 'https://aws.amazon.com/dynamodb/', image: 'https://picsum.photos/seed/dynamodb/600/400', dataAiHint: 'aws nosql', pricing: 'Paid' },
    { name: 'Google Cloud Spanner', description: 'Fully managed, mission-critical, relational database service.', url: 'https://cloud.google.com/spanner', image: 'https://picsum.photos/seed/spanner/600/400', dataAiHint: 'global sql', pricing: 'Paid' },
];
