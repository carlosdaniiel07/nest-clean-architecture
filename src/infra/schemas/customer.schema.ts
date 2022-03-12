import { EntitySchema } from 'typeorm';
import { Customer } from '~/domain/entities';

export const CustomerSchema = new EntitySchema<Customer>({
  name: 'Customer',
  tableName: 'customer',
  columns: {
    id: {
      name: 'id',
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    createdAt: {
      name: 'created_at',
      type: 'timestamp without time zone',
      createDate: true,
      nullable: false,
    },
    updatedAt: {
      name: 'updated_at',
      type: 'timestamp without time zone',
      updateDate: true,
      nullable: false,
    },
    name: {
      name: 'name',
      type: 'varchar',
      length: 80,
      nullable: false,
    },
    email: {
      name: 'email',
      type: 'varchar',
      length: 120,
      nullable: false,
      unique: true,
    },
    gender: {
      name: 'gender',
      type: 'varchar',
      length: 50,
      nullable: false,
    },
    phone: {
      name: 'phone',
      type: 'varchar',
      length: 20,
      nullable: false,
    },
    birthDate: {
      name: 'birth_date',
      type: 'date',
      nullable: false,
    },
  },
  relations: {
    addresses: {
      target: 'Address',
      type: 'one-to-many',
      inverseSide: 'customer',
      cascade: ['insert', 'remove'],
    },
  },
});
