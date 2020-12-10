import { Component, OnInit} from '@angular/core';
import { Papeleria } from 'src/app/models/papeleria';
import { PapeleriaService } from '../../../services/papeleria/papeleria.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-papeleria',
    templateUrl: './papeleria.component.html',
    styleUrls: ['./papeleria.component.css'],
  })
  export class PapeleriaComponent implements OnInit{
    papelerias: Papeleria[] = [];
    public page: number;

    // tslint:disable-next-line: variable-name
    constructor( private _papeService: PapeleriaService){}

    // tslint:disable-next-line: typedef
    ngOnInit(){
      this.cargarPapeleria();
  
    }

    // tslint:disable-next-line: typedef
    cargarPapeleria(){
      this._papeService.obtenerPapeleria().subscribe(
  
        resultado =>{
          this.papelerias = resultado;
        }
      );
    }

    // tslint:disable-next-line: typedef
    eliminarPapeleria(papeleria: Papeleria){
      Swal.fire({
        title: '¿Estas de que lo quieres eliminar?',
        text: 'Se eliminara la siguiente papeleria' + papeleria.pape_producto,
        icon: 'warning',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      }).then(borrar=>{
        if(borrar.isConfirmed){
  
          this._papeService.eliminaPapeleria(papeleria.id_papeleria).subscribe(   ()=>this.cargarPapeleria());
        }
        else if(borrar.isDenied){
          Swal.fire('Cancelado','','info');
        }
      });
    }
  }
