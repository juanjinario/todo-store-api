import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { OwnParseIntPipe } from 'src/shared/pipe/own-parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from './models/product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Delete(':id')
  delete(@Param('id', new OwnParseIntPipe()) id: number): string {
    return this.productService.delete(id);
  }

  @Get()
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): any[] {
    // return `products limit => ${limit}, offset => ${offset}, brand => ${brand}`;
    return this.productService.findAll();
  }

  @Get('filter')
  getFilter(): string {
    return 'yo soy filter ordenado de rutas';
  }

  @Get(':id')
  getOneById(@Param('id', new ParseIntPipe()) id: number): any {
    return this.productService.findOneById(id);
  }

  // @Get('products')
  // getProduct(@Query() parameters: any): string {
  //   const { limit, offset } = parameters;
  //   return `products limit => ${limit}, offset => ${offset}`;
  // }

  @Post()
  create(@Body() payload: CreateProductDto): CreateProductDto {
    return this.productService.add(payload);
  }

  @Put(':id')
  update(
    @Body() payload: UpdateProductDto,
    @Param('id', new ParseIntPipe()) id: number,
  ): UpdateProductDto {
    return this.productService.update(id, payload);
  }
}
