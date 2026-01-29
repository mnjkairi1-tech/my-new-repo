
import type { Tool } from '@/lib/types';

export const inMemoryDatabasesTools: Tool[] = [
    { name: 'Redis', description: 'An in-memory data structure store.', url: 'https://redis.io/', image: 'https://picsum.photos/seed/redis-mem/600/400', dataAiHint: 'key-value store', pricing: 'Freemium' },
    { name: 'Memcached', description: 'A free & open source, high-performance, distributed memory object caching system.', url: 'https://memcached.org/', image: 'https://picsum.photos/seed/memcached/600/400', dataAiHint: 'caching system', pricing: 'Free' },
    { name: 'Hazelcast', description: 'A real-time data platform.', url: 'https://hazelcast.com/', image: 'https://picsum.photos/seed/hazelcast-mem/600/400', dataAiHint: 'data grid', pricing: 'Freemium' },
    { name: 'Apache Ignite', description: 'A distributed database for high-performance computing with in-memory speed.', url: 'https://ignite.apache.org/', image: 'https://picsum.photos/seed/ignite/600/400', dataAiHint: 'in-memory computing', pricing: 'Free' },
    { name: 'VoltDB', description: 'A fast, in-memory transactional database for modern applications.', url: 'https://www.voltdb.com/', image: 'https://picsum.photos/seed/voltdb/600/400', dataAiHint: 'transactional db', pricing: 'Paid' },
    { name: 'Oracle TimesTen', description: 'An in-memory, relational database.', url: 'https://www.oracle.com/database/technologies/timesten.html', image: 'https://picsum.photos/seed/timesten/600/400', dataAiHint: 'oracle in-memory', pricing: 'Paid' },
    { name: 'SAP HANA', description: 'In-memory database for real-time analytics.', url: 'https://www.sap.com/products/hana.html', image: 'https://picsum.photos/seed/sap-hana/600/400', dataAiHint: 'sap database', pricing: 'Paid' },
    { name: 'Tarantool', description: 'An in-memory database and application server.', url: 'https://www.tarantool.io/', image: 'https://picsum.photos/seed/tarantool/600/400', dataAiHint: 'app server', pricing: 'Free' },
    { name: 'GridGain', description: 'In-memory computing platform built on Apache Ignite.', url: 'https://www.gridgain.com/', image: 'https://picsum.photos/seed/gridgain/600/400', dataAiHint: 'apache ignite', pricing: 'Paid' },
    { name: 'Ehcache', description: 'An open source, Java-based cache.', url: 'https://www.ehcache.org/', image: 'https://picsum.photos/seed/ehcache/600/400', dataAiHint: 'java cache', pricing: 'Free' },
];
