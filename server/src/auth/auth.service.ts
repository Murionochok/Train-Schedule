import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.user({ email: email });
    console.log(user);
    const passwordHash = await bcrypt.hash(pass, user.password_salt);
    if (user?.password !== passwordHash) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.full_name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
