import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { CarsPrismaRepository } from './cars.prisma-repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CarsController],
  providers: [
    CarsService,
    {
      provide: 'CarsRepository',
      useClass: CarsPrismaRepository,
    },
    PrismaService,
  ],
})
export class CarsModule {}
