import {Priority, Status, TodoItem} from "./private.interfaces";

export const priorityValues: Priority[] = ['HIGH', 'MEDIUM', 'LOW'];
export const statusValues: Status[] = ['PENDING', 'IN-PROGRESS', 'COMPLETED'];

export const todoExampleItems: TodoItem[] = [
  {
    title: 'HIGH Item',
    priority: 'HIGH',
    description: 'High Description',
    status: 'PENDING'
  },
  {
    title: 'Medium Item',
    priority: 'MEDIUM',
    description: 'Medium Description',
    status: 'IN-PROGRESS'
  },
  {
    title: 'Easy Item',
    priority: 'LOW',
    description: 'Easy Description',
    status: 'COMPLETED'
  },
  {
    title: 'Example Item',
    priority: 'MEDIUM',
    description: 'Example Description',
    status: 'COMPLETED'
  }
]