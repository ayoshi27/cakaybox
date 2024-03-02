-- CreateEnum
CREATE TYPE "Sign" AS ENUM ('PLUS', 'MINUS');

-- CreateTable
CREATE TABLE "CategoryOnFilterCondition" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "filterConditionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CategoryOnFilterCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PayerOnFilterCondition" (
    "id" SERIAL NOT NULL,
    "payerId" INTEGER NOT NULL,
    "filterConditionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PayerOnFilterCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BudgetOnFilterCondition" (
    "id" SERIAL NOT NULL,
    "budgetId" INTEGER NOT NULL,
    "filterConditionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BudgetOnFilterCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentMethodOnFilterCondition" (
    "id" SERIAL NOT NULL,
    "paymentMethodId" INTEGER NOT NULL,
    "filterConditionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaymentMethodOnFilterCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FilterCondition" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "processed" BOOLEAN[] DEFAULT ARRAY[]::BOOLEAN[],
    "customCountingItemTermId" INTEGER NOT NULL,

    CONSTRAINT "FilterCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomCountingItemTerm" (
    "id" SERIAL NOT NULL,
    "sign" "Sign" NOT NULL,
    "coefficient" DOUBLE PRECISION NOT NULL,
    "filterConditionId" INTEGER NOT NULL,
    "customCountingItemId" INTEGER,

    CONSTRAINT "CustomCountingItemTerm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomCountingItem" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CustomCountingItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CategoryOnFilterCondition_categoryId_filterConditionId_key" ON "CategoryOnFilterCondition"("categoryId", "filterConditionId");

-- CreateIndex
CREATE UNIQUE INDEX "PayerOnFilterCondition_payerId_filterConditionId_key" ON "PayerOnFilterCondition"("payerId", "filterConditionId");

-- CreateIndex
CREATE UNIQUE INDEX "BudgetOnFilterCondition_budgetId_filterConditionId_key" ON "BudgetOnFilterCondition"("budgetId", "filterConditionId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentMethodOnFilterCondition_paymentMethodId_filterCondit_key" ON "PaymentMethodOnFilterCondition"("paymentMethodId", "filterConditionId");

-- CreateIndex
CREATE UNIQUE INDEX "FilterCondition_code_key" ON "FilterCondition"("code");

-- CreateIndex
CREATE UNIQUE INDEX "FilterCondition_customCountingItemTermId_key" ON "FilterCondition"("customCountingItemTermId");

-- AddForeignKey
ALTER TABLE "CategoryOnFilterCondition" ADD CONSTRAINT "CategoryOnFilterCondition_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryOnFilterCondition" ADD CONSTRAINT "CategoryOnFilterCondition_filterConditionId_fkey" FOREIGN KEY ("filterConditionId") REFERENCES "FilterCondition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayerOnFilterCondition" ADD CONSTRAINT "PayerOnFilterCondition_payerId_fkey" FOREIGN KEY ("payerId") REFERENCES "Payer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayerOnFilterCondition" ADD CONSTRAINT "PayerOnFilterCondition_filterConditionId_fkey" FOREIGN KEY ("filterConditionId") REFERENCES "FilterCondition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BudgetOnFilterCondition" ADD CONSTRAINT "BudgetOnFilterCondition_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BudgetOnFilterCondition" ADD CONSTRAINT "BudgetOnFilterCondition_filterConditionId_fkey" FOREIGN KEY ("filterConditionId") REFERENCES "FilterCondition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentMethodOnFilterCondition" ADD CONSTRAINT "PaymentMethodOnFilterCondition_paymentMethodId_fkey" FOREIGN KEY ("paymentMethodId") REFERENCES "PaymentMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentMethodOnFilterCondition" ADD CONSTRAINT "PaymentMethodOnFilterCondition_filterConditionId_fkey" FOREIGN KEY ("filterConditionId") REFERENCES "FilterCondition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FilterCondition" ADD CONSTRAINT "FilterCondition_customCountingItemTermId_fkey" FOREIGN KEY ("customCountingItemTermId") REFERENCES "CustomCountingItemTerm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomCountingItemTerm" ADD CONSTRAINT "CustomCountingItemTerm_customCountingItemId_fkey" FOREIGN KEY ("customCountingItemId") REFERENCES "CustomCountingItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
