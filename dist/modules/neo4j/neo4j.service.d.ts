export declare class Neo4jService {
    private readonly driver;
    constructor();
    runCypherQuery(query: string, params?: Record<string, any>): Promise<any>;
    close(): Promise<void>;
}
