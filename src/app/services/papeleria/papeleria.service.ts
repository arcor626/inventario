import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {URL_SERVICIOS} from '../../config/config';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PapeleriaService {

  constructor(private http: HttpClient) { }

  obtenerPapeleria(){
    return this.http.get(URL_SERVICIOS + 'papeleria/').pipe(
      map((resp: any) => {

        return resp.papeleria;
      })
    );
  }

  eliminaPapeleria(id: string){
    return this.http.delete(URL_SERVICIOS + 'papeleria/' + id).pipe(
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
