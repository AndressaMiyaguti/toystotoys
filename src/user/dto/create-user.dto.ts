import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsEmail,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Informe o nome de usuário' })
  @MinLength(2, { message: 'O campo deve conter no mínimo 2 caracteres!' })
  @IsString({ message: 'Informe seu nome de usuário!' })
  name: string;

  @IsNotEmpty({ message: 'É necessário inserir uma foto em seu perfil' })
  @IsString({ message: 'Insira a url de sua foto!' })
  picture: string;

  @IsOptional()
  @IsString({ message: 'Digite sua Razão Social!' })
  socialReason?: string;

  @IsOptional()
  @IsString({ message: 'Digite seu Nome Fantasia!' })
  fantasyName?: string;

  @IsNotEmpty({
    message: 'Informe o número do documento, podendo ser CPF ou CNPJ',
  })
  @MaxLength(14, { message: 'Documento inválido!' })
  @MinLength(11, { message: 'Documento inválido!' })
  document: string;

  @IsNotEmpty({ message: 'Informe um email.' })
  @IsEmail({}, { message: 'Informe um endereço de email válido' })
  @IsString({ message: 'Informe um endereço de email válido' })
  email: string;

  @IsString({ message: 'Informe seu endereço!' })
  street: string;

  @IsString({ message: 'Informe o estado!' })
  state: string;

  @IsString({ message: 'Informe seu bairro!' })
  district: string;

  @IsString({ message: 'Informe seu bairro!' })
  city: string;

  @IsNotEmpty({ message: 'Campo "vazio", digite seu CEP!' })
  @IsString({ message: 'Cep inválido' })
  cep: string;

  @IsNotEmpty({ message: 'Campo vazio, Informe o número de seu endereço.' })
  number: string;

  @IsOptional()
  @IsString({})
  complement?: string;

  @IsNotEmpty({ message: 'Insira um número de telefone para contato' })
  @IsString({ message: 'Informe um número de telefone para contato.' })
  phone: string;

  @IsBoolean({})
  @IsOptional()
  isAdmin?: boolean;

  @MinLength(6, { message: 'Sua senha deve conter no mínimo 6 caracteres' })
  @IsNotEmpty({ message: 'Informe uma senha' })
  @IsString({ message: 'Informe uma senha válida!' })
  password: string;

  @MinLength(6, { message: 'Informe uma confirmação de senha válida' })
  @IsNotEmpty({ message: 'Confirme sua senha' })
  @IsString({ message: 'Informe uma confirmação de senha válida' })
  passwordConfirmation: string;
}
