import { Address } from '~/domain/entities';
import { IBaseRepository } from './base.repository';

export type IAddressRepository = IBaseRepository<Address>;

export const IAddressRepository = Symbol('IAddressRepository');
