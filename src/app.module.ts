import { Module } from '@nestjs/common';
import { RepositoriesModule } from '~/infra/repositories';
import { ControllersModule } from '~/presentation/controllers';

@Module({
  imports: [ControllersModule, RepositoriesModule],
})
export class AppModule {}
