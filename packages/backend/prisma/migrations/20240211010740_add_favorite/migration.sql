-- CreateTable
CREATE TABLE "FavoriteExpendItem" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "payerId" INTEGER NOT NULL,
    "budgetId" INTEGER NOT NULL,
    "paymentMethodId" INTEGER NOT NULL,
    "processed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "FavoriteExpendItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteExpendItem_code_key" ON "FavoriteExpendItem"("code");

-- AddForeignKey
ALTER TABLE "FavoriteExpendItem" ADD CONSTRAINT "FavoriteExpendItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteExpendItem" ADD CONSTRAINT "FavoriteExpendItem_payerId_fkey" FOREIGN KEY ("payerId") REFERENCES "Payer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteExpendItem" ADD CONSTRAINT "FavoriteExpendItem_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteExpendItem" ADD CONSTRAINT "FavoriteExpendItem_paymentMethodId_fkey" FOREIGN KEY ("paymentMethodId") REFERENCES "PaymentMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
