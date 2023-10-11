import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Neo4jModule } from './config/neo4j.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), Neo4jModule, Neo4jModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
