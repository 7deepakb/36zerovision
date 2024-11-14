import {Priority, Status, TodoItem} from "./private.interfaces";

export const priorityValues: Priority[] = ['HIGH', 'MEDIUM', 'LOW'];
export const statusValues: Status[] = ['PENDING', 'IN-PROGRESS', 'COMPLETED'];

export const todoExampleItems: TodoItem[] = [
  {
    title: 'HIGH Item',
    priority: 'HIGH',
    description: 'High Description',
    text: 'High Text',
    status: 'PENDING'
  },
  {
    title: 'Medium Item',
    priority: 'MEDIUM',
    description: 'Medium Description',
    text: 'Medium Text',
    status: 'IN-PROGRESS'
  },
  {
    title: 'Easy Item',
    priority: 'LOW',
    description: 'Easy Description',
    text: 'Easy Text',
    status: 'COMPLETED'
  },
  {
    title: 'Example Item',
    priority: 'MEDIUM',
    description: 'Example Description',
    text: 'Example Text',
    status: 'COMPLETED'
  }
]