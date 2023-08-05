import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { S7Service } from './s7.service';
import { SubscribeS7Dto } from './dto/subscribe-s7.dto';
import { WriteS7Dto } from './dto/write-s7.dto';

@Controller()
export class S7Controller {
  constructor(private readonly s7Service: S7Service) {}

  @MessagePattern('scouting/plc/siemens/subscribe')
  subscribe(@Payload() createS7Dto: SubscribeS7Dto) {
    return this.s7Service.subscribe(createS7Dto);
  }

  @MessagePattern('scouting/plc/siemens/unsubscribe')
  unsubscribe(@Payload() connection_name: string) {
    return this.s7Service.unsubscribe(connection_name);
  }

  @MessagePattern('scouting/plc/siemens/write')
  write(@Payload() writeS7Dto: WriteS7Dto) {
    return this.s7Service.write(writeS7Dto);
  }
}
