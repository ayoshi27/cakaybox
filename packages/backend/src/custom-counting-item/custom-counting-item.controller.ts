import { Controller } from '@nestjs/common';
import { CustomCountingItemService } from './custom-counting-item.service';

import { contract } from '@cakaybox/common';
import {
  nestControllerContract,
  NestControllerInterface,
  TsRest,
  NestRequestShapes,
  TsRestRequest,
} from '@ts-rest/nest';

const c = nestControllerContract(contract.customCountingItems);
type RequestShapes = NestRequestShapes<typeof c>;

@Controller()
export class CustomCountingItemController
  implements NestControllerInterface<typeof c>
{
  constructor(
    private readonly customCountingItemService: CustomCountingItemService,
  ) {}

  @TsRest(c.getList)
  async getList() {
    return {
      status: 200 as const,
      body: await this.customCountingItemService.getList({}),
    };
  }
  @TsRest(c.newGetList)
  async newGetList(
    @TsRestRequest()
    { query: { yearMonth } }: RequestShapes['newGetList'],
  ) {
    const where = {
      date: {
        startsWith: yearMonth,
      },
    };

    return {
      status: 200 as const,
      body: await this.customCountingItemService.newGetList({
        where,
      }),
    };
  }
}
