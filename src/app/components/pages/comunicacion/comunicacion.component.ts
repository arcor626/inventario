import { Component, OnInit} from '@angular/core';
import { Comunicacion } from 'src/app/models/comunicacion';
import { ComunicacionService } from '../../../services/comunicacion/comunicacion.service';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-comunicacion',
    templateUrl: './comunicacion.component.html',
    styleUrls: ['./comunicacion.component.css'],
  })
  export class ComunicacionComponent implements OnInit{
    comunciaciones: Comunicacion[] = [];
    public page: number;

    // tslint:disable-next-line: variable-name
    constructor( private _comService: ComunicacionService){}

     // tslint:disable-next-line: typedef
  ngOnInit(){
    this.cargarComunicacion();

  }

  // tslint:disable-next-line: typedef
  cargarComunicacion(){
    this._comService.obtenerComunicacion().subscribe(

      resultado =>{
        this.comunciaciones = resultado;
      }
    );
  }

  // tslint:disable-next-line: typedef
  eliminarComunicacion(comunicacion: Comunicacion){
    Swal.fire({
      title: '¿Estas de que lo quieres eliminar?',
      text: 'Se eliminara la siguiente comunicacion ' + comunicacion.comp_especificaciones,
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then(borrar=>{
      if(borrar.isConfirmed){

        this._comService.eliminaComunicacion(comunicacion.id_componente).subscribe(   ()=>this.cargarComunicacion);
      }
      else if(borrar.isDenied){
        Swal.fire('Cancelado','','info');
      }
    });
  }
  }
