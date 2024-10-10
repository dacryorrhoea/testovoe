import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const Users = [
  {
    id: 1,
    username: 'Anon',
    password: '1234'
  },
  {
    id: 2,
    username: 'Anton',
    password: '1234'
  }
]

@Injectable()
export class AuthService {
  constructor (private jwtService: JwtService) {}

  validateUser({username, password}: AuthPayloadDto) {
    const findedUser = Users.find(user => user.username === username);
    if (!findedUser) {return null};
    if (findedUser.password === password) {
      const {password, ...user } = findedUser
      return this.jwtService.sign(user)
    }
  }
}
