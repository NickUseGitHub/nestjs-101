import { Body, Controller, Post } from '@nestjs/common';
import { Ticket } from './entities/ticket';
import { TicketsService } from './tickets.service';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  async create(@Body() body) {
    return this.ticketsService.create(body as Ticket);
  }
}
