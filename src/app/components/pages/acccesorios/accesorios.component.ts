import { Component, OnInit } from '@angular/core';
import { Accesorio } from 'src/app/models/accesorios';
import { AccesorioService } from '../../../services/accesorios/accesorio.service';

@Component({
    selector: 'app-accesorios',
    templateUrl: './accesorios.component.html',
    styleUrls: ['./accesorios.component.css'],
  })
  export class AccesoriosComponent implements OnInit{
    accesorios : Accesorio[] = [];

    // tslint:disable-next-line: variable-name
    constructor( private _acceService: AccesorioService){}

  // tslint:disable-next-line: typedef
  ngOnInit(){
    this.cargarAccesorios();

  }

  // tslint:disable-next-line: typedef
  cargarAccesorios(){
    this._acceService.obtenerAccesorios().subscribe(

      resultado =>{
        this.accesorios = resultado;
      }
    );
  }
  }
