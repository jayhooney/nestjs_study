import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private readonly logger = new Logger(AppController.name);

  @Get()
  async helloNestJS(): Promise<string> {
    this.logger.log(`NORMAL LOG`);
    this.logger.debug(`DEBUG LOG`);
    this.logger.warn(`WARN LOG`);
    this.logger.error(`ERROR LOG`);
    this.logger.verbose(`VERBOSE LOG`);

    return this.appService.helloNestJS();
  }
}
