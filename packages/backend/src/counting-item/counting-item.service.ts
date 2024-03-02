import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CountingItemService {
  constructor(private prisma: PrismaService) {}

  /**
   * 指定したパラメータで集計項目リストを取得する（findMany）
   * @param params - prismaのfindManyのパラメータ
   */
  async getList(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CountingItemWhereUniqueInput;
    where?: Prisma.CountingItemWhereInput;
    orderBy?: Prisma.CountingItemOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.countingItem.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        payers: { select: { payer: { select: { id: true } } } },
        paymentMethods: {
          select: { paymentMethod: { select: { id: true } } },
        },
        budgets: { select: { budget: { select: { id: true } } } },
      },
    });
  }
}
