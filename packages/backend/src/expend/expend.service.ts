// NOTE: see Issue: https://github.com/iamkun/dayjs/issues/475#issuecomment-460660048
import * as dayjs from 'dayjs';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CategoryService } from '../category/category.service';
import { Expend, Prisma } from '@prisma/client';

@Injectable()
export class ExpendService {
  constructor(
    private prisma: PrismaService,
    private categoryService: CategoryService,
  ) {}

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

  /**
   * 年間支出を取得する
   */
  async getAnnualCalculatedExpend(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ExpendWhereUniqueInput;
    where?: Prisma.ExpendWhereInput;
    orderBy?: Prisma.ExpendOrderByWithRelationInput[];
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    const expends = await this.prisma.expend.findMany({
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
          },
        },
      },
    });

    const categories = await this.categoryService.getList({
      orderBy: { id: 'asc' },
    });
    return categories.map((category) => {
      const sumForallMonths =
        expends.reduce((acc: number, expend) => {
          return expend.categoryId === category.id ? acc + expend.price : acc;
        }, 0) || 0;
      const sumForEachMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
        (month) => {
          return expends.reduce((acc: number, expend) => {
            return expend.categoryId === category.id &&
              dayjs(expend.date).format('M') === String(month)
              ? acc + expend.price
              : acc;
          }, 0);
        },
      );
      const countingMonths = sumForEachMonth.filter(
        (sumFormonth) => sumFormonth > 0,
      );
      const avarageForAllMonths =
        sumForallMonths === 0 ? 0 : sumForallMonths / countingMonths.length;
      return {
        categoryName: category.name,
        data: [sumForallMonths, avarageForAllMonths, ...sumForEachMonth],
      };
    });
  }

  /**
   * 月毎のカテゴリー別支出合計を取得する
   */
  async getMonthlyCalculatedExpend(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ExpendWhereUniqueInput;
    where?: Prisma.ExpendWhereInput;
    orderBy?: Prisma.ExpendOrderByWithRelationInput[];
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    const expends = await this.prisma.expend.findMany({
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
          },
        },
      },
    });

    const categories = await this.categoryService.getList({
      orderBy: { id: 'asc' },
    });
    return categories.map((category) => {
      const sum = expends.reduce((acc: number, expend) => {
        return expend.categoryId === category.id ? acc + expend.price : acc;
      }, 0);

      return {
        id: category.id,
        categoryName: category.name,
        price: sum,
      };
    });
  }
}
