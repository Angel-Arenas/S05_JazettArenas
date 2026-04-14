import { Component, OnInit } from '@angular/core';
import { TaskService, Tarea } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  tareas: Tarea[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.tareas$.subscribe(tareas => {
      this.tareas = tareas;
    });
  }

  agregarTarea(tarea: string) {
    this.taskService.agregarTarea(tarea);
  }

  eliminarTarea(id: number) {
    this.taskService.eliminarTarea(id);
  }

  marcarCompletada(id: number) {
    this.taskService.marcarCompletada(id);
  }

  get totalTareas(): number {
    return this.taskService.getTotalTareas();
  }

}
