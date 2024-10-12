import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthPayloadDto, RegisterPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from 'src/user/entities/user.entity';


@Injectable()
export class AuthService {
  constructor (
    private jwtService: JwtService,
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}
  
  async login({ username, password }: AuthPayloadDto): Promise<{token: string}> {
    const user = await this.userRepository.findOne({ where: { username } });

    if (!user) throw new UnauthorizedException('Invalid email or password');
    if (user.password !== password) throw new UnauthorizedException('Invalid email or password');

    const token = this.jwtService.sign({id: user.id});
    return { token };
  }

  async register({username, email, password}: RegisterPayloadDto): Promise<{token: string}> {
    const user = await this.userRepository.create({
      username,
      email,
      password
    });

    await this.userRepository.save(user);

    const token = this.jwtService.sign({ id: user.id })

    return { token };
  }
}
