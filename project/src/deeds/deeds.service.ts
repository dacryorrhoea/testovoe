import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeedDto } from './dto/create-deed.dto';
import { UpdateDeedDto } from './dto/update-deed.dto';
import { Deed } from './entities/deed.entity';

@Injectable()
export class DeedService {
  constructor(
    @InjectRepository(Deed) private readonly DeedRepository: Repository<Deed>,
  ) {}

  createDeed(createDeedDto: CreateDeedDto): Promise<Deed> {
    const deed: Deed = new Deed();
    deed.title = createDeedDto.title;
    deed.desc = createDeedDto.desc;
    deed.owner = createDeedDto.owner;
    return this.DeedRepository.save(deed);
  }

  findAllDeed(): Promise<Deed[]> {
    return this.DeedRepository.find();
  }

  viewDeed(id: number): Promise<Deed> {
    return this.DeedRepository.findOneBy({ id });
  }

  updateDeed(id: number, updateDeedDto: UpdateDeedDto): Promise<Deed> {
    const deed: Deed = new Deed();
    deed.id = id;
    deed.title = updateDeedDto.title;
    deed.desc = updateDeedDto.desc;
    deed.owner = updateDeedDto.owner;
    return this.DeedRepository.save(deed);
  }

  removeDeed(id: number): Promise<{ affected?: number }> {
    return this.DeedRepository.delete(id);
  }
}