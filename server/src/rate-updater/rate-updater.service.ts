import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class RateUpdaterService {
  private readonly logger = new Logger(RateUpdaterService.name);

  @Cron(CronExpression.EVERY_30_SECONDS)
  updateRate() {
    this.logger.debug('Called when the current second is 30');
  }
}
