import { Customer } from '~/domain/entities';
import { Gender } from '~/domain/enums';
import { CreateAddressModel } from './create-customer-address.usecase';

export interface CreateCustomerModel {
  name?: string;
  email?: string;
  gender?: Gender;
  phone?: string;
  birthDate?: Date;
  addresses?: CreateAddressModel[];
}

export interface ICreateCustomerUsecase {
  execute(createCustomerModel: CreateCustomerModel): Promise<Customer>;
}

export const ICreateCustomerUsecase = Symbol('ICreateCustomerUsecase');
