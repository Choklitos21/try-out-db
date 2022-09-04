import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from "./dto/user-response.dto";
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/createUser')
  @ApiBody({ type: [CreateUserDto] })
  @ApiOperation({ operationId: "createUser", description: "Create a user" })
  @ApiCreatedResponse({ description: "Response the user created", type: [UserResponseDto] })
  @ApiBadRequestResponse({ description: "Error trying to create a user" })
  createUser(@Body() userData: CreateUserDto) {
    return this.usersService.createUser(userData);
  }

  @Get('/findUsers')
  @ApiOperation({ operationId: "findUser", description: "Find al users" })
  @ApiBadRequestResponse({ description: "Error trying to find users" })
  findAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Get('findUser/:id')
  @ApiOperation({ operationId: "findUserByID", description: "Find user by ID" })
  @ApiBadRequestResponse({ description: "Error trying to find the user" })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch('updateUser/:id')
  @ApiOperation({ operationId: "updateUser", description: "Update user" })
  @ApiBadRequestResponse({ description: "Error trying to update the user" })
  update(@Param('id') id: string, @Body() newUser: UpdateUserDto) {
    return this.usersService.update(id, newUser);
  }

  @Delete('deleteUser/:id')
  @ApiOperation({ operationId: "deleteUser", description: "Delete user" })
  @ApiBadRequestResponse({ description: "Error trying to delete the user" })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
