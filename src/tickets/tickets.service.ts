import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './entities/ticket';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketsRepository: Repository<Ticket>,
  ) {}

  create(ticketDto: Omit<Ticket, 'id'>): Promise<Ticket> {
    const now = new Date();
    const ticket = new Ticket();
    ticket.title = ticketDto.title;
    ticket.description = ticketDto.description;
    ticket.contact = ticketDto.contact;
    ticket.information = ticketDto.information;
    ticket.createdAt = now;
    ticket.updatedAt = now;

    return this.ticketsRepository.save(ticket);
  }
}
