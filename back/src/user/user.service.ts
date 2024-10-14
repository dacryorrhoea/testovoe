import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  addFriend() {
    return 'pip'
  }

  viewAllUser(): Promise<User[]> {
    return this.userRepository.find({ select: { username: true } });
  }

  viewUser(username: string): Promise<User> {
    return this.userRepository.findOne({ 
      where: { username }, 
      relations: { deeds: true },
    });
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.username = createUserDto.username;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    return this.userRepository.save(user);
  }

  updateUser(user: any, updateUserDto: UpdateUserDto): Promise<User> {
    const newUser: User = new User();
    user.id = user.id;
    user.username = updateUserDto.username;
    user.email = updateUserDto.email;
    user.password = user.password;
    return this.userRepository.save(user);
  }

  removeUser(id: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
  }
}