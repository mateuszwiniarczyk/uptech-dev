/*
  Warnings:

  - Added the required column `userId` to the `companies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `humans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "companies" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "humans" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "humans" ADD CONSTRAINT "humans_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
