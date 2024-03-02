import { Controller } from '@nestjs/common';
import { PaymentMethodService } from './payment-method.service';

import { contract } from '@cakaybox/common';
import {
  nestControllerContract,
  NestControllerInterface,
  TsRest,
} from '@ts-rest/nest';

const c = nestControllerContract(contract.paymentMethods);

@Controller()
export class PaymentMethodController
  implements NestControllerInterface<typeof c>
{
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @TsRest(c.getList)
  async getList() {
    return {
      status: 200 as const,
      body: await this.paymentMethodService.getList({}),
    };
  }
}
