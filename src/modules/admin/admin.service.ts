import { PrismaService } from './../prisma/prisma.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AdminService {
    constructor(private prisma: PrismaService) {}
    
    async login(loginDto: {login: string, password: string}) {
        const response = await this.prisma.membro.findFirst({
            where: {
                login: loginDto.login,
                senha: loginDto.password,
                admin: true,
            },
        });

        if (response) {
            return response;
        } else {
            throw new UnauthorizedException("Usuário ou senha inválidos");
        }
    }
}
