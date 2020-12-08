import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  helloNestJS(): string {
    return 'HELLO NestJS !';
  }
}
