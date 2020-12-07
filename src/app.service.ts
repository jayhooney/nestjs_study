import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUser(query: any): any {
    return query;
  }

  getUsers(query: any): any {
    return query;
  }

  createUser(body: any): any {
    return body;
  }

  deleteUser(query: any): any {
    return query;
  }

  updateUser(body: any): any {
    return body;
  }
}
