import { Inject } from '@nestjs/common';
import { Customer } from '~/domain/entities';
import { EntityNotFoundException } from '~/domain/errors';
import { ICustomerRepository } from '~/domain/repositories';
import { IFindCustomerUsecase } from '~/domain/usecases';

export class FindCustomerUsecase implements IFindCustomerUsecase {
  constructor(
    @Inject(ICustomerRepository)
    private readonly repository: ICustomerRepository,
  ) {}

  async execute(id: string): Promise<Customer> {
    const customer = await this.repository.findById(id, ['addresses']);

    if (!customer) {
      throw new EntityNotFoundException('Cliente não encontrado');
    }

    return customer;
  }
}
