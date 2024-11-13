import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TodoListComponent} from "./components/todo-list/todo-list.component";


export const routes: Routes = [
  {
    path: 'todo-list',
    component: TodoListComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule{}