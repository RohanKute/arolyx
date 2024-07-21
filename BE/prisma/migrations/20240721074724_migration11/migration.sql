/*
  Warnings:

  - You are about to drop the column `dicountedPrice` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "dicountedPrice",
ADD COLUMN     "discountedPrice" INTEGER NOT NULL DEFAULT 0;
