import { Injectable } from '@nestjs/common';
import { CreateMembroDto } from './dto/create-membro.dto';
import { UpdateMembroDto } from './dto/update-membro.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MembroService {
  constructor(private prisma: PrismaService) {}

  async create(createMembroDto: CreateMembroDto) {
    return await this.prisma.membro.create({ data: createMembroDto });
  }

  async findAll() {
    return await this.prisma.membro.findMany();
  }

  async logar(registro: any) {
    return await this.prisma.membro.findFirst({
      where: {
        login: registro.login,
        senha: registro.senha,
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.membro.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, updateMembroDto: UpdateMembroDto) {
    return await this.prisma.membro.update({
      where: {
        id: id,
      },
      data: updateMembroDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.membro.delete({
      where: {
        id: id,
      },
    });
  }
}
