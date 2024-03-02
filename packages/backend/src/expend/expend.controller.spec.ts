import { Test, TestingModule } from '@nestjs/testing';
import { ExpendController } from './expend.controller';

describe('ExpendController', () => {
  let controller: ExpendController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpendController],
    }).compile();

    controller = module.get<ExpendController>(ExpendController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
