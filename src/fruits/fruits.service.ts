import { Injectable } from '@nestjs/common';
import { FruitsPrismaRepository } from './fruits.prisma-repository';
import { Fruit } from '@prisma/client';

@Injectable()
export class FruitsService {
  constructor(private fruitsRepository: FruitsPrismaRepository) {}
  async create(data: Fruit) {
    await this.fruitsRepository.create(data);
  }
}
