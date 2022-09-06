import { LoginService } from './login.service';
import { LoginDto } from "./dto/login.dto";
import { ApiBadRequestResponse, ApiOperation } from "@nestjs/swagger";
import { Body, Controller, Post } from '@nestjs/common';

@Controller('/involve')
export class LoginController {
    constructor(private readonly loginService: LoginService) {
    }

    @Post('/joinUs')
    @ApiOperation({ operationId: "findUserByEmail", description: "Find user by Email" })
    @ApiBadRequestResponse({ description: "Error trying to find the user" })
    async newUser(@Body() user: LoginDto) {
        return await this.loginService.login(user);
    }

    @Post('/login')
    @ApiOperation({ operationId: "findUserByEmail", description: "Find user by Email" })
    @ApiBadRequestResponse({ description: "Error trying to find the user" })
    async login(@Body() user: LoginDto) {
        return await this.loginService.login(user);
    }
}