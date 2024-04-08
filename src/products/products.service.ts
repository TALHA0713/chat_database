import { Product } from './schema/product.schema';
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductDto } from './dto/create.dto';
import { InjectModel } from '@nestjs/mongoose';
import { log } from 'console';

@Injectable()
export class productService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async addproduct(productDto: ProductDto): Promise<Product> {
    // console.log('can be product');
    const productcreate = new this.productModel(productDto);
    const product: Product = await productcreate.save();
    return product;
  }

  async getProduct(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async deleteOneProduct(id: string): Promise<String> {
    const deletedProduct = await this.productModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return 'produt delete';
  }
  async editProduct(id: string, productDto: ProductDto): Promise<Product> {
    const updateProduct: Product = await this.productModel.findByIdAndUpdate(
      id,
      productDto,
    );
    if (!updateProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return updateProduct;
  }
}
