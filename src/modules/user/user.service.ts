// user.service.ts
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { Neo4jService } from '../../config/neo4j.service';

@Injectable()
export class UserService {
  constructor(private readonly neo4jService: Neo4jService) {}

  async createUser(createUserDto: CreateUserDto) {
    return this.neo4jService.createUser(createUserDto);
  }
}
