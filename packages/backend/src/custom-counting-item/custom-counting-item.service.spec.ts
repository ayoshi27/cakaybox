import { Test, TestingModule } from '@nestjs/testing';
import { CustomCountingItemService } from './custom-counting-item.service';

describe('CustomCountingItemService', () => {
  let service: CustomCountingItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomCountingItemService],
    }).compile();

    service = module.get<CustomCountingItemService>(CustomCountingItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
