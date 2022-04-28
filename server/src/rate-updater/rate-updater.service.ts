import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { HttpRequestService } from 'src/http-request/http-request.service';
import { RateService } from 'src/rate/rate.service';
import * as xml2js from 'xml2js';

@Injectable()
export class RateUpdaterService {
  private readonly logger = new Logger(RateUpdaterService.name);
  private readonly url = 'http://www.cbr.ru/scripts/XML_daily.asp';

  constructor(
    private readonly httpRequestService: HttpRequestService,
    private readonly rateService: RateService,
  ) {}

  @Cron(CronExpression.EVERY_5_MINUTES)
  updateRate() {
    this.httpRequestService.getRateXML(this.url).then((xml) => {
      xml2js.parseString(xml, (err, res) => {
        const rateId = this.rateService.create({
          date: res?.ValCurs?.$?.Date,
          name: res?.ValCurs?.$?.name,
        });
        rateId
          .then((rateId) => {
            res.ValCurs.Valute.forEach((currency) => {
              this.rateService.addCurrency({
                rateId: rateId,
                ID: currency.$.ID,
                numCode: currency.NumCode[0],
                charCode: currency.CharCode[0],
                nominal: currency.Nominal[0],
                name: currency.Name[0],
                value: currency.Value[0],
              });
            });
          })
          .then(() => this.logger.log('Сurrency rates have been updated'))
          .catch(() => this.logger.error('Data fetching error from'));
      });
    });
  }
}
