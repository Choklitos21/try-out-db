import { Body, Controller, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';

@ApiTags('Auth')
@Controller('/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/login')
    @ApiOperation({ operationId: "findUserByEmail", description: "Find user by Email" })
    @ApiBadRequestResponse({ description: "Error trying to find the user" })
    async login(@Body() user: UserLoginDto) {
        return await this.authService.logIn(user);
    }

    @Post('/register')
    @ApiOperation({ operationId: "findUserByEmail", description: "Find user by Email" })
    @ApiBadRequestResponse({ description: "Error trying to find the user" })
    async register(@Body() user: CreateUserDto) {
        return await this.authService.logUp(user);
    }
}