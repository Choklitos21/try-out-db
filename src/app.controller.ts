import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { AppService } from './app.service';
import {CreateUserDto} from "./dto/createUser.dto";
import {plainToInstance} from "class-transformer";
import {ReadUserDto} from "./dto/readUserDto.dto";
import {User} from "./entities/user.entity";

@Controller('/dev')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/getAllUsers')
  getAllUser(): Promise<User[]> {
    return this.appService.getAllUsers()
  }

  @Post('/createUser')
  @UsePipes(new ValidationPipe({transform: true}))
  createUser(@Body() userData: CreateUserDto) {
    const respuesta = this.appService.createUser(userData);

    return plainToInstance(ReadUserDto, respuesta, {
      excludeExtraneousValues: true,
    });
  }
}
