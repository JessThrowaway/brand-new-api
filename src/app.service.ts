import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getGreenUsers(): string[] {
    return ['userOne', 'userTwo'];
  }
}
