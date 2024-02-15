import { IsEmail, IsString } from 'class-validator';

export class HotelsDto {
  @IsEmail()
  email: string;

  @IsString()
  text: string;
}
