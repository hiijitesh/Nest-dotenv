import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    JobsModule,
    UsersModule,
    AdminModule,
    ConfigModule.forRoot({
      // envFilePath: ['.env', '.dev.env'], // Best Practise is use single env file
      // load: [APP_CONFIG, DATABASE_CONFIG, JWT_CONFIG, CRON_CONFIG],
      load: config,
      cache: true,
      expandVariables: true,
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
