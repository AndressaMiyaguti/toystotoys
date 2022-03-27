import {
  IsNotEmpty,
  IsString,
  Length,
  IsUrl,
  IsArray,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class CreateProductDto {
  @Length(2, 30, { message: 'O campo deve conter de 2 a 30 caracteres!' })
  @IsNotEmpty({ message: 'Campo "vazio", informe o nome do produto' })
  @IsString({ message: 'Informe o nome do produto' })
  name: string;

  @IsNotEmpty({ message: 'Campo "vazio", insira o link das imagens!' })
  @IsUrl({})
  @IsArray()
  @IsString({ message: 'Insira um link válido!' })
  images: string[];

  @Length(100, 1500, {
    message:
      'Esse campo deve conter entre 100 a 1500 caracteres, contendo informações relevantes que descrevam seu produto!',
  })
  @IsNotEmpty({ message: 'Campo"vazio", descreva seu produto' })
  @IsString({ message: 'Informe a descrição do seu produto' })
  description: string;

  @IsNotEmpty({ message: 'Campo"vazio" Insira o preço do produto' })
  price: number;

  @IsNotEmpty({
    message: 'Campo"vazio" Insira a quantidade disponível em estoque',
  })
  @IsString({})
  quantity: number;

  @IsNotEmpty({ message: 'Campo"vazio", selecione a categoria do produto' })
  @IsString({ message: 'Informe a categoria do produto' })
  category: string;

  @IsOptional()
  @IsBoolean()
  discount: boolean;
}
