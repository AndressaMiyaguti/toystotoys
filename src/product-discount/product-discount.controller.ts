import { Body, Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { CreateProductDiscountDto } from './dto/product-discount.dto';
import { ProductDiscountService } from './product-discount.service';
import { ProductDiscount } from '@prisma/client';

@Controller('product-descount')
export class ProductDiscountController {
  constructor(private service: ProductDiscountService) {}

  @Post('create-product-discount')
  createProductDiscountAdm(
    @Body() data: CreateProductDiscountDto,
  ): Promise<ProductDiscount> {
    return this.service.create(data);
  }

  @Post('create-product-discount')
  createProductDiscount(
    @Body() data: CreateProductDiscountDto,
  ): Promise<ProductDiscount> {
    return this.service.create(data);
  }

  @Get('find-all')
  findMany(): Promise<ProductDiscount[]> {
    return this.service.findMany();
  }

  @Get('find/:id')
  findUnique(@Param('id') id: string): Promise<ProductDiscount> {
    return this.service.findUnique(id);
  }

  @Delete('delete/:id')
  deleteOneAdm(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }

  @Delete('delete/:id')
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
}
