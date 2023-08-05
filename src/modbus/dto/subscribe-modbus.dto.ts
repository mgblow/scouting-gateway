export class SubscribeModbusDto {
  config: {
    connection_name: any;
    controller: any;
    pullingInterval: string;
  };
  tags: [];
}
