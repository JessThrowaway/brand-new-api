import { Injectable } from '@nestjs/common';
import { UserAge, UserColor, UserName } from '../constants';

@Injectable()
export class UserService {
  getUsersColor(): UserColor {
    return UserColor.USER1;
  }

  getUsersName(): UserName {
    return UserName.USER2;
  }

  getUsersAge(): UserAge {
    return UserAge.USER2;
  }
}
