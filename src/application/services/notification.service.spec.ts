import { Test } from '@nestjs/testing';
import { INotificationService } from '~/domain/services';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let sut: INotificationService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: INotificationService,
          useClass: NotificationService,
        },
      ],
    }).compile();

    sut = moduleRef.get<INotificationService>(INotificationService);
  });

  it('should sut instance to be truthy', () => {
    expect(sut).toBeTruthy();
  });

  it('should call notify with any email', async () => {
    await sut.notify('john.doe@email.com');
  });
});
