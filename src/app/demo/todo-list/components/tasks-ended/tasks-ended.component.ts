import { Component, OnInit } from "@angular/core";
import { Observable, map } from "rxjs";
import { Store } from "../../todo.store";
import { TasksService } from "../../todo.service";

@Component({
  selector: 'tasks-ended',
  templateUrl: './tasks-ended.component.html'
})

export class TasksEndedComponent implements OnInit {

  finished$: Observable<any[]>;

  constructor(private taskService: TasksService, private store: Store) { }

  ngOnInit(): void {
    this.finished$ = this.store.getTodoList()
    .pipe(map(todolist => todolist.filter(task => task.finished)))
  }

  onToggle(event) {
    this.taskService.toggle(event);
  }
}
