import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-input',
  standalone: false,
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css'
})
export class TaskInputComponent {

  nuevaTarea: string = '';
  mostrarError: boolean = false;

  @Output() tareaAgregada = new EventEmitter<string>();

  agregar(){
    if (this.nuevaTarea.trim()) {
      this.tareaAgregada.emit(this.nuevaTarea.trim());
      this.nuevaTarea = '';
      this.mostrarError = false;
    } else {
      this.mostrarError = true;
    }
  }

}
