
import type { Tool } from '@/lib/types';

export const mobileDatabasesTools: Tool[] = [
    { name: 'SQLite', description: 'A C-language library that implements a small, fast, self-contained SQL database engine.', url: 'https://www.sqlite.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sqlite.org', dataAiHint: 'embedded sql', pricing: 'Free' },
    { name: 'Realm', description: 'A mobile database that runs directly inside phones, tablets or wearables.', url: 'https://realm.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=realm.io', dataAiHint: 'mobile database', pricing: 'Freemium' },
    { name: 'Firebase Realtime Database', description: 'A cloud-hosted NoSQL database that lets you store and sync data in realtime.', url: 'https://firebase.google.com/docs/database', image: 'https://www.google.com/s2/favicons?sz=128&domain=firebase.google.com', dataAiHint: 'realtime sync', pricing: 'Freemium' },
    { name: 'Firestore', description: 'A flexible, scalable NoSQL cloud database to store and sync data for client- and server-side development.', url: 'https://firebase.google.com/docs/firestore', image: 'https://www.google.com/s2/favicons?sz=128&domain=firebase.google.com', dataAiHint: 'nosql mobile', pricing: 'Freemium' },
    { name: 'Couchbase Lite', description: 'An embedded NoSQL JSON database for mobile and edge computing.', url: 'https://www.couchbase.com/products/lite', image: 'https://www.google.com/s2/favicons?sz=128&domain=couchbase.com', dataAiHint: 'embedded nosql', pricing: 'Paid' },
    { name: 'WatermelonDB', description: 'A high-performance reactive database framework.', url: 'https://watermelondb.dev/', image: 'https://www.google.com/s2/favicons?sz=128&domain=watermelondb.dev', dataAiHint: 'react native', pricing: 'Free' },
    { name: 'ObjectBox', description: 'A fast, object-oriented mobile database.', url: 'https://objectbox.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=objectbox.io', dataAiHint: 'object database', pricing: 'Freemium' },
    { name: 'Berkeley DB', description: 'A software library that provides a high-performance embedded database.', url: 'https://www.oracle.com/database/berkeley-db/', image: 'https://www.google.com/s2/favicons?sz=128&domain=oracle.com', dataAiHint: 'embedded database', pricing: 'Free' },
    { name: 'LevelDB', description: 'A fast key-value storage library written at Google.', url: 'https://github.com/google/leveldb', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'key-value store', pricing: 'Free' },
    { name: 'RocksDB', description: 'A library that provides an embeddable, persistent key-value store for fast storage.', url: 'https://rocksdb.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rocksdb.org', dataAiHint: 'persistent key-value', pricing: 'Free' },
];
