import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertSchedule, Schedule } from './dto/schedule';
import { Prisma } from '@prisma/client';

@Injectable()
export class ScheduleService {
  constructor(private prisma: PrismaService) {}

  async schedules(): Promise<Schedule[]> {
    return this.prisma.trainSchedule.findMany();
  }

  async scheduleById(
    id: Prisma.TrainScheduleWhereUniqueInput,
  ): Promise<Schedule> {
    return this.prisma.trainSchedule.findUnique({ where: id });
  }

  async createSchedule(data: InsertSchedule): Promise<Schedule> {
    return this.prisma.trainSchedule.create({
      data: {
        from: data.from,
        to: data.to,
        start: new Date(data.start).toISOString(),
        end: new Date(data.end).toISOString(),
        delay: data.delay || 0,
        stop_stations: JSON.stringify(data.stop_stations),
      },
    });
  }

  async deleteSchedule(
    where: Prisma.TrainScheduleWhereUniqueInput,
  ): Promise<Schedule> {
    return this.prisma.trainSchedule.delete({ where });
  }

  async updateSchedule(
    where: Prisma.TrainScheduleWhereUniqueInput,
    data: InsertSchedule,
  ): Promise<Schedule> {
    return this.prisma.trainSchedule.update({
      where,
      data: {
        from: data.from,
        to: data.to,
        start: new Date(data.start).toISOString(),
        end: new Date(data.end).toISOString(),
        delay: data.delay || 0,
        stop_stations: JSON.stringify(data.stop_stations),
      },
    });
  }
}
