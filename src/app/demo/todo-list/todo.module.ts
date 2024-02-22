import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TasksService } from "./todo.service";
import { TodoComponent } from "./todo.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { TasksEndedComponent } from "./components/tasks-ended/tasks-ended.component";
import { TasksStarted } from "./components/tasks-estarted/tasks-started.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { Store } from "./todo.store";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [TasksService, Store],
  declarations: [TodoComponent, TasksComponent, TasksEndedComponent, TasksStarted, TodoListComponent],
  exports:[TodoComponent, TasksComponent, TasksEndedComponent, TasksStarted, TodoListComponent]
})

export class TodoModule{}
