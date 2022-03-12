import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ICustomerRepository } from '~/domain/repositories';
import { CustomerSchema } from '~/infra/schemas';
import { CustomerRepository } from './customer.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerSchema])],
  providers: [
    {
      provide: ICustomerRepository,
      useClass: CustomerRepository,
    },
  ],
  exports: [ICustomerRepository],
})
export class CustomerRepositoryModule {}
