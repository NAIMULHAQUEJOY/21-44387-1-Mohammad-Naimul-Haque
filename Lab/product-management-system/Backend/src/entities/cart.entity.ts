import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { User } from './user.entity';
import { Product } from './product.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  user?: string;

  @Column()
  product?: string;

  @Column()
  quantity?: number;
}
