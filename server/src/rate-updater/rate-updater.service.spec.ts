import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyUpdaterService } from './currency-updater.service';

describe('currencyUpdaterService', () => {
  let service: CurrencyUpdaterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrencyUpdaterService],
    }).compile();

    service = module.get<CurrencyUpdaterService>(CurrencyUpdaterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
