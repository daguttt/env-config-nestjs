import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfigService } from './config/app-config.service';

@Injectable()
export class AppService {
  constructor(
    private readonly appConfigService: AppConfigService,
    private readonly configService: ConfigService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getDatabaseName(): string {
    return this.appConfigService.databaseName;
    // return this.configService.get('DATABASE_NAME'); // This also works
  }
}
