// user.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: [{ type: mongoose.Types.ObjectId, ref: 'Product' }] })
  products: string[]; // path
}

export const UserSchema = SchemaFactory.createForClass(User);
