import { Module } from '@nestjs/common';
import { RateService } from './rate.service';
import { RateController } from './rate.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rate, RateSchema } from './schemas/rate.schema';
import { Currency, CurrencySchema } from './schemas/currency.schema';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { RateUpdaterService } from 'src/rate-updater/rate-updater.service';
import { HttpRequestService } from 'src/http-request/http-request.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Rate.name, schema: RateSchema },
      { name: Currency.name, schema: CurrencySchema },
    ]),
    HttpModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [RateController],
  providers: [RateService, RateUpdaterService, HttpRequestService],
})
export class RateModule {}
