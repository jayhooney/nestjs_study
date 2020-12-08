import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { User } from './interface/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post(`create`)
  async createUser(@Body() body) {
    console.log(typeof body.userId);
    console.log(body.userId);
    console.log(typeof body.userName);
    console.log(body.userName);
    this.userService.createUser(body);
  }

  @Get(`list`)
  async userList(): Promise<User[]> {
    return this.userService.userList();
  }

  @Get(`aUser`)
  async aUser(@Query('userId') userId: number): Promise<User> {
    console.log(typeof userId);
    console.log(userId);
    return this.userService.aUser(userId);
  }
}
