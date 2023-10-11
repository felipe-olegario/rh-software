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
      neo4j.auth.basic('username', 'password'),
    );
  }

  async onModuleInit() {
    this.session = this.driver.session();
  }

  async onModuleDestroy() {
    await this.session.close();
  }

  async createUser(createUserDto: CreateUserDto) {
    const result = await this.session.run(
      'CREATE (u:User {name: $name, email: $email}) RETURN u',
      {
        name: createUserDto.name,
        email: createUserDto.email,
      },
    );

    return result.records[0].get('u').properties;
  }

  async runCypherQuery(
    query: string,
    params: Record<string, any> = {},
  ): Promise<any> {
    try {
      const result = await this.session.run(query, params);
      return result.records.map((record) => record.toObject());
    } finally {
      this.session.close();
    }
  }

  async close() {
    await this.driver.close();
  }
}
