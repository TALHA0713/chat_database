// chat.dto.ts
import {
  IsNotEmpty,
  IsString,
  ArrayMinSize,
  ArrayMaxSize,
} from 'class-validator';

export class ChatDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @ArrayMinSize(1)
  @ArrayMaxSize(100)
  users: string[];
}
