/*
  Warnings:

  - Added the required column `conservationStateDescription` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" ADD COLUMN     "conservationStateDescription" TEXT NOT NULL;
