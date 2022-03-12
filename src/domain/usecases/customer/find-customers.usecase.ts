import { Customer } from '~/domain/entities';

export interface IFindCustomersUsecase {
  execute(): Promise<Customer[]>;
}

export const IFindCustomersUsecase = Symbol('IFindCustomersUsecase');
