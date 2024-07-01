/*
  Warnings:

  - Added the required column `quantity` to the `cartProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cartProducts" ADD COLUMN     "quantity" INTEGER NOT NULL;
