import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Tarea {
  id: number;
  nombre: string;
  completada: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tareas: Tarea[] = [
    { id: 1, nombre: 'Estudiar Angular', completada: false },
    { id: 2, nombre: 'Hacer tarea', completada: false },
    { id: 3, nombre: 'Comprar comida', completada: false },
    { id: 4, nombre: 'Lavar ropa', completada: false }
  ];

  private tareasSubject = new BehaviorSubject<Tarea[]>([...this.tareas]);
  tareas$ = this.tareasSubject.asObservable();

  private nextId: number = 5;

  getTareas() {
    return [...this.tareas];
  }

  agregarTarea(tarea: string) {
    const nuevaTarea: Tarea = {
      id: this.nextId++,
      nombre: tarea,
      completada: false
    };
    this.tareas.push(nuevaTarea);
    this.tareasSubject.next([...this.tareas]);
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(t => t.id !== id);
    this.tareasSubject.next([...this.tareas]);
  }

  marcarCompletada(id: number) {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
      this.tareasSubject.next([...this.tareas]);
    }
  }

  getTotalTareas(): number {
    return this.tareas.length;
  }

}
