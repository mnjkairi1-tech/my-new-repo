
import type { Tool } from '@/lib/types';

export const mobileDatabasesTools: Tool[] = [
    { name: 'SQLite', description: 'A C-language library that implements a small, fast, self-contained SQL database engine.', url: 'https://www.sqlite.org/', image: 'https://picsum.photos/seed/sqlite/600/400', dataAiHint: 'embedded sql', pricing: 'Free' },
    { name: 'Realm', description: 'A mobile database that runs directly inside phones, tablets or wearables.', url: 'https://realm.io/', image: 'https://picsum.photos/seed/realm/600/400', dataAiHint: 'mobile database', pricing: 'Freemium' },
    { name: 'Firebase Realtime Database', description: 'A cloud-hosted NoSQL database that lets you store and sync data in realtime.', url: 'https://firebase.google.com/docs/database', image: 'https://picsum.photos/seed/firebase-rtdb/600/400', dataAiHint: 'realtime sync', pricing: 'Freemium' },
    { name: 'Firestore', description: 'A flexible, scalable NoSQL cloud database to store and sync data for client- and server-side development.', url: 'https://firebase.google.com/docs/firestore', image: 'https://picsum.photos/seed/firestore-mobile/600/400', dataAiHint: 'nosql mobile', pricing: 'Freemium' },
    { name: 'Couchbase Lite', description: 'An embedded NoSQL JSON database for mobile and edge computing.', url: 'https://www.couchbase.com/products/lite', image: 'https://picsum.photos/seed/couchbase-lite/600/400', dataAiHint: 'embedded nosql', pricing: 'Paid' },
    { name: 'WatermelonDB', description: 'A high-performance reactive database framework.', url: 'https://watermelondb.dev/', image: 'https://picsum.photos/seed/watermelondb/600/400', dataAiHint: 'react native', pricing: 'Free' },
    { name: 'ObjectBox', description: 'A fast, object-oriented mobile database.', url: 'https://objectbox.io/', image: 'https://picsum.photos/seed/objectbox/600/400', dataAiHint: 'object database', pricing: 'Freemium' },
    { name: 'Berkeley DB', description: 'A software library that provides a high-performance embedded database.', url: 'https://www.oracle.com/database/berkeley-db/', image: 'https://picsum.photos/seed/berkeley-db/600/400', dataAiHint: 'embedded database', pricing: 'Free' },
    { name: 'LevelDB', description: 'A fast key-value storage library written at Google.', url: 'https://github.com/google/leveldb', image: 'https://picsum.photos/seed/leveldb/600/400', dataAiHint: 'key-value store', pricing: 'Free' },
    { name: 'RocksDB', description: 'A library that provides an embeddable, persistent key-value store for fast storage.', url: 'https://rocksdb.org/', image: 'https://picsum.photos/seed/rocksdb/600/400', dataAiHint: 'persistent key-value', pricing: 'Free' },
];
