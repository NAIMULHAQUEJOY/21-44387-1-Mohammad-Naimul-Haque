import {
    BeforeInsert,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  import * as bcrypt from 'bcrypt';
  
  @Entity('product')
  export class Product {
    @PrimaryGeneratedColumn()
    pId: number;
  
    @Column({ unique: true, nullable: false })
    pName: string;
  
  }
  