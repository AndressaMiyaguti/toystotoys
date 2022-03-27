import { Module } from '@nestjs/common';
import { ProductDiscountController } from './product-discount.controller';
import { ProductDiscountService } from './product-discount.service';
import { PrismaService } from './../prisma.service';
@Module({
  controllers: [ProductDiscountController],
  providers: [ProductDiscountService, PrismaService],
})
export class ProductDiscountModule {}
