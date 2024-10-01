-- CreateTable
CREATE TABLE "TrainSchedule" (
    "id" SERIAL NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "delay" INTEGER NOT NULL,
    "stop_stations" JSONB NOT NULL,

    CONSTRAINT "TrainSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carriage" (
    "id" SERIAL NOT NULL,
    "class" TEXT NOT NULL,
    "placePrice" DOUBLE PRECISION NOT NULL,
    "placesAmount" INTEGER NOT NULL,
    "trainScheduleId" INTEGER,

    CONSTRAINT "Carriage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Carriage" ADD CONSTRAINT "Carriage_trainScheduleId_fkey" FOREIGN KEY ("trainScheduleId") REFERENCES "TrainSchedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;
