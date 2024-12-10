import { createHmac, randomUUID } from 'crypto';
import * as moment from 'moment';

export class Utilitarios {
  static GerarHashSenha(senha: string): string {
    const hash = createHmac('sha512', senha)
      .update(process.env.HASH_SECRET)
      .digest('hex');
    return hash;
  }

  static GerarHash() {
    return randomUUID().replaceAll('-', '');
  }

  static ObterData() {
    return moment(new Date())
      .set('hour', 0)
      .set('minute', 0)
      .set('second', 0)
      .toDate();
  }

  static DataAtual() {
    const data = new Date();

    const ret = new Date(data.valueOf() - data.getTimezoneOffset() * 60000);

    return ret;
  }
}