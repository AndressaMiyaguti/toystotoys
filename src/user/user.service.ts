import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserRole } from './enum/role.enum';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private db: PrismaService) {}

  async create(dto: CreateUserDto, role: UserRole): Promise<User> {
    const userExists = await this.db.user.findUnique({
      where: { email: dto.email },
    });

    if (userExists) {
      throw new ConflictException('Email já está cadastrado');
    }

    const salt = 10;
    const hashedPassword = await bcrypt.hash(dto.password, salt);

    const data: Prisma.UserCreateInput = {
      ...dto,
      role: role,
      password: hashedPassword,
      createAt: new Date(Date.now()),
    };
    const user = await this.db.user.create({
      data,
    });

    delete user.password;
    return user;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.db.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('ID Não encontrado na base de dados');
    }

    delete user.password;
    return user;
  }

  async findMany() {
    const user = await this.db.user.findMany();
    const newUser = user.map(({ password, ...resto }) => resto);
    return newUser;
  }

  async deleteOne(id: string): Promise<{ message: string }> {
    await this.db.user.delete({
      where: { id },
    });

    return {
      message: 'Usuário deletado com sucesso',
    };
  }
}
