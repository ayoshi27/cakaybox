import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteExpendItemController } from './favorite-expend-item.controller';

describe('FavoriteExpendItemController', () => {
  let controller: FavoriteExpendItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteExpendItemController],
    }).compile();

    controller = module.get<FavoriteExpendItemController>(
      FavoriteExpendItemController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
