import { Controller } from '@nestjs/common';
import { BudgetService } from './budget.service';
// import type {} from 'zod';
import { contract } from '@cakaybox/common';
import {
  nestControllerContract,
  NestControllerInterface,
  TsRest,
} from '@ts-rest/nest';

const c = nestControllerContract(contract.budgets);

@Controller()
export class BudgetController implements NestControllerInterface<typeof c> {
  constructor(private readonly budgetService: BudgetService) {}

  @TsRest(c.getList)
  async getList() {
    return {
      status: 200 as const,
      body: await this.budgetService.getList({}),
    };
  }
}
