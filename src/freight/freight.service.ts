// src/freight/freight.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Freight } from './freight.entity';

@Injectable()
export class FreightService {
  constructor(
    @InjectRepository(Freight)
    private readonly freightRepository: Repository<Freight>,
  ) {}

  async findAll(): Promise<Freight[]> {
    return this.freightRepository.find();
  }

  async create(addressData: Partial<Freight>): Promise<Freight> {
    const address = this.freightRepository.create(addressData);
    return this.freightRepository.save(address);
  }
}
