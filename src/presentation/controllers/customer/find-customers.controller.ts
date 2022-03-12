import { Controller, Get, Inject } from '@nestjs/common';
import { Customer } from '~/domain/entities';
import { IFindCustomersUsecase } from '~/domain/usecases';

@Controller('api/v1/customers')
export class FindCustomersController {
  constructor(
    @Inject(IFindCustomersUsecase)
    private readonly findCustomersUsecase: IFindCustomersUsecase,
  ) {}

  @Get()
  async get(): Promise<Customer[]> {
    return await this.findCustomersUsecase.execute();
  }
}
