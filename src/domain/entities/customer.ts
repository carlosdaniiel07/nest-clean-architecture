import { Gender } from '~/domain/enums';
import { Address } from './address';
import { BaseEntity } from './base.entity';

export interface Customer extends BaseEntity {
  name?: string;
  email?: string;
  gender?: Gender;
  phone?: string;
  birthDate?: Date;
  addresses?: Address[];
}
