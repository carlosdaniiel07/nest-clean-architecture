import { Customer } from '~/domain/entities';
import { IBaseRepository } from './base.repository';

export type ICustomerRepository = IBaseRepository<Customer>;

export const ICustomerRepository = Symbol('ICustomerRepository');
