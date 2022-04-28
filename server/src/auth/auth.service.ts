import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/user/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.usersService.findOneByName(username);

    if (user) {
      const matched = bcrypt.compareSync(password, user.password);
      if (matched) {
        return user;
      }
    }
    return null;
  }
}
