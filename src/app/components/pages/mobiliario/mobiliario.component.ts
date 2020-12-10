import { Component, OnInit} from '@angular/core';
import { Mobiliario } from 'src/app/models/mobiliario';
import { MobiliarioService } from '../../../services/mobiliario/mobiliario.service';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-mobiliario',
    templateUrl: './mobiliario.component.html',
    styleUrls: ['./mobiliario.component.css'],
  })
  export class MobiliarioComponent implements OnInit{
    mobiliarios: Mobiliario[] = [];
    public page: number;

    // tslint:disable-next-line: variable-name
    constructor( private _mobService: MobiliarioService){}

    // tslint:disable-next-line: typedef
    ngOnInit(){
      this.cargarMobiliario();

    }

    // tslint:disable-next-line: typedef
    cargarMobiliario(){
      this._mobService.obtenerMobiliario().subscribe(
        resultado => {
          this.mobiliarios = resultado;
        }
      );
    }

    // tslint:disable-next-line: typedef
    eliminarMobiliario(mobiliario: Mobiliario){
      Swal.fire({
        title: '¿Estas de que lo quieres eliminar?',
        text: 'Se eliminara el siguiente mobiliario ' + mobiliario.mob_especificaciones,
        icon: 'warning',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      }).then(borrar=>{
        if(borrar.isConfirmed){
  
          this._mobService.eliminaMobiliario(mobiliario.id_mobiliario).subscribe(   ()=>this.cargarMobiliario());
        }
        else if(borrar.isDenied){
          Swal.fire('Cancelado','','info');
        }
      });
    }
  }

