import { UsersService } from "../users/users.service";
import { UserLoginDto } from './dto/user-login.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService
    ) {}

    async login(userLogin: UserLoginDto) {
        try {
            const userExist = await this.userService.findOneByEmail(userLogin.email);
            const isMatch = await bcrypt.compare(userLogin.password, userExist.password);
            if (isMatch) {
                return "El usuario existe";
            }else{
                return "El usuario no existen o la contraseña no es correcta";
            }
        } catch (e) {
            throw new HttpException('User cannot be found', HttpStatus.NOT_FOUND)
        }
    }

}