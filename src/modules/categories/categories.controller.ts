import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }

  @Get('categoriesDestructuring/:categoryId/products/:productId')
  getCategoryDestructuring(
    @Param()
    { categoryId, productId }: { categoryId: string; productId: string },
  ) {
    return `Product ${productId}, Category ${categoryId}`;
  }
}
