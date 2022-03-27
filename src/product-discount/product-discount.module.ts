import { Module } from '@nestjs/common';
import { ProductDiscountController } from './product-discount.controller';
import { ProductDiscountService } from './product-discount.service';

@Module({
  controllers: [ProductDiscountController],
  providers: [ProductDiscountService],
})
export class ProductDiscountModule {}
