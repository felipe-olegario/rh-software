import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Neo4jModule } from './config/neo4j.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), Neo4jModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
