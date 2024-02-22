import { Component, OnInit } from "@angular/core";
import { Observable, map } from "rxjs";
import { Store } from "../../todo.store";
import { TasksService } from "../../todo.service";

@Component({
  selector: 'tasks-started',
  templateUrl: './tasks-started.component.html'
})

export class TasksStarted implements OnInit {

  started$: Observable<any[]>;

  constructor(private taskeService: TasksService, private store: Store) { }

  ngOnInit(): void {
    this.started$ = this.store.getTodoList()
      .pipe(
        map(todolist => todolist.filter(task => task.started && !task.finished))
      );
  }

  onToggle(event) {
    this.taskeService.toggle(event);
  }
}
