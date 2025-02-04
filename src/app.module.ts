import { Global, Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';

@Global()
@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
