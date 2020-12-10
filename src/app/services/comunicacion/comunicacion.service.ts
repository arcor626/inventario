import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {URL_SERVICIOS} from '../../config/config';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  obtenerComunicacion(){
    return this.http.get(URL_SERVICIOS + 'comunicacion/').pipe(
      map((resp: any) => {

        return resp.comunicacion;
      })
    );
  }

  // tslint:disable-next-line: typedef
  eliminaComunicacion(id: string){
    return this.http.delete(URL_SERVICIOS + 'comunicacion/' + id).pipe(
      map((resp: any) => {
        Swal.fire(
          "Comunicacion eliminado",
          "Comunicacion eliminado correctamente",
          "success"
        )
        return  true;
      })
    );
  }
}
