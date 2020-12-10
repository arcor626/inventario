import { Component, OnInit} from '@angular/core';
import { Insumos } from 'src/app/models/insumos';
import { InsumosService } from '../../../services/insumos/insumos.service';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-insumos',
    templateUrl: './insumos.component.html',
    styleUrls: ['./insumos.component.css'],
  })
  export class InsumosComponent implements OnInit{
    insumo: Insumos[] = [];
    public page: number;

    // tslint:disable-next-line: variable-name
    constructor( private _insService: InsumosService){}

    // tslint:disable-next-line: typedef
    ngOnInit(){
      this.cargarInsumos();
  
    }

    // tslint:disable-next-line: typedef
    cargarInsumos(){
      this._insService.obtenerInsumos().subscribe(
  
        resultado =>{
          this.insumo = resultado;
        }
      );
    }

    // tslint:disable-next-line: typedef
    eliminarInsumos(insumos: Insumos){
      Swal.fire({
        title: '¿Estas de que lo quieres eliminar?',
        text: 'Se eliminara el siguiente insumo ' + insumos.ins_producto,
        icon: 'warning',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      }).then(borrar=>{
        if(borrar.isConfirmed){
  
          this._insService.eliminaInsumos(insumos.id_insumo).subscribe(   ()=>this.cargarInsumos());
        }
        else if(borrar.isDenied){
          Swal.fire('Cancelado','','info');
        }
      });
    }
  }
