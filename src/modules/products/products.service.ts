import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { throwError } from 'rxjs';
import { CreateProductDto, UpdateProductDto } from './models/product.dto';

@Injectable()
export class ProductsService {
  private countId = 3;
  private products: any[] = [
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

  add(payload: any) {
    const product = payload;
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

  findAll(): any[] {
    return this.products;
  }

  findOneById(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  update(id: number, payload: UpdateProductDto): UpdateProductDto {
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
