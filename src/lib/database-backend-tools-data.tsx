
'use client';

import React from 'react';
import { 
    Database, Bot, Box, Zap, Layers, Cpu, Cloud, Server, Smartphone, GitBranch, ShieldCheck,
    Repeat, BookOpen, Search, Users, Code, TestTube, Settings, FileText, Globe, Link2,
    Eye, BarChart, LineChart, Filter, TrendingUp, Handshake, BrainCircuit, Rocket, Lock, MessageSquare, Sliders, ServerCog, Puzzle, TestTube2, SlidersHorizontal, GitPullRequest, Container, Workflow, FileUp
} from 'lucide-react';
import type { Tool } from '@/lib/types';
import { relationalDatabasesTools } from './database-backend-data/relational-databases';
import { nosqlDatabasesTools } from './database-backend-data/nosql-databases';
import { inMemoryDatabasesTools } from './database-backend-data/in-memory-databases';
import { analyticsOlapDatabasesTools } from './database-backend-data/analytics-olap-databases';
import { aiVectorDatabasesTools } from './database-backend-data/ai-vector-databases';
import { distributedDatabasesTools } from './database-backend-data/distributed-databases';
import { mobileDatabasesTools } from './database-backend-data/mobile-databases';
import { cloudManagedDatabasesTools } from './database-backend-data/cloud-managed-databases';
import { timeSeriesDatabasesTools } from './database-backend-data/time-series-databases';
import { backendFrameworksTools } from './database-backend-data/backend-frameworks';
import { apiDevelopmentTools } from './database-backend-data/api-development-tools';
import { authTools } from './database-backend-data/auth-tools';
import { baasTools } from './database-backend-data/baas-tools';
import { messageQueuesTools } from './database-backend-data/message-queues';
import { cachingSystemsTools } from './database-backend-data/caching-systems';
import { ormTools } from './database-backend-data/orm-tools';
import { backendTestingTools } from './database-backend-data/backend-testing-tools';
import { serverMonitoringTools } from './database-backend-data/server-monitoring-tools';
import { microservicesTools } from './database-backend-data/microservices-tools';
import { containerizationTools } from './database-backend-data/containerization-tools';
import { orchestrationTools } from './database-backend-data/orchestration-tools';
import { cicdPipelinesTools } from './database-backend-data/cicd-pipelines';
import { etlDataPipelinesTools } from './database-backend-data/etl-data-pipelines';
import { reverseEtlTools } from './database-backend-data/reverse-etl';
import { databaseMigrationTools } from './database-backend-data/database-migration-tools';
import { backupRecoveryTools } from './database-backend-data/backup-recovery-tools';
import { graphDatabasesTools } from './database-backend-data/graph-databases';
import { realTimeDatabasesTools } from './database-backend-data/real-time-databases';


export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const databaseBackendToolData: ToolCategory[] = [
    {
        title: "Relational Databases (SQL)",
        icon: <Database className="w-5 h-5 text-primary"/>,
        tools: relationalDatabasesTools
    },
    {
        title: "NoSQL Databases",
        icon: <Box className="w-5 h-5 text-primary"/>,
        tools: nosqlDatabasesTools
    },
    {
        title: "In-Memory Databases",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: inMemoryDatabasesTools
    },
    {
        title: "Analytics / OLAP Databases",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: analyticsOlapDatabasesTools
    },
    {
        title: "AI / Vector Databases",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: aiVectorDatabasesTools
    },
    {
        title: "Distributed Databases",
        icon: <Layers className="w-5 h-5 text-primary"/>,
        tools: distributedDatabasesTools
    },
    {
        title: "Mobile Databases",
        icon: <Smartphone className="w-5 h-5 text-primary"/>,
        tools: mobileDatabasesTools
    },
    {
        title: "Cloud-Managed Databases",
        icon: <Cloud className="w-5 h-5 text-primary"/>,
        tools: cloudManagedDatabasesTools
    },
    {
        title: "Time-Series Databases",
        icon: <LineChart className="w-5 h-5 text-primary"/>,
        tools: timeSeriesDatabasesTools
    },
    {
        title: "Backend Frameworks",
        icon: <Rocket className="w-5 h-5 text-primary"/>,
        tools: backendFrameworksTools
    },
    {
        title: "API Development Tools",
        icon: <Link2 className="w-5 h-5 text-primary"/>,
        tools: apiDevelopmentTools
    },
    {
        title: "Authentication &amp; Authorization",
        icon: <Lock className="w-5 h-5 text-primary"/>,
        tools: authTools
    },
    {
        title: "Backend-as-a-Service (BaaS)",
        icon: <Layers className="w-5 h-5 text-primary"/>,
        tools: baasTools
    },
    {
        title: "Message Queues &amp; Event Streaming",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: messageQueuesTools
    },
    {
        title: "Caching Systems",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: cachingSystemsTools
    },
    {
        title: "ORM &amp; Database Abstraction",
        icon: <Repeat className="w-5 h-5 text-primary"/>,
        tools: ormTools
    },
    {
        title: "Backend Testing Tools",
        icon: <TestTube2 className="w-5 h-5 text-primary"/>,
        tools: backendTestingTools
    },
    {
        title: "Server Management &amp; Monitoring",
        icon: <ServerCog className="w-5 h-5 text-primary"/>,
        tools: serverMonitoringTools
    },
    {
        title: "Microservices Tools",
        icon: <Puzzle className="w-5 h-5 text-primary"/>,
        tools: microservicesTools
    },
    {
        title: "Containerization Tools",
        icon: <Container className="w-5 h-5 text-primary"/>,
        tools: containerizationTools
    },
    {
        title: "Orchestration Tools",
        icon: <GitPullRequest className="w-5 h-5 text-primary"/>,
        tools: orchestrationTools
    },
    {
        title: "CI/CD Pipelines",
        icon: <Workflow className="w-5 h-5 text-primary"/>,
        tools: cicdPipelinesTools
    },
    {
        title: "ETL &amp; Data Pipelines",
        icon: <GitBranch className="w-5 h-5 text-primary"/>,
        tools: etlDataPipelinesTools
    },
    {
        title: "Reverse ETL",
        icon: <Database className="w-5 h-5 text-primary"/>,
        tools: reverseEtlTools
    },
    {
        title: "Database Migration Tools",
        icon: <GitBranch className="w-5 h-5 text-primary"/>,
        tools: databaseMigrationTools
    },
    {
        title: "Backup &amp; Recovery Tools",
        icon: <FileUp className="w-5 h-5 text-primary"/>,
        tools: backupRecoveryTools
    },
    {
        title: "Graph Databases",
        icon: <GitBranch className="w-5 h-5 text-primary"/>,
        tools: graphDatabasesTools
    },
    {
        title: "Real-time Database Systems",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: realTimeDatabasesTools
    }
];
