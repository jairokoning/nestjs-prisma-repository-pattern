import { Car } from '@prisma/client';

export abstract class CarsRepository {
  abstract getAll(): Promise<Car[]>;

  abstract get(id: string): Promise<Car>;

  abstract create(car: Car): Promise<void>;

  abstract update(id: string, car: Car): Promise<void>;
}
