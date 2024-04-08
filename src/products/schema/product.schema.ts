// product.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price: number;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  description: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
