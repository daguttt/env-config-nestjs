import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
// import { AppConfigService } from './config/app/app-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main');

  // const appConfigService = app.get(AppConfigService);
  // const PORT = appConfigService.port || 3000;

  const configService = app.get(ConfigService);
  const PORT = configService.get('port') || 3000;
  console.log(PORT);
  await app.listen(PORT, '0.0.0.0', () => {
    logger.log(`App running on port: ${PORT}`);
  });
}
bootstrap();
