import { UserI } from '../user/user.interface';

export type Status = 'PENDING' | 'IN-PROGRESS' | 'COMPLETED';
export type Priority = 'HIGH' | 'MEDIUM' | 'LOW';

export interface TodoItem {
  id?: number;

  title: string;
  description: string;
  status: Status;
  priority: Priority;
  createdAt?: Date;
  updatetAt?: Date;
}

export interface ConnectionI {
  id?: number;
  socketId?: string;
  connectedUser?: UserI;
}