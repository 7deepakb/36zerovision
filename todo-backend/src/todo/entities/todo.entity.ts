import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Priority, Status } from '../todo.interface';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: Status;

  @Column()
  priority: Priority;

  @Column()
  createdAt?: Date;

  @Column()
  updatetAt?: Date;

}