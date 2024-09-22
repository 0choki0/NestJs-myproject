import { Inject } from '@nestjs/common';
import { ServiceA } from './A.service';

export class BaseService {
  @Inject(ServiceA) private readonly serviceA: ServiceA

  getHello(): string {
    return 'Hello World BASE!';
  }

  doSomeFuncFromA(): string {
    return this.serviceA.getHello();
  }
}