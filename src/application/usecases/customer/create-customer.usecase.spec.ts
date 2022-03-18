import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Customer } from '~/domain/entities';
import { Gender } from '~/domain/enums';
import { ICustomerRepository } from '~/domain/repositories';
import { CreateCustomerModel, ICreateCustomerUsecase } from '~/domain/usecases';
import { CustomerRepository } from '~/infra/repositories/customer/customer.repository';
import { Repository } from '~/infra/repositories/repository';
import { CustomerSchema } from '~/infra/schemas';
import { CreateCustomerUsecase } from './create-customer.usecase';

describe('CreateCustomerUsecase', () => {
  let sut: ICreateCustomerUsecase;
  let customerRepository: ICustomerRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(CustomerSchema),
          useClass: Repository,
        },
        {
          provide: ICustomerRepository,
          useClass: CustomerRepository,
        },
        {
          provide: ICreateCustomerUsecase,
          useClass: CreateCustomerUsecase,
        },
      ],
    }).compile();

    sut = moduleRef.get<ICreateCustomerUsecase>(ICreateCustomerUsecase);
    customerRepository =
      moduleRef.get<ICustomerRepository>(ICustomerRepository);
  });

  it('should sut instance to be truthy', () => {
    expect(sut).toBeTruthy();
  });

  it('should create a customer and returns the created customer', async () => {
    const createCustomerModel = getCreateCustomerModelMock();
    const createdCustomer = getCustomerMock();

    const customerRepositorySaveSpy = jest
      .spyOn(customerRepository, 'save')
      .mockReturnValue(Promise.resolve(createdCustomer));

    const response = await sut.execute(createCustomerModel);

    expect(response).toBeTruthy();
    expect(response).toEqual(createdCustomer);
    expect(customerRepositorySaveSpy).toBeCalledTimes(1);
  });

  const getCreateCustomerModelMock = (): CreateCustomerModel => ({
    name: 'John Doe',
    email: 'john.doe@email.com',
    birthDate: new Date(),
    gender: Gender.Male,
    phone: '582838283',
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
});
