import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  aUser(): string {
    return 'this is aUser service!';
  }

  allUser(): string {
    return 'this is allUser service!';
  }

  addUser(): string {
    return 'this is addUser service!';
  }

  deleteUser(): string {
    return 'this is deleteUser service!';
  }

  updateUser(): string {
    return 'this is updateUser service!';
  }
}
