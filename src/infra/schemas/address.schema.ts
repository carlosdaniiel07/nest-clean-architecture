import { EntitySchema } from 'typeorm';
import { Address } from '~/domain/entities';

export const AddressSchema = new EntitySchema<Address>({
  name: 'Address',
  tableName: 'address',
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
    street: {
      name: 'street',
      type: 'varchar',
      length: 120,
      nullable: false,
    },
    neighborhood: {
      name: 'neighborhood',
      type: 'varchar',
      length: 50,
      nullable: false,
    },
    city: {
      name: 'city',
      type: 'varchar',
      length: 80,
      nullable: false,
    },
    state: {
      name: 'state',
      type: 'varchar',
      length: 100,
      nullable: false,
    },
    country: {
      name: 'country',
      type: 'varchar',
      length: 100,
      nullable: false,
    },
  },
  relations: {
    customer: {
      target: 'Customer',
      type: 'many-to-one',
      joinColumn: {
        name: 'customer_id',
      },
      inverseSide: 'addresses',
      nullable: false,
    },
  },
});
