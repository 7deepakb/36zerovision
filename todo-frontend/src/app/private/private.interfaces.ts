import {FormControl} from "@angular/forms";

export type Status = 'PENDING' | 'IN-PROGRESS' | 'COMPLETED';
export type Priority = 'HIGH' | 'MEDIUM' | 'LOW';

export interface TodoItem {
  id?: number;
  status: Status;
  title: string;
  description: string;
  priority: Priority;
  createdAt?: Date;
  updatetAt?: Date;
}

export interface CreateTodoFormGroup {
  priority: FormControl<Priority | null>;
  description: FormControl<string | null>;
  title: FormControl<string | null>;
  status: FormControl<Status | null>;
}