import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as iconv from 'iconv-lite';

@Injectable()
export class HttpRequestService {
  async getRateXML(url: string): Promise<string> {
    return await axios
      .get(url, { responseType: 'arraybuffer', responseEncoding: 'binary' })
      .then((response) =>
        iconv.decode(Buffer.from(response.data), 'windows-1251'),
      );
  }
}
