import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { CartsService } from './carts.service';
import { Cart } from '../entities/cart.entity';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post()
  create(@Body() cart: Cart): Promise<Cart> {
    return this.cartsService.create(cart);
  }

  @Get()
  async findAll(): Promise<Cart[]> {
    return this.cartsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Cart> {
    const cart = await this.cartsService.findOne(id);
    if (!cart) {
      throw new NotFoundException('Cart not found');
    }
    return cart;
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() cart: Cart): Promise<Cart> {
    return this.cartsService.update(id, cart);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.cartsService.remove(id);
  }
}
