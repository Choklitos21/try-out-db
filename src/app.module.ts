import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";
import { UsersModule } from './users/users.module';
import * as Joi from "joi";
import {AuthModule} from "./auth/auth.module";

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: [
              '.env',
              '.env.development',
              '.env.staging',
              '.env.test',
              '.env.production',
          ],
          validationSchema: Joi.object({
              NODE_ENV: Joi.string()
                  .valid('development', 'production', 'test', 'staging')
                  .default('development'),
              ENVIRONMENT: Joi.string(),
              PORT: Joi.number().default(3000),
          }),
      }),
      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => ({
              name: 'default',
              type: 'postgres',
              host: configService.get('PGHOST'),
              port: configService.get<number>('PGPORT'),
              database: configService.get('PGDATABASE'),
              username: configService.get('PGUSER'),
              password: configService.get('PGPASSWORD'),
              autoLoadEntities: true,
              synchronize: configService.get<boolean>('SYNC'),
              logging: configService.get('ENVIRONMENT') !== 'production',
          }),
      }),
      UsersModule,
      AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
