import { InjectRepository } from '@nestjs/typeorm';
import { Repository as TypeOrmRepository } from 'typeorm';
import { Address } from '~/domain/entities';
import { IAddressRepository } from '~/domain/repositories';
import { Repository } from '~/infra/repositories/repository';
import { AddressSchema } from '~/infra/schemas';

export class AddressRepository
  extends Repository<Address>
  implements IAddressRepository
{
  constructor(
    @InjectRepository(AddressSchema) repository: TypeOrmRepository<Address>,
  ) {
    super(repository);
  }
}
