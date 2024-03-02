import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Payer, Prisma } from '@prisma/client';

@Injectable()
export class PayerService {
  constructor(private prisma: PrismaService) {}

  /**
   * 指定したパラメータで支払者リストを取得する（findMany）
   * @param params - prismaのfindManyのパラメータ
   */
  async getList(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PayerWhereUniqueInput;
    where?: Prisma.PayerWhereInput;
    orderBy?: Prisma.PayerOrderByWithRelationInput;
  }): Promise<Payer[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.payer.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
