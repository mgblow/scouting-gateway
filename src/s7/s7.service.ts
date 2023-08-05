import { Injectable } from '@nestjs/common';
import { SubscribeS7Dto } from './dto/subscribe-s7.dto';
import s7reader = require('s7reader');
import { WriteS7Dto } from './dto/write-s7.dto';
import * as mqtt from 'mqtt';

@Injectable()
export class S7Service {
  connections: any;
  client: any;

  constructor() {
    this.client = mqtt.connect(process.env.MQTT_URL);
    this.connections = new Map();
  }

  subscribe(createS7Dto: SubscribeS7Dto) {
    const conn = new s7reader();
    conn.configRequest(createS7Dto, this.client);
    this.connections.set(createS7Dto.config.controller.connection_name, conn);
    conn.init();
    conn.poll();
  }

  unsubscribe(connection_name: string) {
    this.connections.get(connection_name).shutdown();
    this.connections.delete(connection_name);
  }

  write(writeS7Dto: WriteS7Dto) {
    try {
      const conn = new s7reader();
      conn.configRequest(writeS7Dto);
      conn.init();
      conn.write();
    } catch (error) {
      console.error(
        error +
          ' happened while tryig to unsubscribe for device : ' +
          writeS7Dto,
      );
    }
  }
}
