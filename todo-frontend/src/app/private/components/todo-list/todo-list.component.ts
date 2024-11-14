import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {TodoItem} from "../../private.interfaces";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit{

  pendingItems: TodoItem[] = [];
  inProgressItems: TodoItem[] = [];
  completedItems: TodoItem[] = [];

  items$: Observable<TodoItem[]> = this.todoService.todoItems$;

  constructor(private todoService: TodoService, private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.todoService.getTodos();
    this.todoService.getAddedTodo();
    this.todoService.getUpdatedTodo();

    this.items$.pipe(
      tap((items) => {
        this.pendingItems = items.filter(item => item.status === 'PENDING');
        this.inProgressItems = items.filter(item => item.status === 'IN-PROGRESS');
        this.completedItems = items.filter(item => item.status === 'COMPLETED');
      })
    ).subscribe();
  }

  drop(event: CdkDragDrop<TodoItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    const updatedItem: TodoItem = event.container.data[event.currentIndex];
    this.todoService.updateTodo(updatedItem, event.container.id);
  }

}