import { Module } from '@nestjs/common';
import { S7Service } from './s7.service';
import { S7Controller } from './s7.controller';

@Module({
  controllers: [S7Controller],
  providers: [S7Service]
})
export class S7Module {}
