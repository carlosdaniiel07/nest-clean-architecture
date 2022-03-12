import { ApiException } from './api-exception.error';

export class EntityNotFoundException extends ApiException {
  constructor(message: string) {
    super(message, 404);
  }
}
