import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsersColor(): string[] {
    return ['users color here'];
  }

  getUsersName(): string[] {
    return ['users name here'];
  }

  getUsersAge(): string[] {
    return ['users age here'];
  }

  // getUserInfo(color: string, name: string, age: number) {
  //   const color = 'string';
  //   const name = 'string';
  //   const age = 8;
  //   return {
  //     color: 'soemthing',
  //     name: 'something too',
  //     age: 3,
  //   };
  // }
}
