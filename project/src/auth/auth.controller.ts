import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { AuthPayloadDto, RegisterPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}

  @Post('login')
    login(@Body() authPayload: AuthPayloadDto) {
      const user = this.authService.validateUser(authPayload);

      if(!user) throw new HttpException('Invalid username or password.', 401);

      return user;
    }

  @Post('register')
    register(@Body() registerPayload: RegisterPayloadDto) {
      const isCreated = this.authService.validateRegisterData(registerPayload);

      if(!isCreated) throw new HttpException('Email already exist.', 401);

      return 'Succesfull';
    }
}
