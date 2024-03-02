import { Test, TestingModule } from '@nestjs/testing';
import { CountingItemController } from './counting-item.controller';

describe('CountingItemController', () => {
  let controller: CountingItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountingItemController],
    }).compile();

    controller = module.get<CountingItemController>(CountingItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
