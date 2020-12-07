import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { query } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(`getUser`)
  aUser(@Query() query): any {
    return this.appService.getUser(query);
  }

  @Get('getUsers')
  allUser(@Query() query): any {
    return this.appService.getUsers(query);
  }

  @Post('createUser')
  addUser(@Body() body): any {
    return this.appService.createUser(body);
  }

  @Delete(`deleteUser`)
  deleteUser(@Query() query): any {
    return this.appService.deleteUser(query);
  }

  @Put(`updateUser`)
  updateUser(@Body() body): any {
    return this.appService.updateUser(body);
  }
}
