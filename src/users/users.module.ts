import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersPrismaRepository } from './users.prisma-respository';

@Module({
  providers: [
    {
      provide: UsersService,
      useFactory: (usersRepository: UsersPrismaRepository) =>
        new UsersService(usersRepository),
      inject: [UsersPrismaRepository],
    },
    {
      provide: UsersPrismaRepository,
      useFactory: (prismaService: PrismaService) =>
        new UsersPrismaRepository(prismaService),
      inject: [PrismaService],
    },
    PrismaService,
  ],
})
export class UsersModule {}
