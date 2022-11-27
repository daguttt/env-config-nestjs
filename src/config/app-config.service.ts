import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get port(): number {
    return this.configService.get('APP_PORT');
  }

  get databaseName(): string {
    return this.configService.get('DATABASE_NAME');
  }
}