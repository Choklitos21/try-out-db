import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
import {ApiBadRequestResponse, ApiOperation} from "@nestjs/swagger";

@Controller('/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('/login')
    @ApiOperation({ operationId: "findUserByEmail", description: "Find user by Email" })
    @ApiBadRequestResponse({ description: "Error trying to find the user" })
    async login(@Body() user: UserLoginDto) {
        return await this.authService.login(user);
    }
}