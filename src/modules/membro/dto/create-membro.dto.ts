import { ApiProperty } from "@nestjs/swagger";

export class CreateMembroDto {
  @ApiProperty()
  login: string;
  @ApiProperty()
  senha: string;
  @ApiProperty()
  grau: string;
}
