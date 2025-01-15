import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { MembroModule } from './modules/membro/membro.module';
import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [PrismaModule, MembroModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
