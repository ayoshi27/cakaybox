import { Module } from '@nestjs/common';
import { CustomCountingItemService } from './custom-counting-item.service';
import { CustomCountingItemController } from './custom-counting-item.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [CustomCountingItemService, PrismaService],
  controllers: [CustomCountingItemController],
})
export class CustomCountingItemModule {}
