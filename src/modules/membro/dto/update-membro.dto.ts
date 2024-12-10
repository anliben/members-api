import { ApiProperty } from '@nestjs/swagger';

export class UpdateMembroDto {
    @ApiProperty()
    login: string;
    @ApiProperty()
    senha: string;
    @ApiProperty()
    grau: string;
}
