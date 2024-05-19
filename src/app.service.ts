import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    //code here

    return 'Hello World!';
  }
}
