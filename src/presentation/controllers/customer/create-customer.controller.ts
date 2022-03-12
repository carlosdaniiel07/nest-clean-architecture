import { Body, Controller, Inject, Post } from '@nestjs/common';
import { Customer } from '~/domain/entities';
import { CreateCustomerModel, ICreateCustomerUsecase } from '~/domain/usecases';

@Controller('api/v1/customers')
export class CreateCustomerController {
  constructor(
    @Inject(ICreateCustomerUsecase)
    private readonly createCustomerUsecase: ICreateCustomerUsecase,
  ) {}

  @Post()
  async post(
    @Body() createCustomerModel: CreateCustomerModel,
  ): Promise<Customer> {
    return await this.createCustomerUsecase.execute(createCustomerModel);
  }
}
