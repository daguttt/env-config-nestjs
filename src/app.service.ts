import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import databaseConfig from './config/database/database.config';

@Injectable()
export class AppService {
  constructor(
    @Inject(databaseConfig.KEY)
    private readonly dbConfig: ConfigType<typeof databaseConfig>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getDatabaseName(): string {
    const databaseName = this.dbConfig.name;
    return databaseName;
  }
}
