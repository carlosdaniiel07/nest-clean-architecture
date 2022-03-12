import { Module } from '@nestjs/common';
import { CustomerControllerModule } from '~/presentation/controllers/customer';

@Module({
  imports: [CustomerControllerModule],
})
export class ControllersModule {}
