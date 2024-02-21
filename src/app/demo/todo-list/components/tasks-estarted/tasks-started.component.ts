import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { TasksService } from "../../todo.service";

@Component({
  selector: 'tasks-started',
  templateUrl: './tasks-started.component.html'
})

export class TasksStarted implements OnInit {

  started$: Observable<any[]>;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.started$ = this.tasksService.getTodoList$;
  }
}
