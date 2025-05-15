/*
  Warnings:

  - You are about to drop the column `username` on the `cart` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cart" DROP COLUMN "username",
ADD COLUMN     "userid" INTEGER NOT NULL DEFAULT 0;
