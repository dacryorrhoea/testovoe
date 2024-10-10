import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

const deals = [{
  id: 1,
  name: 'доброе дело №1',
  desc: 'очень доброе'
},{
  id: 2,
  name: 'доброе дело №2',
  desc: 'очень доброе'
},{
  id: 3,
  name: 'доброе дело №3',
  desc: 'очень доброе'
},{
  id: 4,
  name: 'доброе дело №4',
  desc: 'очень доброе'
},{
  id: 5,
  name: 'доброе дело №5',
  desc: 'очень доброе'
},{
  id: 6,
  name: 'доброе дело №6',
  desc: 'очень доброе'
}]

@Controller('deals')
export class DealsController {
  
  @Get()
  findAll() {
    return deals
  }

  @Get(':id')
  findOne(@Param() id) {
    return id;
  }

  @Post()
  create() {}

  @Patch(':id')
  update(@Param('id') id) {}

  @Delete(':id')
  remove(@Param('id') id) {}
}
