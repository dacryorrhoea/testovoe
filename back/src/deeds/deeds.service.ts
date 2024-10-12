import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeedDto } from './dto/create-deed.dto';
import { UpdateDeedDto } from './dto/update-deed.dto';
import { Deed } from './entities/deed.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class DeedService {
  constructor(
    @InjectRepository(Deed) private readonly DeedRepository: Repository<Deed>,
  ) {}

  createDeed(createDeedDto: CreateDeedDto, user: any): Promise<Deed> {
    const deed: Deed = new Deed();
    deed.title = createDeedDto.title;
    deed.desc = createDeedDto.desc;
    deed.owner = user.id;
    return this.DeedRepository.save(deed);
  }

  findAllDeed(user: any): Promise<Deed[]> {
    return user.deeds;
  }

  updateDeed(id: number, updateDeedDto: UpdateDeedDto, user: any): Promise<Deed> {
    const deed: Deed = new Deed();
    deed.id = id;
    deed.title = updateDeedDto.title;
    deed.desc = updateDeedDto.desc;
    deed.owner = user.id;
    return this.DeedRepository.save(deed);
  }

  async removeDeed(id: number, user: any): Promise<{ affected?: number }> {
    const deed = await this.DeedRepository.findOne({
      where: { id: id },
      relations: ['owner'],
    });

    if (user.id !== deed.owner.id) throw new UnauthorizedException('You are not the owner.')

    return this.DeedRepository.delete(id);
  }
}