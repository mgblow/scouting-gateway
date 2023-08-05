export class WriteModbusDto {
  config: {
    connection_name: any;
    controller: any;
    pullingInterval: string;
  };
  tags: [];
  values: [];
}
