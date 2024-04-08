import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductDto } from './dto/create.dto';
import { Product } from './schema/product.schema';
import { productService } from './products.service';

@Controller('product')
export class productController {
  constructor(private readonly productServices: productService) {}

  @Post('addProduct')
  async createProduct(@Body() productDto: ProductDto): Promise<Product> {
    // console.log('product');
    const product: Product = await this.productServices.addproduct(productDto);
    return product;
  }

  @Get('all')
  async getAllProduct(): Promise<Product[]> {
    return this.productServices.getProduct();
  }
  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<string> {
    await this.productServices.deleteOneProduct(id);
    return 'product delete successfully';
  }

  @Patch('id')
  async editProduct(
    @Param('id') id: string,
    @Body() ProductDto: ProductDto,
  ): Promise<Product> {
    return await this.productServices.editProduct(id, ProductDto);
  }
}
