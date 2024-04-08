import { Module } from '@nestjs/common';
import { chatController } from './chats.controller';
import { chatService } from './chats.service';
import { ChatSchema } from './schema/chat.schema';
import { MongooseModule } from '@nestjs/mongoose';
// import { UserModule } from 'src/users/users.module';
import { UserSchema } from 'src/users/schema/user.schema';

@Module({
  controllers: [chatController],
  providers: [chatService],
  imports: [
    MongooseModule.forFeature([{ name: 'Chat', schema: ChatSchema }]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
})
export class ChatsModule {}
