import { INotificationService } from '~/domain/services';

export class NotificationService implements INotificationService {
  async notify(email?: string): Promise<void> {
    console.log(`Enviando notificação para o e-mail ${email}...`);
    await Promise.resolve();
  }
}
