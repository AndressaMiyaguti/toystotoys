import { PrismaService } from './../prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, ProductDiscount } from '@prisma/client';

@Injectable()
export class ProductDiscountService {
  constructor(private db: PrismaService) {}

  async create(
    data: Prisma.ProductDiscountCreateInput,
  ): Promise<ProductDiscount> {
    const productDiscount = await this.db.productDiscount.create({ data });
    return productDiscount;
  }

  async findMany(): Promise<ProductDiscount[]> {
    const productDiscount = await this.db.productDiscount.findMany();
    return productDiscount;
  }

  async findUnique(id: string): Promise<ProductDiscount> {
    const productDiscount = await this.db.productDiscount.findUnique({
      where: { id },
    });

    if (!productDiscount) {
      throw new NotFoundException('ID Não encontrado na base de dados');
    }

    return productDiscount;
  }

  async deleteOne(id: string): Promise<{ message: string }> {
    await this.db.productDiscount.delete({
      where: { id },
    });

    return {
      message: 'Produto deletado com sucesso',
    };
  }
}
