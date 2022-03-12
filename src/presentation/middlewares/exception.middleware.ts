import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { Response } from 'express';
import { ApiException } from '~/domain/errors/api-exception.error';

@Catch(ApiException)
export class ExceptionMiddleware implements ExceptionFilter {
  private readonly logger = new Logger(ExceptionMiddleware.name);

  catch(exception: ApiException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    this.logger.error(
      `Exceção capturada: ${exception.message} - status: ${exception.statusCode}`,
    );

    return response.status(exception.statusCode).json({
      message:
        exception.message ??
        'Ocorreu um erro desconhecido ao processar a sua solicitação',
    });
  }
}
