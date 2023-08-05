import { Module } from '@nestjs/common';
import { ModbusService } from './modbus.service';
import { ModbusController } from './modbus.controller';

@Module({
  controllers: [ModbusController],
  providers: [ModbusService]
})
export class ModbusModule {}
