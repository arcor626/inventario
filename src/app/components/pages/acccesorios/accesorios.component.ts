import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Accesorio } from 'src/app/models/accesorios';
import {Servicios} from 'src/app/models/servicios';
import Swal from 'sweetalert2';
import { AccesorioService } from '../../../services/accesorios/accesorio.service';
import { ServiciosService } from '../../../services/servicios/servicios.service';
import { ProveedorService } from '../../../services/proveedor/proveedor.service';
import { PersonalService } from '../../../services/personal/personal.service';
import { AreasService } from '../../../services/areas/areas.service';

import { Proveedor } from '../../../models/proveedor';
import { Personal } from '../../../models/personal';
import { Areas } from '../../../models/areas';





@Component({
    selector: 'app-accesorios',
    templateUrl: './accesorios.component.html',
    styleUrls: ['./accesorios.component.css'],
  })
  export class AccesoriosComponent implements OnInit{
    accesorios: Accesorio[] = [];
    servicios: Servicios[] = [];
    proveedor: Proveedor[] = [];
    personal: Personal[] = [];
    areas: Areas[] = [];
    // accesorioActualizar: Accesorio;
    public page: number;
     nuevoAccesorio = new Accesorio();
     nuevoServicio = new Servicios();
    // tslint:disable-next-line: variable-name
    constructor( private _acceService: AccesorioService,
      private _servService: ServiciosService,
      private _provService: ProveedorService,
      private _perService: PersonalService,
      private _areService: AreasService
      ){}

  ngOnInit(){
    this.cargarAccesorios();
    this.cargarServicios();
    this.cargarProveedor();
    this.cargarPersonal();
    this.cargarAreas();
  }


  crearAccesorio(form : NgForm){

    

    if(form.invalid){
      console.log("Formularo invalido");
      
    }
    
    console.log(this.nuevoAccesorio);
    
    // this._acceService.crearAccesorio(this.nuevoAccesorio).subscribe(
    //   resultado =>{
    //     console.log(resultado);
        // if(!resultado){
        //   Swal.fire(
        //     'Error al crear el accesorio',
        //     'You clicked the button!',
        //     'error'
        //   )
        // }else{
        //   Swal.fire(
        //     'Se creo accesorio correctamente',
        //     'You clicked the button!',
        //     'success'
        //   )
        // }
      // }

    // )
  }

  crearServicio(form : NgForm){
    if(form.invalid){
      console.log("Formularo invalido");
      
    }
    
    this._servService.crearServicio(this.nuevoServicio).subscribe(
      resultado =>{
        console.log(resultado);
      }

    )
  }


  cargarAccesorios(){
    this._acceService.obtenerAccesorios().subscribe(

      resultado =>{
        this.accesorios = resultado;
      }
    );
  }

  cargarServicios(){
    this._servService.obtenerServicios().subscribe(

      resultado =>{
        this.servicios = resultado;
      }
    );
  }

  cargarProveedor(){
    this._provService.obtenerProveedor().subscribe(

      resultado =>{
        this.proveedor = resultado;
      }
    );
  }

  cargarPersonal(){
    this._perService.obtenerPersonal().subscribe(

      resultado =>{
        this.personal = resultado;
      }
    );
  }

  cargarAreas(){
    this._areService.obtenerAreas().subscribe(

      resultado =>{
        this.areas = resultado;
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


