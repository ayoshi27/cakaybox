import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { ExpendModule } from './expend/expend.module';
import { ExpendController } from './expend/expend.controller';
import { ExpendService } from './expend/expend.service';
import { BudgetModule } from './budget/budget.module';
import { BudgetService } from './budget/budget.service';
import { BudgetController } from './budget/budget.controller';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';
import { PayerModule } from './payer/payer.module';
import { PayerService } from './payer/payer.service';
import { PayerController } from './payer/payer.controller';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { PaymentMethodService } from './payment-method/payment-method.service';
import { PaymentMethodController } from './payment-method/payment-method.controller';
import { CountingItemModule } from './counting-item/counting-item.module';
import { CountingItemService } from './counting-item/counting-item.service';
import { CountingItemController } from './counting-item/counting-item.controller';
import { CustomCountingItemModule } from './custom-counting-item/custom-counting-item.module';
import { CustomCountingItemService } from './custom-counting-item/custom-counting-item.service';
import { CustomCountingItemController } from './custom-counting-item/custom-counting-item.controller';
import { FavoriteExpendItemModule } from './favorite-expend-item/favorite-expend-item.module';

@Module({
  imports: [
    ExpendModule,
    BudgetModule,
    CategoryModule,
    PayerModule,
    PaymentMethodModule,
    CountingItemModule,
    CustomCountingItemModule,
    FavoriteExpendItemModule,
  ],
  controllers: [
    AppController,
    ExpendController,
    BudgetController,
    CategoryController,
    PayerController,
    PaymentMethodController,
    CountingItemController,
    CustomCountingItemController,
  ],
  providers: [
    AppService,
    PrismaService,
    ExpendService,
    BudgetService,
    CategoryService,
    PayerService,
    PaymentMethodService,
    CountingItemService,
    CustomCountingItemService,
  ],
})
export class AppModule {}
