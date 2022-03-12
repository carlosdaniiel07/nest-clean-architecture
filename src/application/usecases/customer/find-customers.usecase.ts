import { Inject } from '@nestjs/common';
import { Customer } from '~/domain/entities';
import { ICustomerRepository } from '~/domain/repositories';
import { IFindCustomersUsecase } from '~/domain/usecases';

export class FindCustomersUsecase implements IFindCustomersUsecase {
  constructor(
    @Inject(ICustomerRepository)
    private readonly repository: ICustomerRepository,
  ) {}

  async execute(): Promise<Customer[]> {
    return await this.repository.findAll(['addresses']);
  }
}
