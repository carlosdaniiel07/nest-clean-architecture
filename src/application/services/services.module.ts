import { Module } from '@nestjs/common';
import { INotificationService } from '~/domain/services';
import { NotificationService } from './notification.service';

@Module({
  providers: [
    {
      provide: INotificationService,
      useClass: NotificationService,
    },
  ],
  exports: [INotificationService],
})
export class ServicesModule {}
