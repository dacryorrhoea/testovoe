import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

type DealPayloadType = {
  name: string,
  desc: string
}

let Deals = [{
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
    return Deals
  }

  @Get(':id')
  findOne(@Param('id') id) {
    const deal = Deals[id - 1]
    return deal;
  }

  @Post()
  create(@Body() dealPayload: DealPayloadType) {
    Deals.push({
      id: Deals.length + 1,
      ...dealPayload
    })
    return 'Append.'
  }

  @Patch(':id')
  update(@Param('id') id) {}

  @Delete(':id')
  remove(@Param('id') id) {
    Deals.splice(id, 1)
    return Deals;
  }
}
