import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {URL_SERVICIOS} from '../../config/config';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: typedef
  obtenerHardware(){
    return this.http.get(URL_SERVICIOS + 'hardware/').pipe(
      map((resp: any) => {

        return resp.hardware;
      })
    );
  }

  // tslint:disable-next-line: typedef
  eliminaHardware(id: string){
    return this.http.delete(URL_SERVICIOS + 'hardware/' + id).pipe(
      map((resp: any) => {
        Swal.fire(
          "Hardware eliminado",
          "Hardware eliminado correctamente",
          "success"
        )
        return  true;
      })
    );
  }
}
