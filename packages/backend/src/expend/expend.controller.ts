import { Controller, Param } from '@nestjs/common';
import { ExpendService } from './expend.service';

import { contract } from '@cakaybox/common';
import {
  nestControllerContract,
  NestControllerInterface,
  NestRequestShapes,
  TsRest,
  TsRestRequest,
} from '@ts-rest/nest';

const c = nestControllerContract(contract.expends);
type RequestShapes = NestRequestShapes<typeof c>;

@Controller()
export class ExpendController implements NestControllerInterface<typeof c> {
  constructor(private readonly expendService: ExpendService) {}

  @TsRest(c.getList)
  async getList(
    @TsRestRequest()
    { query: { yearMonth } }: RequestShapes['getList'],
  ) {
    const where = {
      date: {
        startsWith: yearMonth,
      },
    };

    const orderBy = [{ date: 'desc' as const }, { createdAt: 'desc' as const }];

    return {
      status: 200 as const,
      body: await this.expendService.getList({ where, orderBy }),
    };
  }

  @TsRest(c.createExpend)
  async createExpend(
    @TsRestRequest()
    { body }: RequestShapes['createExpend'],
  ) {
    const bodyData = {
      price: body.price,
      description: body.description,
      date: body.date,
      processed: body.processed,
      category: {
        connect: {
          id: body.categoryId,
        },
      },
      payer: {
        connect: {
          id: body.payerId,
        },
      },
      budget: {
        connect: {
          id: body.budgetId,
        },
      },
      paymentMethod: {
        connect: {
          id: body.paymentMethodId,
        },
      },
    };

    return {
      status: 201 as const,
      body: await this.expendService.create(bodyData),
    };
  }

  @TsRest(c.updateExpend)
  async updateExpend(
    @Param('id') id: string,
    @TsRestRequest()
    { body }: RequestShapes['updateExpend'],
  ) {
    const where = { id: Number(id) };
    return {
      status: 200 as const,
      body: await this.expendService.updateExpend({ where, data: body }),
    };
  }

  @TsRest(c.deleteExpend)
  async deleteExpend(@Param('id') id: string) {
    const where = { id: Number(id) };
    await this.expendService.deleteExpend(where);

    return {
      status: 200 as const,
      body: { message: 'expend successfully Deleted' },
    };
  }

  @TsRest(c.getAnnualCalculatedExpend)
  async getAnnualCalculatedExpend(
    @TsRestRequest()
    { query: { year } }: RequestShapes['getAnnualCalculatedExpend'],
  ) {
    const where = {
      date: {
        startsWith: year,
      },
    };
    return {
      status: 200 as const,
      body: await this.expendService.getAnnualCalculatedExpend({ where }),
    };
  }
}
