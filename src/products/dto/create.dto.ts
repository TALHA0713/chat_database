// product.dto.ts
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price: number;

  @IsNotEmpty()
  @IsString()
  description: string;
}
