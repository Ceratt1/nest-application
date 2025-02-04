import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserPrismaRepository } from './repositories/user.repository';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { UserRepository } from './repositories/user.interface';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    { provide: UserRepository, useClass: UserPrismaRepository }
  ],
  exports: [UserRepository],
})
export class UsersModule {}
