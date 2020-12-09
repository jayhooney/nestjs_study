import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import * as UserDTO from './DTO/user.dto';
import { User } from './interface/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post(`create`)
  async createUser(@Body() createUserData: UserDTO.CreateUserDTO) {
    this.userService.createUser(createUserData);
  }

  @Get(`list`)
  async userList(): Promise<User[]> {
    return this.userService.userList();
  }

  @Get(`aUser`)
  async aUser(@Query('userId') userId: number): Promise<User> {
    return this.userService.aUser(userId);
  }
}
