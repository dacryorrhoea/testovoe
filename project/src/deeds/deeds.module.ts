import { Module } from '@nestjs/common';
import { DeedService } from './deeds.service';
import { DeedsController } from './deeds.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deed } from './entities/deed.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Deed]), AuthModule],
  controllers: [DeedsController],
  providers: [DeedService],
})
export class DeedsModule {}
