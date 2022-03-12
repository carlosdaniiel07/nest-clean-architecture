import { Address } from '~/domain/entities';

export interface CreateAddressModel {
  street?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  country?: string;
  customerId?: string;
}

export interface ICreateCustomerAddressUsecase {
  execute(createAddressModel: CreateAddressModel): Promise<Address>;
}

export const ICreateCustomerAddressUsecase = Symbol(
  'ICreateCustomerAddressUsecase',
);
