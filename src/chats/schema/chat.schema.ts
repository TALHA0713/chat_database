// chat.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { IsNotEmpty, ArrayMaxSize, IsString } from 'class-validator';

@Schema()
export class Chat extends Document {
  @Prop({ type: [{ type: mongoose.Types.ObjectId, ref: 'User' }] })
  users: string[]; // users

  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
