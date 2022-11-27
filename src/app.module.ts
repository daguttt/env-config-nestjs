import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/app-config.module';
import { DatabaseConfigModule } from './config/database/database-config.module';

@Module({
  imports: [AppConfigModule, DatabaseConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
