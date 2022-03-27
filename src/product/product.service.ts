/* eslint-disable prettier/prettier */
import { PrismaService } from 'src/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { User } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private db: PrismaService) {}
  
  async create(data: Prisma.ProductCreateInput): Promise<Product> {
    const product = await this.db.product.create({ data });
    return product;
  }

  async findMany(): Promise<Product[]> {
    const product = await this.db.product.findMany();
    return product;
  }

  async findUnique(id: string): Promise<Product> {
    const product = await this.db.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException('ID Não encontrado na base de dados');
    }

    return product;
  }
  
  async deleteOne(id: string): Promise<{ message: string }> {
    await this.db.product.delete({
      where: { id },
    });

    return {
      message: 'Produto excluído com sucesso',
    };
  }

  async likeProduct(userId: string, productId: string): Promise<User> {
    await this.db.user.update({
      where: { id: userId },
      data: {
        Product: {
          connect: {
            id: productId,
          },
        },
      },
    });

    return this.db.user.findUnique({
      where: { id: userId },
      include: {
        Product: true,
      },
    });
  }
}

