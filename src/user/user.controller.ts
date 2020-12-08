import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './interface/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post(`create`)
  async createUser(@Body() body) {
    console.log(body);
    this.userService.createUser(body);
  }

  @Get(`list`)
  async userList(): Promise<User[]> {
    return this.userService.userList();
  }
}
