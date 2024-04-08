import { Module } from '@nestjs/common';
import { MessageController } from './messages.controller';
import { MessageService } from './messages.service';
import { MessageSchema } from './schema/message.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [MessageController],
  providers: [MessageService],
  imports: [
    MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }]),
  ],
})
export class MessagesModule {}
