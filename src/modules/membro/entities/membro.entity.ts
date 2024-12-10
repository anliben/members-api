import { ApiProperty } from "@nestjs/swagger";

export class Membro {
  @ApiProperty()
  id: string;
  @ApiProperty()
  login: string;
  @ApiProperty()
  senha: string;
  @ApiProperty()
  grau: string;
  @ApiProperty()
  createdAt: Date;
}
