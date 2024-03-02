import { Test, TestingModule } from '@nestjs/testing';
import { CountingItemService } from './counting-item.service';

describe('CountingItemService', () => {
  let service: CountingItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountingItemService],
    }).compile();

    service = module.get<CountingItemService>(CountingItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
