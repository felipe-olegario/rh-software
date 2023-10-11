import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from 'src/modules/user/dto/user.dto';
export declare class Neo4jService implements OnModuleInit, OnModuleDestroy {
    private readonly driver;
    private session;
    constructor();
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    createUser(createUserDto: CreateUserDto): Promise<any>;
    runCypherQuery(query: string, params?: Record<string, any>): Promise<any>;
    close(): Promise<void>;
}
