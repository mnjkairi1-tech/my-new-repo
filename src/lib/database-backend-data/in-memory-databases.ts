
import type { Tool } from '@/lib/types';

export const inMemoryDatabasesTools: Tool[] = [
    { name: 'Redis', description: 'An in-memory data structure store.', url: 'https://redis.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=redis.io', dataAiHint: 'key-value store', pricing: 'Freemium' },
    { name: 'Memcached', description: 'A free & open source, high-performance, distributed memory object caching system.', url: 'https://memcached.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=memcached.org', dataAiHint: 'caching system', pricing: 'Free' },
    { name: 'Hazelcast', description: 'A real-time data platform.', url: 'https://hazelcast.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hazelcast.com', dataAiHint: 'data grid', pricing: 'Freemium' },
    { name: 'Apache Ignite', description: 'A distributed database for high-performance computing with in-memory speed.', url: 'https://ignite.apache.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ignite.apache.org', dataAiHint: 'in-memory computing', pricing: 'Free' },
    { name: 'VoltDB', description: 'A fast, in-memory transactional database for modern applications.', url: 'https://www.voltdb.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=voltdb.com', dataAiHint: 'transactional db', pricing: 'Paid' },
    { name: 'Oracle TimesTen', description: 'An in-memory, relational database.', url: 'https://www.oracle.com/database/technologies/timesten.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=oracle.com', dataAiHint: 'oracle in-memory', pricing: 'Paid' },
    { name: 'SAP HANA', description: 'In-memory database for real-time analytics.', url: 'https://www.sap.com/products/hana.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=sap.com', dataAiHint: 'sap database', pricing: 'Paid' },
    { name: 'Tarantool', description: 'An in-memory database and application server.', url: 'https://www.tarantool.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tarantool.io', dataAiHint: 'app server', pricing: 'Free' },
    { name: 'GridGain', description: 'In-memory computing platform built on Apache Ignite.', url: 'https://www.gridgain.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gridgain.com', dataAiHint: 'apache ignite', pricing: 'Paid' },
    { name: 'Ehcache', description: 'An open source, Java-based cache.', url: 'https://www.ehcache.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ehcache.org', dataAiHint: 'java cache', pricing: 'Free' },
];
