import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressSchema, CustomerSchema } from '~/infra/schemas';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.99.100',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest_clean_architecture',
      entities: [CustomerSchema, AddressSchema],
      synchronize: true,
      logging: ['query'],
    }),
  ],
})
export class RepositoriesModule {}
