import {
  Body,
  Controller,
  Inject,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { Customer } from '~/domain/entities';
import {
  CreateAddressModel,
  ICreateCustomerAddressUsecase,
} from '~/domain/usecases';

@Controller('api/v1/customers')
export class CreateCustomerAddressController {
  constructor(
    @Inject(ICreateCustomerAddressUsecase)
    private readonly createCustomerAddressUsecase: ICreateCustomerAddressUsecase,
  ) {}

  @Post(':id/address')
  async post(
    @Param('id', ParseUUIDPipe) customerId: string,
    @Body() createAddressModel: CreateAddressModel,
  ): Promise<Customer> {
    return await this.createCustomerAddressUsecase.execute({
      ...createAddressModel,
      customerId,
    });
  }
}
