import {UserI} from "../public/public.interfaces";
import {FormControl} from "@angular/forms";

export type Status = 'PENDING' | 'IN-PROGRESS' | 'COMPLETED';
export type Priority = 'HIGH' | 'MEDIUM' | 'LOW';

export interface TodoItem {
  id?: number;
  createdBy?: UserI;
  updatedBy?: UserI;
  createdAt?: Date;
  updatetAt?: Date;

  status: Status;
  title: string;
  description: string;
  text: string;
  priority: Priority;
}

export interface CreateTodoFormGroup {
  complexity: FormControl<Priority | null>;
  text: FormControl<string | null>;
  description: FormControl<string | null>;
  title: FormControl<string | null>;
  status: FormControl<Status | null>;
}