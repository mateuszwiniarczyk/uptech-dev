/*
  Warnings:

  - The values [HUMAN] on the enum `Type` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `humans` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Type_new" AS ENUM ('EMPLOYEE', 'COMPANY');
ALTER TABLE "users" ALTER COLUMN "type" TYPE "Type_new" USING ("type"::text::"Type_new");
ALTER TYPE "Type" RENAME TO "Type_old";
ALTER TYPE "Type_new" RENAME TO "Type";
DROP TYPE "Type_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "humans" DROP CONSTRAINT "humans_userId_fkey";

-- DropTable
DROP TABLE "humans";

-- CreateTable
CREATE TABLE "employees" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "secondName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
