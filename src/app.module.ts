import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { S7Module } from './s7/s7.module';
import { ModbusModule } from './modbus/modbus.module';

@Module({
  imports: [S7Module, ModbusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
