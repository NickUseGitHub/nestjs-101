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

  async getAll(): Promise<Ticket[]> {
    return this.ticketsRepository.find();
  }

  async create(ticketDto: Omit<Ticket, 'id'>): Promise<Ticket> {
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

  async update(ticketDto: Partial<Ticket>): Promise<Ticket> {
    const [ticket] = await this.ticketsRepository.find({
      where: {
        id: ticketDto.id,
      },
    });
    if (!ticket) {
      throw new Error('Ticket is not exists.');
    }

    const now = new Date();
    ticketDto.title && (ticket.title = ticketDto.title);
    ticketDto.description && (ticket.description = ticketDto.description);
    ticketDto.contact && (ticket.contact = ticketDto.contact);
    ticketDto.information && (ticket.information = ticketDto.information);
    ticket.updatedAt = now;

    return this.ticketsRepository.save(ticket);
  }
}
