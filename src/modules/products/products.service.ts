import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { throwError } from 'rxjs';
import { Product } from './models/product';

@Injectable()
export class ProductsService {
  private countId = 3;
  private products: Product[] = [
    {
      id: 1,
      name: 'holardo',
      price: 222,
      description: 'descripcion trucha',
    },
    {
      id: 2,
      name: 'maní',
      price: 10.75,
      description: 'descripcion del 2do producto',
    },
  ];

  add(product: Product) {
    const newProduct = {
      id: this.countId,
      ...product,
    };
    this.products.push(newProduct);
    this.countId++;
    return newProduct;
  }

  delete(id: number): string {
    const index = this.products.findIndex((product) => product.id === id);
    if (index < 0) {
      throw new HttpException(
        `Product #${id} not found for delete`,
        HttpStatus.NOT_FOUND,
      );
    }
    this.products.splice(index, 1);
    return 'Ok';
  }

  findAll(): Product[] {
    return this.products;
  }

  findOneById(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  update(id: number, payload: Product): Product {
    const index = this.products.findIndex((product) => product.id === id);
    if (index < 0) {
      throw new HttpException(
        `Product #${id} not found for update`,
        HttpStatus.NOT_FOUND,
      );
    }
    this.products[index] = {
      ...this.products[index],
      ...payload,
    };
    return this.products[index];
  }
}
