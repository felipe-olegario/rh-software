import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Neo4jModule } from 'src/config/neo4j.module';

@Module({
  imports: [Neo4jModule],
  providers: [UserService],
  exports: [UserModule],
  controllers: [UserController],
})
export class UserModule {}
