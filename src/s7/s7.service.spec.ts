import { Test, TestingModule } from '@nestjs/testing';
import { S7Service } from './s7.service';

describe('S7Service', () => {
  let service: S7Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [S7Service],
    }).compile();

    service = module.get<S7Service>(S7Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
