import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { DealsController } from './deals/deals.controller';

@Module({
  imports: [
    AuthModule, 
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: '0000',
    //   database: 'simple_bd',
    //   entities: ["src/**/*.entity{.ts,.js}"],
    //   synchronize: false,
    // })
  ],
  controllers: [DealsController],
  providers: [],
})
export class AppModule {}
