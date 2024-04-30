import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from '../entities/cart.entity';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(Cart)
    private cartsRepository: Repository<Cart>,
  ) {}

  async create(cart: Cart): Promise<Cart> {
    return this.cartsRepository.save(cart);
  }

  async findAll(): Promise<Cart[]> {
    return this.cartsRepository.find();
  }

  async findOne(id: number): Promise<Cart | undefined> {
    const cart = await this.cartsRepository.findOne({ where: { id } });
    return cart || undefined;
  }
  
  
  

// save method in CartsService
async update(id: number, cart: Cart): Promise<Cart> {
  await this.findOne(id); // Ensure cart exists
  return this.cartsRepository.save({ ...cart, id });
}


  async remove(id: number): Promise<void> {
    await this.cartsRepository.delete(id);
  }
}
