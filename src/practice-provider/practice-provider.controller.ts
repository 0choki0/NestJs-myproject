import { Controller, Get } from '@nestjs/common';
import { BaseService } from './base.service';
import { ServiceB } from './B.service';
import { ServiceA } from './A.service';

@Controller('practice-provider')
export class PracticeProviderController {
  constructor(
    private readonly service: BaseService,
    private readonly serviceA: ServiceA,
    private readonly serviceB: ServiceB
  ) {}

  @Get()
  test() {
    return this.serviceB.doSomeFuncFromA()
  }
}
