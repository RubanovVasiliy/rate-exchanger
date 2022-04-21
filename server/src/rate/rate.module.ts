import { Module } from '@nestjs/common';
import { RateService } from './rate.service';
import { RateController } from './rate.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rate, RateSchema } from './schemas/rate.schema';
import { Currency, CurrencySchema } from './schemas/currency.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Rate.name, schema: RateSchema },
      { name: Currency.name, schema: CurrencySchema },
    ]),
  ],
  controllers: [RateController],
  providers: [RateService],
})
export class RateModule {}
