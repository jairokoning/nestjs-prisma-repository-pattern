import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CarsRepository } from './cars.repository';
import { Car } from '@prisma/client';

@Injectable()
export class CarsPrismaRepository implements CarsRepository {
  constructor(private readonly prisma: PrismaService) {}

  getAll(): Promise<Car[]> {
    return this.prisma.car.findMany();
  }
  async get(id: string): Promise<Car> {
    return this.prisma.car.findUnique({ where: { id } });
  }
  async create(car: Car): Promise<void> {
    await this.prisma.car.create({ data: car });
  }
  async update(id: string, car: Car): Promise<void> {
    await this.prisma.car.update({ where: { id }, data: car });
  }
}
