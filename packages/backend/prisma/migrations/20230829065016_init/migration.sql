-- DropForeignKey
ALTER TABLE "BudgetOnCountingItem" DROP CONSTRAINT "BudgetOnCountingItem_countingItemId_fkey";

-- DropForeignKey
ALTER TABLE "PayerOnCountingItem" DROP CONSTRAINT "PayerOnCountingItem_countingItemId_fkey";

-- DropForeignKey
ALTER TABLE "PaymentMethodOnCountingItem" DROP CONSTRAINT "PaymentMethodOnCountingItem_countingItemId_fkey";

-- AddForeignKey
ALTER TABLE "PayerOnCountingItem" ADD CONSTRAINT "PayerOnCountingItem_countingItemId_fkey" FOREIGN KEY ("countingItemId") REFERENCES "CountingItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BudgetOnCountingItem" ADD CONSTRAINT "BudgetOnCountingItem_countingItemId_fkey" FOREIGN KEY ("countingItemId") REFERENCES "CountingItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentMethodOnCountingItem" ADD CONSTRAINT "PaymentMethodOnCountingItem_countingItemId_fkey" FOREIGN KEY ("countingItemId") REFERENCES "CountingItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
