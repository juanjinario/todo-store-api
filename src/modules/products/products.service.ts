import { Injectable } from '@nestjs/common';
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

  findAll(): Product[] {
    return this.products;
  }

  findOneById(id: number) {
    return this.products.find((product) => product.id === id);
  }

  update(id: number, payload: Product): Product {
    const index = this.products.findIndex((product) => product.id === id);
    if (index > -1) {
      this.products[index] = {
        ...this.products[index],
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }
}
