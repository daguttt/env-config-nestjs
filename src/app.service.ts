import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { DatabaseConfigService } from './config/database/database-config.service';

@Injectable()
export class AppService {
  constructor(
    // private readonly configService: ConfigService,
    private readonly databaseConfigService: DatabaseConfigService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getDatabaseName(): string {
    // return this.configService.get('DATABASE_NAME'); // This also works
    return this.databaseConfigService.name;
  }
}
