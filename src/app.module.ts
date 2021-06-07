import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsController } from './tickets/tickets.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, TicketsController],
  providers: [AppService],
})
export class AppModule {}
