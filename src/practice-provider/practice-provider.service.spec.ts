import { Test, TestingModule } from '@nestjs/testing';
import { PracticeProviderService } from './practice-provider.service';

describe('PracticeProviderService', () => {
  let service: PracticeProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PracticeProviderService],
    }).compile();

    service = module.get<PracticeProviderService>(PracticeProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
