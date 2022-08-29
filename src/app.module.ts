import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import {User} from "./entities/user.entity";

@Module({
  imports: [
      ConfigModule.forRoot({isGlobal: true}),
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.PGHOST,
        port: +process.env.PGPORT,
        database: process.env.PGDATABASE,
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        autoLoadEntities: true,
        synchronize: true,
      }),
      TypeOrmModule.forFeature([User])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
