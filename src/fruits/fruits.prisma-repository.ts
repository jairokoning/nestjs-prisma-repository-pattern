import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Fruit } from '@prisma/client';

@Injectable()
export class FruitsPrismaRepository {
  constructor(private readonly prisma: PrismaService) {}

  getAll(): Promise<Fruit[]> {
    return this.prisma.fruit.findMany();
  }
  async get(id: string): Promise<Fruit> {
    return this.prisma.fruit.findUnique({ where: { id } });
  }
  async create(fruit: Fruit): Promise<void> {
    await this.prisma.fruit.create({ data: fruit });
  }
  async update(id: string, fruit: Fruit): Promise<void> {
    await this.prisma.fruit.update({ where: { id }, data: fruit });
  }
}
