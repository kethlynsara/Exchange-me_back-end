/*
  Warnings:

  - You are about to drop the column `bookId` on the `exchangeRequests` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `orderBooks` table. All the data in the column will be lost.
  - Added the required column `orderBookId` to the `exchangeRequests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressId` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "exchangeRequests" DROP CONSTRAINT "exchangeRequests_bookId_fkey";

-- DropForeignKey
ALTER TABLE "orderBooks" DROP CONSTRAINT "orderBooks_ownerId_fkey";

-- AlterTable
ALTER TABLE "exchangeRequests" DROP COLUMN "bookId",
ADD COLUMN     "orderBookId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "orderBooks" DROP COLUMN "ownerId";

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "addressId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "adresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exchangeRequests" ADD CONSTRAINT "exchangeRequests_orderBookId_fkey" FOREIGN KEY ("orderBookId") REFERENCES "orderBooks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
