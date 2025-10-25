import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CustomCountingItemService {
  constructor(private prisma: PrismaService) {}

  /**
   * 指定したパラメータでカスタム集計項目リストを取得する（findMany）
   * @param params - prismaのfindManyのパラメータ
   */
  async getList(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CustomCountingItemWhereUniqueInput;
    where?: Prisma.CustomCountingItemWhereInput;
    orderBy?: Prisma.CustomCountingItemOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.customCountingItem.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        terms: {
          select: {
            sign: true,
            coefficient: true,
            categories: { select: { category: { select: { id: true } } } },
            payers: { select: { payer: { select: { id: true } } } },
            paymentMethods: {
              select: { paymentMethod: { select: { id: true } } },
            },
            budgets: { select: { budget: { select: { id: true } } } },
            processed: true,
          },
        },
      },
    });
  }

  /**
   * カスタム集計項目とその合計料金のリストを取得する
   */
  async newGetList(params: {
    where?: Prisma.ExpendWhereInput;
    skip?: number;
    take?: number;
    cursor?: Prisma.CustomCountingItemWhereUniqueInput;
    orderBy?: Prisma.CustomCountingItemOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, orderBy, where } = params;
    const customCountingItem = await this.prisma.customCountingItem.findMany({
      skip,
      take,
      cursor,
      orderBy,
      include: {
        terms: {
          select: {
            sign: true,
            coefficient: true,
            categories: { select: { category: { select: { id: true } } } },
            payers: { select: { payer: { select: { id: true } } } },
            paymentMethods: {
              select: { paymentMethod: { select: { id: true } } },
            },
            budgets: { select: { budget: { select: { id: true } } } },
            processed: true,
          },
        },
      },
    });

    const expends = await this.prisma.expend.findMany({
      skip,
      take,
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

    type expendsType = typeof expends;
    /**
     * 引数で渡される支出の合計金額を算出する
     * @param expends - 支出一覧
     */
    const getSumPrice = (expends: expendsType) => {
      return (
        expends?.reduce((acc: number, expend) => acc + expend.price, 0) || 0
      );
    };

    const customCountingItemsTableRecords = customCountingItem?.map(
      (customCountingItem) => {
        const sum = customCountingItem.terms.reduce((acc, term) => {
          const filteredExpendsByCustomCountingItem = expends?.filter(
            (expend) => {
              const categoryFilter =
                term.categories.length > 0
                  ? term.categories
                      .map((item) => item.category.id)
                      .includes(Number(expend.category.id))
                  : false;
              const payerFilter =
                term.payers.length > 0
                  ? term.payers
                      .map((item) => item.payer.id)
                      .includes(Number(expend.payer.id))
                  : false;
              const budgetFilter =
                term.budgets.length > 0
                  ? term.budgets
                      .map((item) => item.budget.id)
                      .includes(Number(expend.budget.id))
                  : false;
              const paymentMethodFilter =
                term.paymentMethods.length > 0
                  ? term.paymentMethods
                      .map((item) => item.paymentMethod.id)
                      .includes(Number(expend.paymentMethod.id))
                  : false;
              const processedFilter = term.processed.includes(expend.processed);

              return (
                categoryFilter &&
                payerFilter &&
                budgetFilter &&
                paymentMethodFilter &&
                processedFilter
              );
            },
          );

          return (
            acc +
            getSumPrice(filteredExpendsByCustomCountingItem) *
              (term.sign === 'PLUS' ? term.coefficient : -term.coefficient)
          );
        }, 0);

        return {
          id: customCountingItem.id,
          name: customCountingItem.name,
          price: sum,
        };
      },
    );

    return customCountingItemsTableRecords;
  }
}
