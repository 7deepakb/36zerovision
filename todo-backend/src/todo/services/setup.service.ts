import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoItem } from '../todo.interface';

@Injectable()
export class SetupService implements OnApplicationBootstrap {
  constructor(private todoService: TodoService) {}

  onApplicationBootstrap(): any {
    const items: TodoItem[] = [
      {
        title: 'High Item',
        priority: 'HIGH',
        description: 'High Description',
        status: 'PENDING',
      },
      {
        title: 'Medium Item',
        priority: 'MEDIUM',
        description: 'Medium Description',
        status: 'IN-PROGRESS',
      },
      {
        title: 'Low Item',
        priority: 'LOW',
        description: 'Low Description',
        status: 'COMPLETED',
      },
      {
        title: 'Example Item',
        priority: 'MEDIUM',
        description: 'Example Description',
        status: 'COMPLETED',
      },
    ];
    this.todoService.saveAll(items);
  }
}