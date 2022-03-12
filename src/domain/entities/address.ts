import { BaseEntity } from './base.entity';
import { Customer } from './customer';

export interface Address extends BaseEntity {
  street?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  country?: string;
  customer?: Customer;
}
