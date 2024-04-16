import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  pId: number;

  @IsString({ message: 'valid product-name is required' })
  @IsNotEmpty()
  name: string;
}
