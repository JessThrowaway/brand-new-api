import { Type } from 'class-transformer';

export class FetchUsersDto {
  user_color: string;

  user_name: string;

  user_age: number;

  constructor(user: any) {
    this.user_color = user.color;
    this.user_name = user.name;
    this.user_age = user.age;
  }
}

export class FetchUsersResponseDto {
  @Type(() => FetchUsersDto)
  data: FetchUsersDto[];
}
