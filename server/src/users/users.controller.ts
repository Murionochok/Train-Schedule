import { Body, Controller, Post } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UsersService } from './users.service';
import { InsertUser } from './dto/interfaces';
import { Public } from 'src/auth/decorators/auth.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Public()
  @Post()
  async signupUser(@Body() userData: InsertUser): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
