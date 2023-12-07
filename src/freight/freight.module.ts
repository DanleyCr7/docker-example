import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FreightService } from './freight.service';
import { FreightController } from './freight.controller';
import { Freight } from './freight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Freight])],
  controllers: [FreightController],
  providers: [FreightService],
})
export class FreightModule {}
