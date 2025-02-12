import { ApiProperty } from "@nestjs/swagger";

export class CreateMembroDto {
  @ApiProperty()
  login: string;
  @ApiProperty()
  senha: string;
  @ApiProperty()
  grau: string;
  @ApiProperty()
  nome: string;
  @ApiProperty()
  telefone: string;
  @ApiProperty()
  pagamento_data: string;
  @ApiProperty()
  cpf: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  data_nascimento: string;
}
