import { Body, Controller, Get, HttpException, Post, Req, UseGuards } from '@nestjs/common';
import { AuthPayloadDto, RegisterPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }

  @Post('login')
  // @UseGuards(LocalGuard)
  login(@Body() authPayload: AuthPayloadDto): Promise<{token: string}> {
    return this.authService.login(authPayload);
  }

  @Post('register')
  register(@Body() registerPayload: RegisterPayloadDto): Promise<{token: string}> {
    return this.authService.register(registerPayload);
  }
}
