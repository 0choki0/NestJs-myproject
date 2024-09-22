import { Test, TestingModule } from '@nestjs/testing';
import { PracticeProviderController } from './practice-provider.controller';
import { PracticeProviderService } from './practice-provider.service';

describe('PracticeProviderController', () => {
  let controller: PracticeProviderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PracticeProviderController],
      providers: [PracticeProviderService],
    }).compile();

    controller = module.get<PracticeProviderController>(PracticeProviderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
