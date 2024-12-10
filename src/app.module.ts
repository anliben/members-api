import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { MembroModule } from './modules/membro/membro.module';

@Module({
  imports: [PrismaModule, MembroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
