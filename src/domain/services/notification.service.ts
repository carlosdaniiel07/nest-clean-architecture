export interface INotificationService {
  notify(email?: string): Promise<void>;
}

export const INotificationService = Symbol('INotificationService');
