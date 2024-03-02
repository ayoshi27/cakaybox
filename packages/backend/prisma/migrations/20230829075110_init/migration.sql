/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `CustomCountingItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `CustomCountingItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CustomCountingItem" ADD COLUMN     "code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CustomCountingItem_code_key" ON "CustomCountingItem"("code");
