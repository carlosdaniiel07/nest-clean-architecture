import { Inject } from '@nestjs/common';
import { Address } from '~/domain/entities';
import { BusinessRuleException } from '~/domain/errors';
import { IAddressRepository, ICustomerRepository } from '~/domain/repositories';
import {
  CreateAddressModel,
  ICreateCustomerAddressUsecase,
} from '~/domain/usecases';

export class CreateCustomerAddressUsecase
  implements ICreateCustomerAddressUsecase
{
  constructor(
    @Inject(IAddressRepository)
    private readonly addressRepository: IAddressRepository,
    @Inject(ICustomerRepository)
    private readonly customerRepository: ICustomerRepository,
  ) {}

  async execute(createAddressModel: CreateAddressModel): Promise<Address> {
    const { customerId } = createAddressModel;
    const customer = await this.customerRepository.findById(
      customerId as string,
    );

    if (!customer) {
      throw new BusinessRuleException('Cliente não encontrado');
    }

    return await this.addressRepository.save({
      ...createAddressModel,
      customer,
    });
  }
}
