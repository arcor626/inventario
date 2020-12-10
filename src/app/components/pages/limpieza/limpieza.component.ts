import { Component, OnInit} from '@angular/core';
import { Limpieza } from 'src/app/models/limpieza';
import { LimpiezaService } from '../../../services/limpieza/limpieza.service';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-limpiesa',
    templateUrl: './limpieza.component.html',
    styleUrls: ['./limpieza.component.css'],
  })
  export class LimpiezaComponent implements OnInit{
    limpiezas: Limpieza[] = [];
    public page: number;


    // tslint:disable-next-line: variable-name
    constructor( private _limpService: LimpiezaService){}

    // tslint:disable-next-line: typedef
    ngOnInit(){
      this.cargarLimpieza();
  
    }

    // tslint:disable-next-line: typedef
    cargarLimpieza(){
      this._limpService.obtenerLimpieza().subscribe(
  
        resultado =>{
          this.limpiezas = resultado;
        }
      );
    }

    // tslint:disable-next-line: typedef
    eliminarLimpieza(limpieza: Limpieza){
      Swal.fire({
        title: '¿Estas de que lo quieres eliminar?',
        text: 'Se eliminara la siguiente limpieza ' + limpieza.limp_producto,
        icon: 'warning',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      }).then(borrar=>{
        if(borrar.isConfirmed){
  
          this._limpService.eliminaLimpieza(limpieza.id_limpieza).subscribe(   ()=>this.cargarLimpieza());
        }
        else if(borrar.isDenied){
          Swal.fire('Cancelado','','info');
        }
      });
    }
  }
