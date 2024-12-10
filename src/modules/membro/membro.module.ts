import { Module } from '@nestjs/common';
import { MembroService } from './membro.service';
import { MembroController } from './membro.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [MembroController],
  providers: [MembroService, PrismaService],
  exports: [MembroService],
})
export class MembroModule {}
