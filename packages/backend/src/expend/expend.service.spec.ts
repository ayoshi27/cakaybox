import { Test, TestingModule } from '@nestjs/testing';
import { ExpendService } from './expend.service';

describe('ExpendService', () => {
  let service: ExpendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpendService],
    }).compile();

    service = module.get<ExpendService>(ExpendService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
