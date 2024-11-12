import { Injectable } from '@nestjs/common';
// biome-ignore lint/style/useImportType: <explanation>
import { PrismaService } from '../prisma/prisma.service';
import type { AnimalsRepository } from './animals.repository';

@Injectable()
export class AnimalsPrismaRepository implements AnimalsRepository {
  constructor(private readonly prisma: PrismaService) {}

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  async create(data: any): Promise<void> {
    this.prisma.user.create({ data });
  }
}
