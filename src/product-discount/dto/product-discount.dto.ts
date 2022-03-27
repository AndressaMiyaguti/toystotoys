/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString,MinLength, Length, IsUrl, IsNumber, IsArray} from 'class-validator';

export class CreateProductDiscountDto {

  @MinLength(2, { message: 'O campo deve no mínimo 2 caracteres!' })
  @IsNotEmpty({ message: 'Campo"vazio", informe o nome do produto promocional' })
  @IsString({ message: 'Informe o nome do produto' })
  name: string;

  @IsNotEmpty({ message: 'Campo "vazio", insira o link da imagem!' })
  @IsUrl( { message: 'Insira a url da imagem' })
  @IsArray()
  @IsString({ message: 'Insira um link válido!' })
  pictures: string[];

  @Length(100,1500, { message: 'Esse campo deve conter entre 100 a 1500 caracteres, contendo informações relevantes que descrevam seu produto!' })
  @IsNotEmpty({ message: 'Campo"vazio", descreva o produto' })
  @IsString({ message: 'Informe a descrição do produto' })
  description: string;

  @IsNotEmpty({ message: 'Campo"vazio" Insira o preço original do produto' })
  @IsNumber()
  price: number;

  @IsNotEmpty({ message: 'Campo"vazio" Insira o valor com desconto do produto' })
  @IsNumber()
  DiscountPrice: number;

  @IsNotEmpty({ message: 'Campo"vazio" Insira uma data de termino da promoção'})
  @IsString({})//verificar
  offExpirationDescount: string; //período que a promoção ficará disponível

  @IsNotEmpty({ message: 'Campo"vazio", selecione a categoria do produto' })
  @IsString({ message: 'Informe a categoria do produto' })
  category: string;
}
