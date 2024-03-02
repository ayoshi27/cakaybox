import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FavoriteExpendItemService {
  constructor(private prisma: PrismaService) {}

  /**
   * お気に入りリストを取得する
   */
  async getList(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FavoriteExpendItemWhereUniqueInput;
    where?: Prisma.FavoriteExpendItemWhereInput;
    orderBy?: Prisma.FavoriteExpendItemOrderByWithRelationInput[];
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.favoriteExpendItem.findMany({
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
}
