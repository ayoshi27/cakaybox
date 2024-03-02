import { Test, TestingModule } from '@nestjs/testing';
import { CustomCountingItemController } from './custom-counting-item.controller';

describe('CustomCountingItemController', () => {
  let controller: CustomCountingItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomCountingItemController],
    }).compile();

    controller = module.get<CustomCountingItemController>(CustomCountingItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
