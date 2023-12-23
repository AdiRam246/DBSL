import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvConfigModule } from '../env-config/env-config.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [EnvConfigModule],
      useFactory: async () => ({
        uri: process.env.DATABASE_URL,
      }),
    }),
  ],
})
export class DatabaseModule {}