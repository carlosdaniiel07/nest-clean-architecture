import { InjectRepository } from '@nestjs/typeorm';
import { Repository as TypeOrmRepository } from 'typeorm';
import { Customer } from '~/domain/entities';
import { ICustomerRepository } from '~/domain/repositories';
import { Repository } from '~/infra/repositories/repository';
import { CustomerSchema } from '~/infra/schemas';

export class CustomerRepository
  extends Repository<Customer>
  implements ICustomerRepository
{
  constructor(
    @InjectRepository(CustomerSchema) repository: TypeOrmRepository<Customer>,
  ) {
    super(repository);
  }
}
