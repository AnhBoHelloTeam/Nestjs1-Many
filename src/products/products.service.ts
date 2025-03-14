import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductParams } from './products.controller';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepostory: Repository<Product>,
  ) {}

  getAll(): Promise<Product[]> {
    return this.productRepostory.find();
  }

  getDetail(id: number) {
    return this.productRepostory.findOneBy({ id });
  }

  createProduct(params: ProductParams) {
    const productNew = new Product();
    productNew.name = params.name;
    productNew.image = params.image;
    productNew.description = params.description;
    productNew.quantity = 124;
    productNew.price = params.price;
    productNew.status = true;
    return this.productRepostory.save(productNew);
  }
}
