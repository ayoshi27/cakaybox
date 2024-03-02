/*
  Warnings:

  - You are about to drop the column `filterConditionId` on the `CustomCountingItemTerm` table. All the data in the column will be lost.
  - You are about to drop the `BudgetOnFilterCondition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CategoryOnFilterCondition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FilterCondition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PayerOnFilterCondition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PaymentMethodOnFilterCondition` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BudgetOnFilterCondition" DROP CONSTRAINT "BudgetOnFilterCondition_budgetId_fkey";

-- DropForeignKey
ALTER TABLE "BudgetOnFilterCondition" DROP CONSTRAINT "BudgetOnFilterCondition_filterConditionId_fkey";

-- DropForeignKey
ALTER TABLE "CategoryOnFilterCondition" DROP CONSTRAINT "CategoryOnFilterCondition_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoryOnFilterCondition" DROP CONSTRAINT "CategoryOnFilterCondition_filterConditionId_fkey";

-- DropForeignKey
ALTER TABLE "FilterCondition" DROP CONSTRAINT "FilterCondition_customCountingItemTermId_fkey";

-- DropForeignKey
ALTER TABLE "PayerOnFilterCondition" DROP CONSTRAINT "PayerOnFilterCondition_filterConditionId_fkey";

-- DropForeignKey
ALTER TABLE "PayerOnFilterCondition" DROP CONSTRAINT "PayerOnFilterCondition_payerId_fkey";

-- DropForeignKey
ALTER TABLE "PaymentMethodOnFilterCondition" DROP CONSTRAINT "PaymentMethodOnFilterCondition_filterConditionId_fkey";

-- DropForeignKey
ALTER TABLE "PaymentMethodOnFilterCondition" DROP CONSTRAINT "PaymentMethodOnFilterCondition_paymentMethodId_fkey";

-- AlterTable
ALTER TABLE "CustomCountingItemTerm" DROP COLUMN "filterConditionId",
ADD COLUMN     "processed" BOOLEAN[] DEFAULT ARRAY[]::BOOLEAN[];

-- DropTable
DROP TABLE "BudgetOnFilterCondition";

-- DropTable
DROP TABLE "CategoryOnFilterCondition";

-- DropTable
DROP TABLE "FilterCondition";

-- DropTable
DROP TABLE "PayerOnFilterCondition";

-- DropTable
DROP TABLE "PaymentMethodOnFilterCondition";

-- CreateTable
CREATE TABLE "CategoryOnCustomCountingItemTerm" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "customCountingItemTermId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CategoryOnCustomCountingItemTerm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PayerOnCustomCountingItemTerm" (
    "id" SERIAL NOT NULL,
    "payerId" INTEGER NOT NULL,
    "customCountingItemTermId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PayerOnCustomCountingItemTerm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BudgetOnCustomCountingItemTerm" (
    "id" SERIAL NOT NULL,
    "budgetId" INTEGER NOT NULL,
    "customCountingItemTermId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BudgetOnCustomCountingItemTerm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentMethodOnCustomCountingItemTerm" (
    "id" SERIAL NOT NULL,
    "paymentMethodId" INTEGER NOT NULL,
    "customCountingItemTermId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaymentMethodOnCustomCountingItemTerm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CategoryOnCustomCountingItemTerm_categoryId_customCountingI_key" ON "CategoryOnCustomCountingItemTerm"("categoryId", "customCountingItemTermId");

-- CreateIndex
CREATE UNIQUE INDEX "PayerOnCustomCountingItemTerm_payerId_customCountingItemTer_key" ON "PayerOnCustomCountingItemTerm"("payerId", "customCountingItemTermId");

-- CreateIndex
CREATE UNIQUE INDEX "BudgetOnCustomCountingItemTerm_budgetId_customCountingItemT_key" ON "BudgetOnCustomCountingItemTerm"("budgetId", "customCountingItemTermId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentMethodOnCustomCountingItemTerm_paymentMethodId_custo_key" ON "PaymentMethodOnCustomCountingItemTerm"("paymentMethodId", "customCountingItemTermId");

-- AddForeignKey
ALTER TABLE "CategoryOnCustomCountingItemTerm" ADD CONSTRAINT "CategoryOnCustomCountingItemTerm_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryOnCustomCountingItemTerm" ADD CONSTRAINT "CategoryOnCustomCountingItemTerm_customCountingItemTermId_fkey" FOREIGN KEY ("customCountingItemTermId") REFERENCES "CustomCountingItemTerm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayerOnCustomCountingItemTerm" ADD CONSTRAINT "PayerOnCustomCountingItemTerm_payerId_fkey" FOREIGN KEY ("payerId") REFERENCES "Payer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayerOnCustomCountingItemTerm" ADD CONSTRAINT "PayerOnCustomCountingItemTerm_customCountingItemTermId_fkey" FOREIGN KEY ("customCountingItemTermId") REFERENCES "CustomCountingItemTerm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BudgetOnCustomCountingItemTerm" ADD CONSTRAINT "BudgetOnCustomCountingItemTerm_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BudgetOnCustomCountingItemTerm" ADD CONSTRAINT "BudgetOnCustomCountingItemTerm_customCountingItemTermId_fkey" FOREIGN KEY ("customCountingItemTermId") REFERENCES "CustomCountingItemTerm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentMethodOnCustomCountingItemTerm" ADD CONSTRAINT "PaymentMethodOnCustomCountingItemTerm_paymentMethodId_fkey" FOREIGN KEY ("paymentMethodId") REFERENCES "PaymentMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentMethodOnCustomCountingItemTerm" ADD CONSTRAINT "PaymentMethodOnCustomCountingItemTerm_customCountingItemTe_fkey" FOREIGN KEY ("customCountingItemTermId") REFERENCES "CustomCountingItemTerm"("id") ON DELETE CASCADE ON UPDATE CASCADE;
