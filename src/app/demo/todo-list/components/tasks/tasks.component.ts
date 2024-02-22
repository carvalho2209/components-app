import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription, map } from "rxjs";
import { Store } from "../../todo.store";
import { TasksService } from "../../todo.service";

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit, OnDestroy {

  todolist$: Observable<any[]>;
  subscription: Subscription;

  constructor(private taskService: TasksService, private store: Store) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.todolist$ = this.store.getTodoList()
      .pipe(
        map(todolist => todolist.filter(task => !task.started && !task.finished))
      );

    this.subscription = this.taskService.getTodoList$.subscribe();
  }

  onToggle(event) {
    this.taskService.toggle(event);
  }
}
