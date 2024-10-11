import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DeedService } from './deeds.service';
import { CreateDeedDto } from './dto/create-deed.dto';
import { UpdateDeedDto } from './dto/update-deed.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('deeds')
export class DeedsController {
  constructor(private readonly deedService: DeedService) {}

  @Post()
  create(@Body() createDeedDto: CreateDeedDto) {
    return this.deedService.createDeed(createDeedDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.deedService.findAllDeed();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deedService.viewDeed(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeedDto: UpdateDeedDto) {
    return this.deedService.updateDeed(+id, updateDeedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deedService.removeDeed(+id);
  }
}
