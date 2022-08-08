/*
  Warnings:

  - You are about to drop the column `amount` on the `carts` table. All the data in the column will be lost.
  - You are about to drop the `cartBooks` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bookId` to the `carts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cartBooks" DROP CONSTRAINT "cartBooks_bookId_fkey";

-- DropForeignKey
ALTER TABLE "cartBooks" DROP CONSTRAINT "cartBooks_cartId_fkey";

-- AlterTable
ALTER TABLE "carts" DROP COLUMN "amount",
ADD COLUMN     "bookId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "cartBooks";

-- AddForeignKey
ALTER TABLE "carts" ADD CONSTRAINT "carts_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
