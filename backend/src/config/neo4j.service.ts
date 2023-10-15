// neo4j.service.ts
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import neo4j, { Driver, Session } from 'neo4j-driver';
import { CreateUserDto } from 'src/modules/user/dto/user.dto';

@Injectable()
export class Neo4jService implements OnModuleInit, OnModuleDestroy {
  private readonly driver: Driver;
  private session: Session;

  constructor() {
    this.driver = neo4j.driver(
      'bolt://localhost:7687',
      neo4j.auth.basic('neo4j', 'password'),
    );
  }

  async onModuleInit() {
    this.session = this.driver.session();
    // await this.session.run('CREATE CONSTRAINT FOR (u:User) REQUIRE u.cpf IS UNIQUE');
  }

  async onModuleDestroy() {
    await this.session.close();
    await this.driver.close();
  }

  async create(query: string, data: any) {
    const result = await this.session.run(query, data);

    return result.records[0].get('u').properties;
  }

  async runQuery(
    query: string,
    params: Record<string, any> = {},
  ): Promise<any> {
    const result = await this.session.run(query, params);
    return result
  }
}
