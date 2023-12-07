// src/freight/freight.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { FreightService } from './freight.service';
import { Freight } from './freight.entity';

@Controller('freight')
export class FreightController {
  constructor(private readonly freightService: FreightService) {}

  @Get()
  async findAll(): Promise<Freight[]> {
    return this.freightService.findAll();
  }

  @Post()
  async create(@Body() freightData: Partial<Freight>): Promise<Freight> {
    return this.freightService.create(freightData);
  }
}
