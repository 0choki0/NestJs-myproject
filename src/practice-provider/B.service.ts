import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { ServiceA } from './A.service';

@Injectable()
export class ServiceB extends BaseService {
  
  getHello(): string {
    return this.doSomeFuncFromA();
  }
}