import { IsString, IsEmail, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  cpf: number;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  name: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty()
  email: string;
}