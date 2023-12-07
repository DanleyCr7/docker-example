// src/freight/freight.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  Timestamp,
} from 'typeorm';

@Entity('freight') // Especifica o nome da tabela "freight"
export class Freight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true })
  client_id: number;

  @Column({ type: 'int', nullable: true, name: 'category_id' })
  category_id: number;

  @Column({ type: 'int', nullable: true, name: 'driver_id' })
  driver_id: number;

  @Column({ type: 'int', default: 0 })
  accept: number;

  @Column({ type: 'int', default: 0 })
  finally: number;

  @Column({ name: 'address_id_initial', nullable: true })
  address_id_initial: number;

  @Column({ name: 'address_id_finaly', nullable: true })
  address_id_finaly: number;

  // Relação ManyToOne com Address

  @Column({ type: 'text', nullable: true })
  items: string;

  @Column({ type: 'timestamp', nullable: true, name: 'created_at' })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true, name: 'updated_at' })
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true, name: 'deleted_at' })
  deleted_at: Date;
}
