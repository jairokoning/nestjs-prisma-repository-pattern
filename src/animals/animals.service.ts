import { Inject, Injectable } from '@nestjs/common';
import { AnimalsRepository } from './animals.repository';

@Injectable()
export class AnimalsService {
  constructor(
    @Inject(AnimalsRepository)
    private readonly animalsRepository: AnimalsRepository,
  ) {}

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  async createUser(data: any) {
    return this.animalsRepository.create(data);
  }
}
