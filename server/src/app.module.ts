import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { RateModule } from './rate/rate.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.development.env' }),
    MongooseModule.forRoot(process.env.DB_URI, {}),
    RateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
