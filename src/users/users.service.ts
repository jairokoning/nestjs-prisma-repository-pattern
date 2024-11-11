import { Injectable } from '@nestjs/common';
import type { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  async createUser(data: any) {
    return this.userRepository.create(data);
  }
}
