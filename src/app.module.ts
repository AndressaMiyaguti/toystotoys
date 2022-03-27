import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ProductDiscountModule } from './product-discount/product-discount.module';

@Module({
  imports: [UserModule, ProductModule, ProductDiscountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
