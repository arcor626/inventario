import { Component, OnInit} from '@angular/core';
import { Hardware } from 'src/app/models/hardware';
import { HardwareService } from '../../../services/hardware/hardware.service';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-hardware',
    templateUrl: './hardware.component.html',
    styleUrls: ['./hardware.component.css'],
  })
  export class HardwareComponent implements OnInit{
    hardwares: Hardware[] = [];
    public page: number;

    // tslint:disable-next-line: variable-name
    constructor( private _hwdService: HardwareService){}

    // tslint:disable-next-line: typedef
    ngOnInit(){
      this.cargarHardware();

    }

    // tslint:disable-next-line: typedef
    cargarHardware(){
      this._hwdService.obtenerHardware().subscribe(
        resultado => {
          this.hardwares = resultado;
        }
      );
    }
    // tslint:disable-next-line: typedef
    eliminarHardware(hardware: Hardware){
      Swal.fire({
        title: '¿Estas de que lo quieres eliminar?',
        text: 'Se eliminara el siguiente hardware ' + hardware.hwd_especificaciones,
        icon: 'warning',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      }).then(borrar=>{
        if(borrar.isConfirmed){
  
          this._hwdService.eliminaHardware(hardware.id_hardware).subscribe(   ()=>this.cargarHardware());
        }
        else if(borrar.isDenied){
          Swal.fire('Cancelado','','info');
        }
      });
    }
  }
