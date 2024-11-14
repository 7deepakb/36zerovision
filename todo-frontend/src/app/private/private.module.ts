import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { PrivateRoutingModule } from "./private-routing.module";
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    CreateTodoComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,

    // Angular Material Modules
    DragDropModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class PrivateModule { }