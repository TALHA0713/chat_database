// message.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageDto } from './dto/create.dto';
import { Message } from './schema/message.schema';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private readonly messageModel: Model<Message>,
  ) {}

  async getAllMessages(): Promise<Message[]> {
    return this.messageModel.find().exec();
  }

  async singleMessage(id: string): Promise<Message> {
    return this.messageModel
      .findById(id)
      .populate({
        path: 'sender',
        model: 'User',
        select: 'name',
      })
      .populate({
        path: 'chats',
        model: 'Chat',
        select: 'name',
      })
      .exec();
  }

  async createMessage(messageDto: MessageDto): Promise<Message> {
    const createdMessage = new this.messageModel(messageDto);
    return createdMessage.save();
  }

  async updateMessage(id: string, messageDto: MessageDto): Promise<Message> {
    console.log(id);

    return this.messageModel.findByIdAndUpdate(id, messageDto).exec();
  }

  async deleteMessage(id: string): Promise<Message> {
    return this.messageModel.findByIdAndDelete(id).exec();
  }
}
