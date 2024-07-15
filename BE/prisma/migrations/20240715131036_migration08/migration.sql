-- DropForeignKey
ALTER TABLE "cartProducts" DROP CONSTRAINT "cartProducts_productId_fkey";

-- AddForeignKey
ALTER TABLE "cartProducts" ADD CONSTRAINT "cartProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
