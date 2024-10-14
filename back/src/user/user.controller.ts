import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Post('/add_friend/')
  // @UseGuards(AuthGuard('jwt'))
  addToFriend(@Req() req: any) {
    return 'pip'
  }


  @Get()
  @UseGuards(AuthGuard('jwt'))
  getUser(@Req() req: any) {
    return req.user;
  }

  @Get('/all')
  findAll() {
    return this.userService.viewAllUser();
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.userService.viewUser(username);
  }


  @Patch()
  @UseGuards(AuthGuard('jwt'))
  update(@Req() req: any, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(req.user, updateUserDto);
  }

  @Delete()
  @UseGuards(AuthGuard('jwt'))
  remove(@Req() req: any) {
    return this.userService.removeUser(req.user.id);
  }
}