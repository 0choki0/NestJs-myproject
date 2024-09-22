import { Module } from '@nestjs/common';
import { PracticeProviderController } from './practice-provider.controller';
import { ServiceA } from './A.service';
import { ServiceB } from './B.service';
import { BaseService } from './base.service';

@Module({
  controllers: [PracticeProviderController],
  providers: [ BaseService, ServiceA, ServiceB],
})
export class PracticeProviderModule {}
