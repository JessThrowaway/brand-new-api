import { Module } from '@nestjs/common';
import { UserController } from './users/controllers/user.controller';
import { UserService } from './users/services/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
