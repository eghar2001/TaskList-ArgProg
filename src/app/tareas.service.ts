import { Injectable } from '@angular/core';
import { Fecha } from './app.fecha.model';

import { Tarea } from './app.tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private tareas:Tarea[];
  constructor() {    
    this.tareas= [
      new Tarea("Nacer", new Fecha(9,12,2001)),
      new Tarea("Terminar Task List",new Fecha(6,2,2022)),
      new Tarea("Romper un McDonald",new Fecha(12,12,2012)),
      new Tarea("Dia historico para el futbol Argentino",new Fecha(24,12,1889)),
    ]
   }
   public buscarTarea(ind:number){
     return this.tareas[ind];
    }
    public agregarTarea(tarea:Tarea){
      this.tareas.push(tarea);
    }
    public getTareas(){
      return this.tareas;
    
    }
    public eliminaTarea(ind:number){
      this.tareas.splice(ind,1);
    }
    public editarTarea(ind:number,tarea:Tarea){
      this.tareas[ind]=tarea;
    }

}
