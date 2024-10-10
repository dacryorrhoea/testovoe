import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '0000',
      username: 'postgres',
      entities: [],
      database: 'my_db',
      synchronize: false,
      logging: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
