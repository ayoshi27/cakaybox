import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PaymentMethod, Prisma } from '@prisma/client';

@Injectable()
export class PaymentMethodService {
  constructor(private prisma: PrismaService) {}

  /**
   * 指定したパラメータで支払方法リストを取得する（findMany）
   * @param params - prismaのfindManyのパラメータ
   */
  async getList(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PaymentMethodWhereUniqueInput;
    where?: Prisma.PaymentMethodWhereInput;
    orderBy?: Prisma.PaymentMethodOrderByWithRelationInput;
  }): Promise<PaymentMethod[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.paymentMethod.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
