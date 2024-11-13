import { Module } from '@nestjs/common';
import { FruitsController } from './fruits.controller';
import { FruitsService } from './fruits.service';
import { FruitsPrismaRepository } from './fruits.prisma-repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FruitsController],
  providers: [FruitsService, FruitsPrismaRepository, PrismaService],
})
export class FruitsModule {}
