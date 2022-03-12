import { ApiException } from './api-exception.error';

export class BusinessRuleException extends ApiException {
  constructor(message: string) {
    super(message, 400);
  }
}
