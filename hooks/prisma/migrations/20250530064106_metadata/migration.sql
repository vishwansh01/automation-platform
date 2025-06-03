/*
  Warnings:

  - Added the required column `image` to the `AvailableActions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `AvailableTriggers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Zap` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Action" ADD COLUMN     "metadata" JSONB NOT NULL DEFAULT '{}';

-- AlterTable
ALTER TABLE "AvailableActions" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "AvailableTriggers" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Trigger" ADD COLUMN     "metadata" JSONB NOT NULL DEFAULT '{}';

-- AlterTable
ALTER TABLE "Zap" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Zap" ADD CONSTRAINT "Zap_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
