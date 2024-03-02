import { Controller } from '@nestjs/common';
import { FavoriteExpendItemService } from './favorite-expend-item.service';
import { contract } from '@cakaybox/common';
import type {} from 'zod';
import {
  nestControllerContract,
  NestControllerInterface,
  TsRest,
} from '@ts-rest/nest';

const c = nestControllerContract(contract.favoriteExpendItem);

@Controller()
export class FavoriteExpendItemController
  implements NestControllerInterface<typeof c>
{
  constructor(
    private readonly favoriteExpendItemService: FavoriteExpendItemService,
  ) {}

  @TsRest(c.getList)
  async getList() {
    return {
      status: 200 as const,
      body: await this.favoriteExpendItemService.getList({}),
    };
  }
}
