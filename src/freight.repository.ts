// src/freight/freight.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';
import { AsyncLocalStorage } from 'async_hooks';
import { Freight } from './freight/freight.entity';

@Injectable()
export class FreightRepository {
  constructor(
    @InjectRepository(Freight)
    private readonly freightRepository: Repository<Freight>,
  ) {}

  async findAll(): Promise<Freight[]> {
    return this.freightRepository.find();
  }
}
