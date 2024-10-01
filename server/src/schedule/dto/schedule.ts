import { JsonValue } from '@prisma/client/runtime/library';

export interface InsertSchedule {
  id: number;
  from: string;
  to: string;
  start: Date;
  end: Date;
  delay?: number;

  stop_stations: { station: string; start: Date; end: Date }[];
}

export interface Schedule {
  id: number;
  from: string;
  to: string;
  start: Date;
  end: Date;
  delay: number;

  stop_stations: JsonValue;
}

export interface Carriage {
  id: number;
  class: string;
  place_price: number;
  place_amount: number;
  train_schedule: Schedule;
  train_scheduleId: number;
}
