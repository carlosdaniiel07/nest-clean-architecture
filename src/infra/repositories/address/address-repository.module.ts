import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IAddressRepository } from '~/domain/repositories';
import { AddressSchema } from '~/infra/schemas';
import { AddressRepository } from './address.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AddressSchema])],
  providers: [
    {
      provide: IAddressRepository,
      useClass: AddressRepository,
    },
  ],
  exports: [IAddressRepository],
})
export class AddressRepositoryModule {}
