/*
  Warnings:

  - Added the required column `payerId` to the `PaymentMethod` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PaymentMethod" ADD COLUMN     "payerId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "PaymentMethod" ADD CONSTRAINT "PaymentMethod_payerId_fkey" FOREIGN KEY ("payerId") REFERENCES "Payer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

update "PaymentMethod" set "payerId" = 1 where "id" = 1;
update "PaymentMethod" set "payerId" = 1 where "id" = 2;
update "PaymentMethod" set "payerId" = 1 where "id" = 3;
update "PaymentMethod" set "payerId" = 2 where "id" = 4;
update "PaymentMethod" set "payerId" = 1 where "id" = 5;
