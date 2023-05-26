import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AdminService } from './admin.service';
import { ADMIN_DATABASE_CONFIG } from './database.config';

@Module({
  //this is for env of particular feature
  imports: [ConfigModule.forFeature(ADMIN_DATABASE_CONFIG)],
  providers: [AdminService],
})
export class AdminModule {}
