// user.service.ts
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { Neo4jService } from '../../config/neo4j.service';

@Injectable()
export class UserService {
  constructor(private readonly neo4jService: Neo4jService) {}

  async createUser(createUserDto: CreateUserDto) {
    return this.neo4jService.create('CREATE (u:User {name: $name, email: $email, cpf: $cpf}) RETURN u', createUserDto);
  }

  async deleteUserByCpf(cpf: number) {
    return this.neo4jService.runQuery('MATCH (u:User {cpf: $cpf}) DETACH DELETE u', { cpf });
  }

  async listUser() {
    return this.neo4jService.runQuery('MATCH (u:User) RETURN u', {});
  }

  async updateUserByCpf(params: object) {
    return this.neo4jService.runQuery('MATCH (u:User {cpf: $cpf}) SET u = $updateUserDto RETURN u', params);
  }

  async getTimeCardsByCpf(params: object) {
    const query = `
    MATCH (u:User {cpf: $cpf})-[:HAS_TIME_ENTRY]->(timeCard:TimeCard)
    RETURN COLLECT(timeCard) AS timeCards
  `;

    return this.neo4jService.runQuery(query, params);
  }

  async registerTimeCard(params: object) {
    const query = `
    MATCH (u:User {cpf: $cpf})
    CREATE (u)-[:HAS_TIME_ENTRY]->(timeCard:TimeCard {
      entryTime: $entryTime,
      exitTime: $exitTime
    })
    RETURN timeCard
  `;
    return this.neo4jService.runQuery(query, params);
  }
}
