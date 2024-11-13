import { IsEmail, IsNotEmpty } from 'class-validator';

// checks if the user is sending correct type of inputs
export class LoginUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}