import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService){  }
  
  @Get()
  welcome(){
    return this.usersService.welcome();
  }

  @Post()
  register(){
    return this.usersService.register();
  }
}
