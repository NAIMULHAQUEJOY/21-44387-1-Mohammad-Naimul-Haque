import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get()
    getAll() {
      return [];
    }
  
    @Get(':id')// parametrer, to recieve it we use param
    findOne(@Param('id') id: string) { //string type
      return { id };// {} curly brases in java script means an object. Obeject akare pathai dicche
    }
  
    @Post()
    createUser(@Body() user: {}) {  // when we request to localhost::3000/users,here user is the object type
      return user;
    }
  
    @Patch(':id')//localhost::3000/users (patcg=h means, it used for updating)
    update(@Param('id') id: string, @Body() userUpdate: []) {
      return { id, ...userUpdate };
    }
}
