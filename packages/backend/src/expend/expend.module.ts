import { Module } from '@nestjs/common';
import { ExpendController } from './expend.controller';
import { ExpendService } from './expend.service';
import { CategoryService } from '../category/category.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ExpendController],
  providers: [ExpendService, PrismaService, CategoryService],
})
export class ExpendModule {}
