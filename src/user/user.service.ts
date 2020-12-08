import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  public createUser(user: User): void {
    this.users.push(user);
    return;
  }

  public userList(): User[] {
    return this.users;
  }

  public aUser(userId: number): User {
    return this.aUser[userId];
  }
}
