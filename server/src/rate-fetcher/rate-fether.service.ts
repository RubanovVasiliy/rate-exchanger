import { Injectable } from '@nestjs/common';

@Injectable()
export class RateFetherService {
  //   getRate(): Promise<string> {
  //     const response = this.fetchRate();
  //     console.log(response);
  //     const json = this.parseXMLToJson(response);
  //     return json;
  //   }
  // async fetchRate() {
  //   const url = 'https://www.cbr.ru/scripts/XML_daily.asp';
  //   axios
  //     .get(url, { responseType: 'arraybuffer', responseEncoding: 'binary' })
  //     .then((response) =>
  //       iconv.decode(Buffer.from(response.data), 'windows-1251'),
  //     )
  //     .then((xml) =>
  //       xml2js
  //         .parseStringPromise(xml)
  //         .catch((err) => console.log(err))
  //         .then((result) => {
  //           result.ValCurs.Valute.forEach((element) => {
  //             console.log(element);
  //           });
  //         }),
  //     )
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
  //   private async parseXMLToJson(xml: Promise<string>): Promise<string> {
  //     return await xml2js.parseStringPromise(xml);
  //   }
}
