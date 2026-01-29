
import type { Tool } from '@/lib/types';

export const cachingSystemsTools: Tool[] = [
    { name: 'Redis', description: 'An in-memory data structure store, used as a cache.', url: 'https://redis.io/', image: 'https://picsum.photos/seed/redis-cache/600/400', dataAiHint: 'in-memory cache', pricing: 'Freemium' },
    { name: 'Memcached', description: 'A free & open source, high-performance, distributed memory object caching system.', url: 'https://memcached.org/', image: 'https://picsum.photos/seed/memcached-cache/600/400', dataAiHint: 'object caching', pricing: 'Free' },
    { name: 'Varnish Cache', description: 'A web application accelerator, also known as a caching HTTP reverse proxy.', url: 'https://varnish-cache.org/', image: 'https://picsum.photos/seed/varnish-cache/600/400', dataAiHint: 'http accelerator', pricing: 'Free' },
    { name: 'Amazon ElastiCache', description: 'Managed Redis and Memcached service.', url: 'https://aws.amazon.com/elasticache/', image: 'https://picsum.photos/seed/elasticache/600/400', dataAiHint: 'aws cache', pricing: 'Paid' },
    { name: 'Hazelcast', description: 'A real-time data platform with a distributed cache.', url: 'https://hazelcast.com/', image: 'https://picsum.photos/seed/hazelcast-cache/600/400', dataAiHint: 'distributed cache', pricing: 'Freemium' },
    { name: 'Ehcache', description: 'An open source, Java-based cache.', url: 'https://www.ehcache.org/', image: 'https://picsum.photos/seed/ehcache/600/400', dataAiHint: 'java cache', pricing: 'Free' },
    { name: 'Apache Ignite', description: 'A distributed database and caching platform.', url: 'https://ignite.apache.org/', image: 'https://picsum.photos/seed/ignite-cache/600/400', dataAiHint: 'in-memory computing', pricing: 'Free' },
    { name: 'Google Cloud Memorystore', description: 'Fully managed Redis and Memcached for Google Cloud.', url: 'https://cloud.google.com/memorystore', image: 'https://picsum.photos/seed/gcp-memorystore/600/400', dataAiHint: 'gcp cache', pricing: 'Paid' },
    { name: 'Azure Cache for Redis', description: 'A secure data cache and messaging broker.', url: 'https://azure.microsoft.com/en-us/products/cache/', image: 'https://picsum.photos/seed/azure-cache/600/400', dataAiHint: 'azure redis', pricing: 'Paid' },
    { name: 'Squid', description: 'A caching and forwarding web proxy.', url: 'http://www.squid-cache.org/', image: 'https://picsum.photos/seed/squid-cache/600/400', dataAiHint: 'web proxy', pricing: 'Free' },
];
