import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserAge, UserColor, UserName } from '../constants';

@Controller('/users')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get('user-color')
  getUserColor(): UserColor {
    return this.appService.getUsersColor();
  }

  @Get('user-name')
  getUserName(): UserName {
    return this.appService.getUsersName();
  }

  @Get('user-age')
  getUserAge(): (UserAge.USER1 | UserAge.USER2)[] {
    return this.appService.getUsersAge();
  }
}
