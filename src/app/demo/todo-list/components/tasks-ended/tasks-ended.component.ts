import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { TasksService } from "../../todo.service";

@Component({
  selector: 'tasks-ended',
  templateUrl: './tasks-ended.component.html'
})

export class TasksEndedComponent implements OnInit {

  finished$: Observable<any[]>;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.finished$ = this.tasksService.getTodoList$;
  }
}
