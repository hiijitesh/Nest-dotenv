import { Routes, RouterModule } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { JobsModule } from './jobs/jobs.module';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  {
    path: 'v1', // Wildcard route to match any other routes
    children: [{ path: '/users', module: UsersModule }],
  },
  {
    path: '/v1',
    children: [{ path: '/jobs', module: JobsModule }],
  },
];

@Module({
  imports: [RouterModule.register(routes), JobsModule, UsersModule],
  exports: [RouterModule],
})
export class RoutesModule {}
