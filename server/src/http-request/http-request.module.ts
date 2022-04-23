import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HttpRequestService } from './http-request.service';

@Module({
  imports: [HttpModule],
  providers: [HttpRequestService],
})
export class HttpRequestModule {}
