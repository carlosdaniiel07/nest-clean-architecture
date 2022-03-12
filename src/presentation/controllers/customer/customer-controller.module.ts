import { Module } from '@nestjs/common';
import { CustomerUsecaseModule } from '~/application/usecases';
import { CreateCustomerAddressController } from './create-customer-address.controller';
import { CreateCustomerController } from './create-customer.controller';
import { FindCustomerController } from './find-customer.controller';
import { FindCustomersController } from './find-customers.controller';

@Module({
  imports: [CustomerUsecaseModule],
  controllers: [
    CreateCustomerController,
    FindCustomerController,
    FindCustomersController,
    CreateCustomerAddressController,
  ],
})
export class CustomerControllerModule {}
