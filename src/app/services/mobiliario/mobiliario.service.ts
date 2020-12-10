import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {URL_SERVICIOS} from '../../config/config';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MobiliarioService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: typedef
  obtenerMobiliario(){
    return this.http.get(URL_SERVICIOS + 'mobiliario/').pipe(
      map((resp: any) => {

        return resp.mobiliario;
      })
    );
  }

  eliminaMobiliario(id: string){
    return this.http.delete(URL_SERVICIOS + 'mobiliario/' + id).pipe(
      map((resp: any) => {
        Swal.fire(
          "Accesorio eliminado",
          "Accesorio eliminado correctamente",
          "success"
        )
        return  true;
      })
    );
  }
}
