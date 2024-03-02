import { Module } from '@nestjs/common';
import { PayerController } from './payer.controller';
import { PayerService } from './payer.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [PayerController],
  providers: [PayerService, PrismaService],
})
export class PayerModule {}
