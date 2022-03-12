import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  ExceptionMiddleware,
  LoggingMiddleware,
} from '~/presentation/middlewares';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: '*' });
  app.useGlobalFilters(new ExceptionMiddleware());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingMiddleware());

  await app.listen(3000);
}
bootstrap();
