import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get('user-color')
  getUserColor(): string[] {
    return this.appService.getUsersColor();
  }

  @Get('user-name')
  getUserName(): string[] {
    return this.appService.getUsersName();
  }

  @Get('user-age')
  getUserAge(): string[] {
    return this.appService.getUsersAge();
  }
}
