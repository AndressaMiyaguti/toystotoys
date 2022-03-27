import { Controller, Body, Post, Get, Param, Delete } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRole } from './enum/role.enum';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Post('create-user')
  createUser(@Body() data: CreateUserDto): Promise<User> {
    delete data.passwordConfirmation;
    return this.service.create(data, UserRole.USER);
  }

  @Post('create-admin')
  createAdmin(@Body() data: CreateUserDto): Promise<User> {
    delete data.passwordConfirmation;
    return this.service.create(data, UserRole.ADMIN);
  }

  @Get('find/:id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.service.findOne(id);
  }

  @Get('find-all')
  findMany() {
    return this.service.findMany();
  }

  @Delete('delete/:id')
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
}
