import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {URL_SERVICIOS} from '../../config/config';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class InsumosService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  obtenerInsumos(){
    return this.http.get(URL_SERVICIOS + 'insumos/').pipe(
      map((resp: any) => {

        return resp.insumos;
      })
    );
  }

  eliminaInsumos(id: string){
    return this.http.delete(URL_SERVICIOS + 'insumos/' + id).pipe(
      map((resp: any) => {
        Swal.fire(
          "Insumo eliminado",
          "Insumo eliminado correctamente",
          "success"
        )
        return  true;
      })
    );
  }
}
