import { Controller } from '@nestjs/common';
import { CountingItemService } from './counting-item.service';
import { contract } from '@cakaybox/common';
import {
  nestControllerContract,
  NestControllerInterface,
  TsRest,
} from '@ts-rest/nest';

const c = nestControllerContract(contract.countingItems);

@Controller()
export class CountingItemController
  implements NestControllerInterface<typeof c>
{
  constructor(private readonly countingItemService: CountingItemService) {}

  @TsRest(c.getList)
  async getList() {
    return {
      status: 200 as const,
      body: await this.countingItemService.getList({}),
    };
  }
}
