import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PracticeProviderModule } from './practice-provider/practice-provider.module';

@Module({
  imports: [UsersModule, PracticeProviderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
