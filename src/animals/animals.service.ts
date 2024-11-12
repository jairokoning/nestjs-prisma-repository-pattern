import { Inject, Injectable } from '@nestjs/common';
import { AnimalsRepository } from './animals.repository';

@Injectable()
export class AnimalsService {
  constructor(
    @Inject(AnimalsRepository)
    private readonly animalsRepository: AnimalsRepository,
  ) {}

  async createUser(data: any) {
    return this.animalsRepository.create(data);
  }
}
