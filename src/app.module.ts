import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {User} from "./entities/user.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
const process = require('process')

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'containers-us-west-81.railway.app',
      port: 8008,
      username: 'postgres',
      password: 'iNqC0jzu7fg5S5EVcI22',
      database: 'railway',
      retryDelay: 3000,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
