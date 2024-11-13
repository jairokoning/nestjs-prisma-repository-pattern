import { Injectable } from '@nestjs/common';
import { CarsRepository } from './cars.repository';
import { Car } from '@prisma/client';

@Injectable()
export class CarsService {
  constructor(private carsRepository: CarsRepository) {}
  async create(data: Car) {
    await this.carsRepository.create(data);
  }
}
