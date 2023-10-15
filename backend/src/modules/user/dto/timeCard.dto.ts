import { ApiProperty } from '@nestjs/swagger';
import { IsDateString } from 'class-validator';

export class CreateTimeCardDto {
  @ApiProperty()
  @IsDateString({ strict: true})
  entryTime: string;

  @ApiProperty()
  @IsDateString({ strict: true})
  exitTime: string;
}
