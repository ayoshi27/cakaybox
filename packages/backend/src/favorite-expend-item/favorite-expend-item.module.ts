import { Module } from '@nestjs/common';
import { FavoriteExpendItemController } from './favorite-expend-item.controller';
import { FavoriteExpendItemService } from './favorite-expend-item.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [FavoriteExpendItemController],
  providers: [FavoriteExpendItemService, PrismaService],
})
export class FavoriteExpendItemModule {}
