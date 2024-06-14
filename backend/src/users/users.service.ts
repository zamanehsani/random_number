import { Injectable, Get } from '@nestjs/common';

@Injectable()
export class UsersService {

  welcome(){
    return "Hi there, Welcome to my app..."
  }

  register(){
    return {status: "we have got your request"}
  }
}
