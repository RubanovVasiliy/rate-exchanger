import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RateUpdaterService } from './rate-updater/rate-updater.service';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { RateModule } from './rate/rate.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.development.env' }),
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URI),
    RateModule,
  ],
  controllers: [AppController],
  providers: [AppService, RateUpdaterService],
})
export class AppModule {}
