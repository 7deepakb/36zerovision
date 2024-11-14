import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { PrivateRoutingModule } from './private-routing.module';
import { MatDividerModule } from "@angular/material/divider";
import { DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,

    //Angular Material Modules
    MatDividerModule,
    DragDropModule
  ]
})
export class PrivateModule { }
