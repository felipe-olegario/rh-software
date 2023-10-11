import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
export declare class Neo4jService implements OnModuleInit, OnModuleDestroy {
    private readonly driver;
    private session;
    constructor();
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    runCypherQuery(query: string, params?: Record<string, any>): Promise<any>;
    close(): Promise<void>;
}
