import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { InsertSchedule } from './dto/schedule';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}
  @Get()
  async getSchedules() {
    return this.scheduleService.schedules();
  }

  @Get(':id')
  async getScheduleById(@Param('id') id: string) {
    const numId = Number(id);
    return this.scheduleService.scheduleById({ id: numId });
  }

  @Post()
  async createSchedule(@Body() scheduleData: InsertSchedule) {
    return this.scheduleService.createSchedule(scheduleData);
  }

  @Delete(':id')
  async deleteSchedule(@Param('id') id: string) {
    const numId = Number(id);
    return this.scheduleService.deleteSchedule({ id: numId });
  }

  @Put(':id')
  async updateSchedule(
    @Param('id') id: string,
    @Body() scheduleData: InsertSchedule,
  ) {
    const numId = Number(id);
    return this.scheduleService.updateSchedule({ id: numId }, scheduleData);
  }
}
