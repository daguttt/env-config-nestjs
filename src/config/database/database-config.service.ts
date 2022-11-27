import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfigService {
  constructor(private configService: ConfigService) {}

  get name(): string {
    return this.configService.get('DATABASE_NAME');
  }
}
