import { Module } from '@nestjs/common';
import {
  ICreateCustomerAddressUsecase,
  ICreateCustomerUsecase,
  IFindCustomersUsecase,
  IFindCustomerUsecase,
} from '~/domain/usecases';
import {
  AddressRepositoryModule,
  CustomerRepositoryModule,
} from '~/infra/repositories';
import { CreateCustomerAddressUsecase } from './create-customer-address.usecase';
import { CreateCustomerUsecase } from './create-customer.usecase';
import { FindCustomerUsecase } from './find-customer.usecase';
import { FindCustomersUsecase } from './find-customers.usecase';

@Module({
  imports: [CustomerRepositoryModule, AddressRepositoryModule],
  providers: [
    {
      provide: ICreateCustomerUsecase,
      useClass: CreateCustomerUsecase,
    },
    {
      provide: IFindCustomersUsecase,
      useClass: FindCustomersUsecase,
    },
    {
      provide: IFindCustomerUsecase,
      useClass: FindCustomerUsecase,
    },
    {
      provide: ICreateCustomerAddressUsecase,
      useClass: CreateCustomerAddressUsecase,
    },
  ],
  exports: [
    ICreateCustomerUsecase,
    IFindCustomersUsecase,
    IFindCustomerUsecase,
    ICreateCustomerAddressUsecase,
  ],
})
export class CustomerUsecaseModule {}
