import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('green-users')
  getGreenUsers(): string[] {
    return this.appService.getGreenUsers();
  }
}
