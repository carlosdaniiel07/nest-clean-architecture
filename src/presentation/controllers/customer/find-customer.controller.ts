import { Controller, Get, Inject, Param } from '@nestjs/common';
import { Customer } from '~/domain/entities';
import { IFindCustomerUsecase } from '~/domain/usecases';

@Controller('api/v1/customers')
export class FindCustomerController {
  constructor(
    @Inject(IFindCustomerUsecase)
    private readonly findCustomerUsecase: IFindCustomerUsecase,
  ) {}

  @Get(':id')
  async get(@Param('id') id: string): Promise<Customer | null> {
    return await this.findCustomerUsecase.execute(id);
  }
}
