/*
  Warnings:

  - You are about to drop the column `placePrice` on the `Carriage` table. All the data in the column will be lost.
  - You are about to drop the column `placesAmount` on the `Carriage` table. All the data in the column will be lost.
  - You are about to drop the column `trainScheduleId` on the `Carriage` table. All the data in the column will be lost.
  - Added the required column `place_price` to the `Carriage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `places_amount` to the `Carriage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Carriage" DROP CONSTRAINT "Carriage_trainScheduleId_fkey";

-- AlterTable
ALTER TABLE "Carriage" DROP COLUMN "placePrice",
DROP COLUMN "placesAmount",
DROP COLUMN "trainScheduleId",
ADD COLUMN     "place_price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "places_amount" INTEGER NOT NULL,
ADD COLUMN     "train_scheduleId" INTEGER;

-- AddForeignKey
ALTER TABLE "Carriage" ADD CONSTRAINT "Carriage_train_scheduleId_fkey" FOREIGN KEY ("train_scheduleId") REFERENCES "TrainSchedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;
