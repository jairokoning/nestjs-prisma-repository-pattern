import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AnimalsModule } from './animals/animals.module';
import { CarsModule } from './cars/cars.module';
import { FruitsModule } from './fruits/fruits.module';

@Module({
  imports: [PrismaModule, UsersModule, AnimalsModule, CarsModule, FruitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
