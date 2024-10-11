import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { DeedService } from './deeds.service';
import { CreateDeedDto } from './dto/create-deed.dto';
import { UpdateDeedDto } from './dto/update-deed.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/user/entities/user.entity';

@Controller('deeds')
@UseGuards(AuthGuard('jwt'))
export class DeedsController {
  constructor(private readonly deedService: DeedService) {}

  @Post()
  create(@Req() req: any, @Body() createDeedDto: CreateDeedDto) {
    return this.deedService.createDeed(createDeedDto, req.user);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.deedService.findAllDeed(req.user);
  }

  @Patch(':id')
  update(@Req() req: any, @Param('id') id: string, @Body() updateDeedDto: UpdateDeedDto) {
    return this.deedService.updateDeed(+id, updateDeedDto, req.user);
  }

  @Delete(':id')
  remove(@Req() req: any, @Param('id') id: string) {
    return this.deedService.removeDeed(+id, req.user);
  }
}
