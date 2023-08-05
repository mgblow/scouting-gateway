import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SubscribeModbusDto } from './dto/subscribe-modbus.dto';
import { WriteModbusDto } from './dto/write-modbus.dto';
import { ModbusService } from './modbus.service';

@Controller()
export class ModbusController {
  constructor(private readonly modbusService: ModbusService) {}

  @MessagePattern('scouting/modbus/subscribe')
  subscribe(@Payload() subscribeModbusDto: SubscribeModbusDto) {
    return this.modbusService.subscribe(subscribeModbusDto);
  }

  @MessagePattern('scouting/modbus/unsubscribe')
  unsubscribe(@Payload() connection_name: string) {
    return this.modbusService.unsubscribe(connection_name);
  }

  @MessagePattern('scouting/plc/siemens/write')
  write(@Payload() writeModbusDto: WriteModbusDto) {
    return this.modbusService.write(writeModbusDto);
  }
}
