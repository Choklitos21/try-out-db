import { Injectable } from '@nestjs/common';
import {User} from "./entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class AppService {
  constructor(
      @InjectRepository(User)
      private readonly userRepo: Repository<User>
  ) {
  }

  getHello(): string {
    return 'Hello World!';
  }

  async createUser(userData: User): Promise<User> {
    return await this.userRepo.save(userData)
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepo.find()
  }
}
