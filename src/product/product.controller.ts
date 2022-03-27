/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get, Param, Delete, } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from '../product/product.service';
import { Product } from '@prisma/client';



@Controller('product')
export class ProductController {
  constructor(private service: ProductService) {}

  @Post('create-product-adm')
  createProductAdm(@Body() data: CreateProductDto): Promise<Product> {
    return this.service.create(data);
  }

  @Post('create-product')
  createProduct(@Body() data: CreateProductDto): Promise<Product> {
    return this.service.create(data);
  }

  @Get('find-all')
  findMany(): Promise<Product[]> {
    return this.service.findMany();
  }

  @Get('find/:id')
  findUnique(@Param('id') id: string): Promise<Product> {
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
