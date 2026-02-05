
import type { Tool } from '@/lib/types';

export const realTimeDatabasesTools: Tool[] = [
    { name: 'Firebase Realtime Database', description: 'A cloud-hosted NoSQL database that lets you store and sync data in realtime.', url: 'https://firebase.google.com/docs/database', image: 'https://www.google.com/s2/favicons?sz=128&domain=firebase.google.com', dataAiHint: 'realtime sync', pricing: 'Freemium' },
    { name: 'Supabase', description: 'Provides realtime capabilities on top of PostgreSQL.', url: 'https://supabase.com/realtime', image: 'https://www.google.com/s2/favicons?sz=128&domain=supabase.com', dataAiHint: 'postgres realtime', pricing: 'Freemium' },
    { name: 'RethinkDB', description: 'An open-source database for the realtime web.', url: 'https://rethinkdb.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rethinkdb.com', dataAiHint: 'realtime web', pricing: 'Free' },
    { name: 'Appwrite', description: 'Open-source backend server with a realtime API.', url: 'https://appwrite.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=appwrite.io', dataAiHint: 'backend server', pricing: 'Free' },
    { name: 'Ably', description: 'A realtime experience infrastructure provider.', url: 'https://ably.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ably.com', dataAiHint: 'realtime api', pricing: 'Freemium' },
    { name: 'Pusher', description: 'Hosted APIs for realtime features.', url: 'https://pusher.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pusher.com', dataAiHint: 'hosted apis', pricing: 'Freemium' },
    { name: 'Socket.IO', description: 'A library that enables real-time, bidirectional and event-based communication.', url: 'https://socket.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=socket.io', dataAiHint: 'websocket library', pricing: 'Free' },
    { name: 'Hazelcast', description: 'A real-time data platform.', url: 'https://hazelcast.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hazelcast.com', dataAiHint: 'data grid', pricing: 'Freemium' },
    { name: 'VoltDB', description: 'A fast, in-memory transactional database for modern applications.', url: 'https://www.voltdb.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=voltdb.com', dataAiHint: 'fast database', pricing: 'Paid' },
    { name: 'Confluent Cloud', description: 'A fully managed event streaming platform based on Apache Kafka.', url: 'https://www.confluent.io/cloud/', image: 'https://www.google.com/s2/favicons?sz=128&domain=confluent.io', dataAiHint: 'kafka cloud', pricing: 'Paid' },
];
