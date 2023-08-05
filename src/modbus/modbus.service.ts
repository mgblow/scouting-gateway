import { Injectable } from '@nestjs/common';
import { SubscribeModbusDto } from './dto/subscribe-modbus.dto';
import { WriteModbusDto } from './dto/write-modbus.dto';
import modbusReader = require('mbtcpprotocol');
import * as mqtt from 'mqtt';

@Injectable()
export class ModbusService {
  connections: any;
  client: any;

  constructor() {
    this.client = mqtt.connect(process.env.MQTT_URL);
    this.connections = new Map();
  }

  subscribe(createModbusDto: SubscribeModbusDto) {
    const conn = new modbusReader();
    conn.configRequest(createModbusDto, this.client);
    this.connections.set(
      createModbusDto.config.controller.connection_name,
      conn,
    );
    conn.init();
    conn.poll();
  }

  unsubscribe(connection_name: string) {
    this.connections.get(connection_name).shutdown();
    this.connections.delete(connection_name);
  }

  write(writeModbusDto: WriteModbusDto) {
    try {
      const conn = new modbusReader();
      conn.configRequest(writeModbusDto);
      conn.init();
      conn.write();
    } catch (error) {
      console.error(
        error +
          ' happened while tryig to unsubscribe for device : ' +
          writeModbusDto,
      );
    }
  }
}
