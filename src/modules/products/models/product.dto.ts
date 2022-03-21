import { PartialType } from '@nestjs/mapped-types';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly price: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  readonly stock?: number;

  @IsUrl()
  readonly image?: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
  image?: string;
}
