import { Controller, Get, Post, Put, Body, Patch, Param, Delete } from '@nestjs/common';
import { MembroService } from './membro.service';
import { CreateMembroDto } from './dto/create-membro.dto';
import { UpdateMembroDto } from './dto/update-membro.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { Membro } from './entities/membro.entity';

@Controller('membro')
export class MembroController {
  constructor(private readonly membroService: MembroService) {}

  @Post()
  @ApiBody({
    description: 'Dados para gravar o novo usuário',
    type: CreateMembroDto,
  })
  @ApiResponse({ status: 201, description: 'Usuário gravado com sucesso.' })
  create(@Body() createMembroDto: any) {
    return this.membroService.create(createMembroDto);
  }

  @Post('logar')
  @ApiBody({
    description: 'Dados para gravar o novo usuário',
    type: CreateMembroDto,
  })

  @ApiResponse({ status: 201, description: 'Usuário gravado com sucesso.' })
  logar(@Body() logar: any) {
    return this.membroService.logar(logar);
  }

  @Get()
  async findAll() {
    return await this.membroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membroService.findOne(id);
  }

  @Put(':id')
  @ApiBody({
    description: 'Dados para gravar o novo usuário',
    type: UpdateMembroDto,
  })
  @ApiResponse({ status: 201, description: 'Usuário gravado com sucesso.' })
  update(@Param('id') id: string, @Body() updateMembroDto: UpdateMembroDto) {
    return this.membroService.update(id, updateMembroDto);
  }
}
