import { Customer } from '~/domain/entities';

export interface IFindCustomerUsecase {
  execute(id: string): Promise<Customer | null>;
}

export const IFindCustomerUsecase = Symbol('IFindCustomerUsecase');
