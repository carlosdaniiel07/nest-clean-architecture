import { Inject } from '@nestjs/common';
import { Customer } from '~/domain/entities';
import { ICustomerRepository } from '~/domain/repositories';
import { CreateCustomerModel, ICreateCustomerUsecase } from '~/domain/usecases';

export class CreateCustomerUsecase implements ICreateCustomerUsecase {
  constructor(
    @Inject(ICustomerRepository)
    private readonly repository: ICustomerRepository,
  ) {}

  async execute(createCustomerModel: CreateCustomerModel): Promise<Customer> {
    return await this.repository.save({
      ...createCustomerModel,
    });
  }
}
