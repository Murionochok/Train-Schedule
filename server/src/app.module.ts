import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ScheduleModule } from './schedule/schedule.module';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [AuthModule, UsersModule, PrismaModule, ScheduleModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, AuthGuard],
})
export class AppModule {}
