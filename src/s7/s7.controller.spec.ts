import { Test, TestingModule } from '@nestjs/testing';
import { S7Controller } from './s7.controller';
import { S7Service } from './s7.service';

describe('S7Controller', () => {
  let controller: S7Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [S7Controller],
      providers: [S7Service],
    }).compile();

    controller = module.get<S7Controller>(S7Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
