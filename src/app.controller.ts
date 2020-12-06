import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(`aUser`)
  aUser(): string {
    return this.appService.aUser();
  }

  @Get('allUser')
  allUser(): string {
    return this.appService.allUser();
  }

  @Post('addUser')
  addUser(): string {
    return this.appService.addUser();
  }

  @Delete(`deleteUser`)
  deleteUser(): string {
    return this.appService.deleteUser();
  }

  @Put(`updateUser`)
  updateUser(): string {
    return this.appService.updateUser();
  }
}
