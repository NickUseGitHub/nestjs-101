import { Controller, Get } from '@nestjs/common';

@Controller('tickets')
export class TicketsController {
  @Get()
  findAll() {
    return 'this is tickets naja';
  }
}
