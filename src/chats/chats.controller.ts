import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ChatDto } from './dto/create.dto';
import { Chat } from './schema/chat.schema';
import { chatService } from './chats.service';

@Controller('chat')
export class chatController {
  constructor(private readonly chatService: chatService) {}

  @Post('addChat')
  async createChat(@Body() chatdto: ChatDto): Promise<Chat> {
    // console.log(chatdto);
    return this.chatService.create(chatdto);
  }

  @Get()
  async getAllChat(): Promise<Chat[]> {
    return this.chatService.getChat();
  }

  @Get(':id')
  async getSinglechat(@Param('id') id: string): Promise<Chat> {
    // console.log(id);
    return this.chatService.getSingleChat(id);
  }

  @Patch(':id')
  async chatUpdateHere(
    @Param('id') id: string,
    @Body() chatDto: ChatDto,
  ): Promise<Chat> {
    return this.chatService.chatUpdate(id, chatDto);
  }
}
