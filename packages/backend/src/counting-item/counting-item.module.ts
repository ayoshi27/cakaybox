import { Module } from '@nestjs/common';
import { CountingItemService } from './counting-item.service';
import { CountingItemController } from './counting-item.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [CountingItemController],
  providers: [CountingItemService, PrismaService],
})
export class CountingItemModule {}
