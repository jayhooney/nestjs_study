import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entity/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(`aUser`)
  async aUser(@Param() params): Promise<User> {
    return await this.appService.getUser(params.userId);
  }

  @Get('allUser')
  async allUser(): Promise<User[]> {
    return await this.appService.getUsers();
  }

  @Post('addUser')
  async addUser(@Body() body): Promise<string> {
    return await this.appService.createUser();
  }

  @Delete(`deleteUser`)
  async deleteUser(@Param() params): Promise<string> {
    return await this.appService.deleteUser();
  }

  @Put(`updateUser`)
  async updateUser(@Body() body): Promise<string> {
    return await this.appService.updateUser();
  }
}
