import { Module } from '@nestjs/common';
import { ExpendController } from './expend.controller';
import { ExpendService } from './expend.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ExpendController],
  providers: [ExpendService, PrismaService],
})
export class ExpendModule {}
