import { Component } from '@angular/core';

import { Fecha } from './modelos/app.fecha.model';
import { Tarea } from './modelos/app.tarea.model';
import { TareasService } from './servicios/tareas/tareas.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas:Tarea[];
  editar:boolean;
  formActivado:boolean;
  index:number;
  
  constructor(private misTareas:TareasService){
    this.tareas=this.misTareas.getTareas();
    this.formActivado=false;
    this.editar=false;
    this.index=0;
  }
  
  public cambiaBoton(){
    this.formActivado=true;
  }
  estadoFormulario(estado:boolean){
    if(estado){
      this.editar=false;
    }
    this.formActivado=estado;

  }
  mostrarAddTask(){

    this.formActivado=true
  }
  cerrarAddTask(){
   
    this.formActivado=false
  }
  eliminaTarea(index:number){
    this.misTareas.eliminaTarea(index)
  }
  editarTarea(index:number){
    this.index = index;
    this.editar=true;
    this.formActivado=true; 
    
  }


}

