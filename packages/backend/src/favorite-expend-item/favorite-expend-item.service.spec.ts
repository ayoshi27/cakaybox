import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteExpendItemService } from './favorite-expend-item.service';

describe('FavoriteExpendItemService', () => {
  let service: FavoriteExpendItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoriteExpendItemService],
    }).compile();

    service = module.get<FavoriteExpendItemService>(FavoriteExpendItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
