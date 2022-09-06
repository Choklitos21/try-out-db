import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import {UsersModule} from "../users/users.module";
import {AuthService} from "../auth/auth.service";

@Module({
    imports: [UsersModule, AuthService],
    providers: [LoginService],
    controllers: [LoginController],
})
export class LoginModule { }