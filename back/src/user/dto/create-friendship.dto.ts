import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Deed } from 'src/deeds/entities/deed.entity';

export class CreateUsersDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
