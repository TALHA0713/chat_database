// Import necessary modules
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
// import { Chat } from 'src/chats/schema/chat.schema';

// Define the message class
@Schema()
export class Message extends Document {
  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  content: string;

  @Prop()
  @IsNotEmpty()
  @IsString()
  timestamp: string;

  @IsNotEmpty()
  @IsString()
  @Prop({
    required: true,
    type: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
  })
  sender: string[];

  @Prop({
    required: true,
    type: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
  })
  @IsNotEmpty()
  @IsString()
  recipient: string[];

  @Prop({
    required: true,
    type: [{ type: mongoose.Types.ObjectId, ref: 'Chat' }],
  })
  chats: string[];
}

export const MessageSchema = SchemaFactory.createForClass(Message);
