// message.dto.ts
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class MessageDto {
  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  sender: string[];

  @IsNotEmpty()
  @IsString()
  recipient: string[];

  // @IsNotEmpty()
  // @IsString()
  // timestamp: string;

  @IsNotEmpty()
  @ArrayMinSize(1)
  @ArrayMaxSize(100)
  @IsString()
  chats: string[];
}
