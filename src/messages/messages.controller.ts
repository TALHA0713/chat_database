// message.controller.ts

import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { MessageDto } from './dto/create.dto';
import { MessageService } from './messages.service';
import { Message } from './schema/message.schema';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  async getAllMessages(): Promise<Message[]> {
    return this.messageService.getAllMessages();
  }

  @Post('addMessage')
  async createMessage(@Body() messageDto: MessageDto): Promise<Message> {
    console.log(messageDto);

    return this.messageService.createMessage(messageDto);
  }

  @Patch(':id')
  async updateMessage(
    @Param('id') id: string,
    @Body() messageDto: MessageDto,
  ): Promise<Message> {
    return this.messageService.updateMessage(id, messageDto);
  }

  @Get(':id')
  async singleMessage(@Param('id') id: string): Promise<Message> {
    console.log(id);

    return this.messageService.singleMessage(id);
  }

  @Delete(':id')
  async deleteMessage(@Param('id') id: string): Promise<Message> {
    return this.messageService.deleteMessage(id);
  }
}
