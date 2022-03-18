import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Address, Customer } from '~/domain/entities';
import { Gender } from '~/domain/enums';
import { BusinessRuleException } from '~/domain/errors';
import { IAddressRepository, ICustomerRepository } from '~/domain/repositories';
import {
  CreateAddressModel,
  ICreateCustomerAddressUsecase,
} from '~/domain/usecases';
import { AddressRepository } from '~/infra/repositories/address/address.repository';
import { CustomerRepository } from '~/infra/repositories/customer/customer.repository';
import { Repository } from '~/infra/repositories/repository';
import { AddressSchema, CustomerSchema } from '~/infra/schemas';
import { CreateCustomerAddressUsecase } from './create-customer-address.usecase';

describe('CreateCustomerAddressUsecase', () => {
  let sut: ICreateCustomerAddressUsecase;
  let addressRepository: IAddressRepository;
  let customerRepository: ICustomerRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(AddressSchema),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(CustomerSchema),
          useClass: Repository,
        },
        {
          provide: IAddressRepository,
          useClass: AddressRepository,
        },
        {
          provide: ICustomerRepository,
          useClass: CustomerRepository,
        },
        {
          provide: ICreateCustomerAddressUsecase,
          useClass: CreateCustomerAddressUsecase,
        },
      ],
    }).compile();

    sut = moduleRef.get<ICreateCustomerAddressUsecase>(
      ICreateCustomerAddressUsecase,
    );
    addressRepository = moduleRef.get<IAddressRepository>(IAddressRepository);
    customerRepository =
      moduleRef.get<ICustomerRepository>(ICustomerRepository);
  });

  it('should sut instance to be truthy', () => {
    expect(sut).toBeTruthy();
  });

  it('should add address to a specific customer', async () => {
    const createAddressModel = getCreateAddressModelMock();
    const customer = getCustomerMock();
    const createdAddress = getAddressMock();

    const customerRepositoryFindByIdSpy = jest
      .spyOn(customerRepository, 'findById')
      .mockReturnValue(Promise.resolve(customer));
    const addressRepositorySaveSpy = jest
      .spyOn(addressRepository, 'save')
      .mockReturnValue(Promise.resolve(createdAddress));

    const response = await sut.execute(createAddressModel);

    expect(response).toBeTruthy();
    expect(response).toEqual(createdAddress);
    expect(customerRepositoryFindByIdSpy).toBeCalledTimes(1);
    expect(addressRepositorySaveSpy).toBeCalledTimes(1);
  });

  it('should throw exception if customer was not found', async () => {
    const createAddressModel = getCreateAddressModelMock();

    const customerRepositoryFindByIdSpy = jest
      .spyOn(customerRepository, 'findById')
      .mockReturnValue(Promise.resolve(null));
    const addressRepositorySaveSpy = jest.spyOn(addressRepository, 'save');

    const response = sut.execute(createAddressModel);

    await expect(response).rejects.toThrow(
      new BusinessRuleException('Cliente não encontrado'),
    );
    expect(customerRepositoryFindByIdSpy).toBeCalledTimes(1);
    expect(addressRepositorySaveSpy).toBeCalledTimes(0);
  });

  const getCreateAddressModelMock = (): CreateAddressModel => ({
    street: '3001 Beacon Light Rd',
    neighborhood: '3001 Beacon Light Rd',
    city: 'Ruston',
    state: 'Louisiana (LA)',
    country: 'US',
    customerId: '73c61f8c-9cf1-46a8-9c96-101130e82ed7',
  });

  const getCustomerMock = (): Customer => ({
    id: '73c61f8c-9cf1-46a8-9c96-101130e82ed7',
    name: 'John Doe',
    email: 'john.doe@email.com',
    birthDate: new Date(),
    gender: Gender.Male,
    phone: '582838283',
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const getAddressMock = (): Address => ({
    id: '1e9111d1-3a8e-4e2d-80d1-eafa06a5d1bd',
    street: '3001 Beacon Light Rd',
    neighborhood: '3001 Beacon Light Rd',
    city: 'Ruston',
    state: 'Louisiana (LA)',
    country: 'US',
    createdAt: new Date(),
    updatedAt: new Date(),
  });
});
