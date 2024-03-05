import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    ParseIntPipe,
    ValidationPipe,
    UseGuards,
    UseInterceptors,
  } from '@nestjs/common';
  import { ProductService } from './product.service';
  import { CreateProductDto } from './dto/create-product.dto';
  import { ProductGuard } from './product.gruard';
  import { MyInterceptor } from './product.interceptor';
  
  @Controller('product')
 // @UseInterceptors(MyInterceptor)
  //@UseGuards(ProductGuard)
  export class ProductController {
    constructor(private readonly productService: ProductService) {}
  
    @Get()
    getAll() {
      return this.productService.findAll();
    }
  
    @Get(':pId')
    findOne(@Param('pId', ParseIntPipe) pId: number) {
      return this.productService.findById(pId);
    }
  
    @Post('create')
    createProduct(@Body(ValidationPipe) createProductDto: CreateProductDto) {
      return this.productService.create(createProductDto);
    }
  
    @Patch(':pId')
    update(@Param('pId') pId: string, @Body() productUpdate: []) {
      return { pId, ...productUpdate };
    }
  }
  