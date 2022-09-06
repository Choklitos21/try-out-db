import { LoginDto } from './dto/login.dto';
import { AuthService } from "../auth/auth.service";
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
    constructor(
        private readonly authService: AuthService
    ) {}

    async register(userLogin: LoginDto) {
        try {

        } catch (e) {
            throw new HttpException('User cannot be found', HttpStatus.NOT_FOUND)
        }
    }

    async login(userLogin: LoginDto) {
        try {

        } catch (e) {
            throw new HttpException('User cannot be found', HttpStatus.NOT_FOUND)
        }
    }

}