import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Repository } from 'typeorm';
import { Product } from 'src/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private readonly productRepo: Repository<Product>,
  ) {}

  // private users = [
  //   {
  //     pId: 1,
  //     pName: 'item1',
  //     
  //   },
  //   {
  //     pId: 2,
  //     pName: 'item2',
  //     
  //   },
  //   {
  //     pId: 3,
  //     pName: 'item-3',
  //     
  //   },
  // ];

  async findAll() {
    //return this.users;
    return await this.productRepo.find({});
  }

  async findById(pId: number) {
    //return this.users.find((product) => product.pId === pId);
    return await this.productRepo.find({ where: { pId: pId } });
  }

  async create(createProductDto: CreateProductDto) {
    // const lastId = [...this.users].sort((a, b) => b.id - a.id);
    // const newUser = {
    //   id: lastId[0].id + 1,
    //   ...createUserDto,
    // };
    // this.users.push(newUser);
    //return newUser;

    const product = await this.productRepo.create(createProductDto);
    return await this.productRepo.save(product);
  }
}
