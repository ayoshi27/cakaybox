import { Controller } from '@nestjs/common';
import { PayerService } from './payer.service';

import { contract } from '@cakaybox/common';
import {
  nestControllerContract,
  NestControllerInterface,
  TsRest,
} from '@ts-rest/nest';

const c = nestControllerContract(contract.payers);

@Controller()
export class PayerController implements NestControllerInterface<typeof c> {
  constructor(private readonly payerService: PayerService) {}

  @TsRest(c.getList)
  async getList() {
    return {
      status: 200 as const,
      body: await this.payerService.getList({}),
    };
  }
}
