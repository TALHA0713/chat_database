import { Injectable } from '@nestjs/common';
import { Chat } from './schema/chat.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatDto } from './dto/create.dto';
import { User } from 'src/users/schema/user.schema';
// import { promises } from 'dns';

@Injectable()
export class chatService {
  constructor(
    @InjectModel(Chat.name) private readonly chatModel: Model<Chat>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(chatdto: ChatDto): Promise<Chat> {
    // console.log('working');

    const chat: Chat = new this.chatModel(chatdto);
    return chat.save();
  }

  async getChat(): Promise<Chat[]> {
    return this.chatModel.find().exec();
  }

  async chatUpdate(id: string, chatdto: ChatDto): Promise<Chat> {
    return this.chatModel.findByIdAndUpdate(id, chatdto).exec();
  }

  async getSingleChat(id: string): Promise<Chat> {
    const chat: Chat = await this.chatModel
      .findById(id)
      .populate({
        path: 'users',
        model: this.userModel,
        populate: {
          path: 'products',
          model: 'Product',
        },
      })
      .exec();

    //        // Filter chats that have a user with the name 'Zohiab' in the populated 'users' array
    //   const chatsWithUserZohiab: Chat[] = chats.filter((chat: Chat) =>
    //     chat.users.some((user: User) => user.name === 'Zohiab')
    //   );

    return chat;
  }
}
