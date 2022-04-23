import { Module } from '@nestjs/common';
import { HttpRequestModule } from 'src/http-request/http-request.module';
import { HttpRequestService } from 'src/http-request/http-request.service';

@Module({
  imports: [HttpRequestModule],
  providers: [HttpRequestService],
})
export class RateUpdaterModule {}
