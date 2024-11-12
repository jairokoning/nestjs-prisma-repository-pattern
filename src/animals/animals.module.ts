import { Module } from '@nestjs/common';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';
import { AnimalsRepository } from './animals.repository';
import { AnimalsPrismaRepository } from './animals.prisma-repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AnimalsController],
  providers: [
    AnimalsService,
    {
      provide: AnimalsRepository,
      useClass: AnimalsPrismaRepository,
    },
    PrismaService,
  ],
})
export class AnimalsModule {}
