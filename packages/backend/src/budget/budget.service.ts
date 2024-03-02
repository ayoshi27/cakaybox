import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Budget, Prisma } from '@prisma/client';

@Injectable()
export class BudgetService {
  constructor(private prisma: PrismaService) {}

  /**
   * 指定したパラメータで支出元リストを取得する（findMany）
   * @param params - prismaのfindManyのパラメータ
   */
  async getList(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BudgetWhereUniqueInput;
    where?: Prisma.BudgetWhereInput;
    orderBy?: Prisma.BudgetOrderByWithRelationInput;
  }): Promise<Budget[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.budget.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
