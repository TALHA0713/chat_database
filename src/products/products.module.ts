import { Module } from '@nestjs/common';
import { productService } from './products.service';
import { productController } from './products.controller';
import { ProductSchema } from './schema/product.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [productController],
  providers: [productService],
  exports: [productService],
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
})
export class ProductsModule {}
