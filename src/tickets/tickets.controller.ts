import {
  BadRequestException,
  Body,
  Controller,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Ticket } from './entities/ticket';
import { TicketsService } from './tickets.service';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  async create(@Body() ticket: Omit<Ticket, 'id'>) {
    return this.ticketsService.create(ticket);
  }

  @Put(':id')
  async update(
    @Body() ticket: Partial<Ticket>,
    @Param() { id }: { id: string },
  ) {
    try {
      const updatedTicket = await this.ticketsService.update({
        id: Number(id),
        ...ticket,
      });

      return updatedTicket;
    } catch (err) {
      throw new BadRequestException(
        {
          message: err.message,
        },
        err,
      );
    }
  }
}
