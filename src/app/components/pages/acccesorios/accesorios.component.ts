import { Component, OnInit } from '@angular/core';
import { Accesorio } from 'src/app/models/accesorios';
import Swal from 'sweetalert2';
import { AccesorioService } from '../../../services/accesorios/accesorio.service';

@Component({
    selector: 'app-accesorios',
    templateUrl: './accesorios.component.html',
    styleUrls: ['./accesorios.component.css'],
  })
  export class AccesoriosComponent implements OnInit{
    accesorios: Accesorio[] = [];
    // accesorioActualizar: Accesorio;
    public page: number;


    // tslint:disable-next-line: variable-name
    constructor( private _acceService: AccesorioService){}

  ngOnInit(){
    this.cargarAccesorios();

  }

  cargarAccesorios(){
    this._acceService.obtenerAccesorios().subscribe(

      resultado =>{
        this.accesorios = resultado;
      }
    );
  }

  eliminarAccesorio(accesorio: Accesorio){
    Swal.fire({
      title: '¿Estas de que lo quieres eliminar?',
      text: 'Se eliminara el siguiente accesorio' + accesorio.acc_especificaciones,
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then(borrar=>{
      if(borrar.isConfirmed){

        this._acceService.eliminaAccesorio(accesorio.id_accesorio).subscribe(   () => this.cargarAccesorios());
      }
      else if(borrar.isDenied){
        Swal.fire('Cancelado', '', 'info');
      }
    });
  }

  // tslint:disable-next-line: typedef
  actualizarAccesorio(accesorio: Accesorio){


    this._acceService.actualizaAccesorio(accesorio).subscribe(  () => this.cargarAccesorios());
    }

  }


