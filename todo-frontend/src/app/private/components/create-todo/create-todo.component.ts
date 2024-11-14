import { Component } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import {Priority, CreateTodoFormGroup, Status, TodoItem} from "../../private.interfaces";
import {priorityValues, statusValues} from "../../private.constants";
import {TodoService} from "../../services/todo.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {

  priorityValues: Priority[] = priorityValues;
  statusValues: Status[] = statusValues;

  form: FormGroup<CreateTodoFormGroup> = new FormGroup<CreateTodoFormGroup>({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    priority: new FormControl('MEDIUM', [Validators.required]),
    status: new FormControl('PENDING', [Validators.required])
  });

  constructor(private todoService: TodoService, private dialogRef: MatDialogRef<CreateTodoComponent>) {
  }

  onCreateTodo() {
    if (this.form.valid) {
      const todo: TodoItem = {
        title: this.title.value,
        description: this.description.value,
        priority: this.priority.value,
        status: this.status.value
      }

      this.todoService.saveTodo(todo);
      this.dialogRef.close();
    }
  }

  get title(): FormControl {
    return this.form.get('title') as FormControl;
  }

  get description(): FormControl {
    return this.form.get('description') as FormControl;
  }

  get priority(): FormControl {
    return this.form.get('priority') as FormControl;
  }

  get status(): FormControl {
    return this.form.get('status') as FormControl;
  }

}