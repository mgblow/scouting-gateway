import { Test, TestingModule } from '@nestjs/testing';
import { ModbusController } from './modbus.controller';
import { ModbusService } from './modbus.service';

describe('ModbusController', () => {
  let controller: ModbusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModbusController],
      providers: [ModbusService],
    }).compile();

    controller = module.get<ModbusController>(ModbusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
