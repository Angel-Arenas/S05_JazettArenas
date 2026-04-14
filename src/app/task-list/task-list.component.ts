import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  @Input() tareas: Tarea[] = [];

  @Output() tareaEliminada = new EventEmitter<number>();
  @Output() tareaCompletada = new EventEmitter<number>();

  eliminarTarea(id: number) {
    this.tareaEliminada.emit(id);
  }

  marcarCompletada(id: number) {
    this.tareaCompletada.emit(id);
  }

}
