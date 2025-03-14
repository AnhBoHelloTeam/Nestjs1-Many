import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  // Lấy tất cả danh mục và sản phẩm của một danh mục cụ thể
  @Get('/')
  async getDefaultCategory() {
    const category = await this.categoryService.getOneById(2);
    const products = category?.products;
    return {
      message: 'get default category',
      data: products,
    };
  }


  // Lấy danh mục theo id
  @Get('/:id')
  async getCategoryById(@Param('id') id: number) {
    const category = await this.categoryService.getOneById(id);
    const products = category?.products;
    return {
      message: `get category ${id}`,
      data: products,
    };
  }
}
