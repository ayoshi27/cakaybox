import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Expend, Prisma } from '@prisma/client';

@Injectable()
export class ExpendService {
  constructor(private prisma: PrismaService) {}

  /**
   * 指定したパラメータで支出リストを取得する（findMany）
   * @param params - prismaのfindManyのパラメータ
   */
  async getList(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ExpendWhereUniqueInput;
    where?: Prisma.ExpendWhereInput;
    orderBy?: Prisma.ExpendOrderByWithRelationInput[];
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.expend.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        category: {
          select: {
            id: true,
            name: true,
            colorCode: true,
          },
        },
        payer: {
          select: {
            id: true,
            name: true,
          },
        },
        budget: {
          select: {
            id: true,
            name: true,
          },
        },
        paymentMethod: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  /**
   * 支出を新規登録する
   * @param data - prismaのcreateのパラメータ
   */
  async create(data: Prisma.ExpendCreateInput): Promise<Expend> {
    return this.prisma.expend.create({
      data,
    });
  }

  /**
   * 支出を更新する
   * @param params - prismaのupdateのパラメータとprismaのwhereオブジェクト
   */
  async updateExpend(params: {
    where: Prisma.ExpendWhereUniqueInput;
    data: Prisma.ExpendUpdateInput;
  }): Promise<Expend> {
    const { where, data } = params;
    return this.prisma.expend.update({
      data,
      where,
    });
  }

  /**
   * 支出を削除する
   * @param where - prismaのwhereオブジェクト
   */
  async deleteExpend(
    where: Prisma.ExpendWhereUniqueInput,
  ): Promise<Expend | null> {
    return this.prisma.expend.delete({
      where,
    });
  }
}
