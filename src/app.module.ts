import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { AdminModule } from './admin/admin.module';
import { RoutesModule } from './route.module';

@Module({
  imports: [
    RoutesModule,
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
