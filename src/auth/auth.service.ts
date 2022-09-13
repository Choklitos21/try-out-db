import { UsersService } from '../users/users.service';
import { UserLoginDto } from './dto/user-login.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService
    ) {}

    async logUp(user: CreateUserDto) {
        const userCreated = await this.userService.createUser(user)
        delete userCreated.password
        return userCreated
    }

    async logIn(data: UserLoginDto) {
        const user = await this.userService.findOneByEmail(data.email)

        if(!user)
            throw new HttpException('User not found, try another email', HttpStatus.NOT_FOUND)
        
        if(!bcrypt.compareSync(data.password, user.password))
            throw new HttpException('Wrong password', HttpStatus.BAD_REQUEST)

        delete user.password
        return {
            ...user,
            token: 'nice'
        }
    }
}