import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {URL_SERVICIOS} from '../../config/config';


@Injectable({
  providedIn: 'root'
})
export class AccesorioService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  obtenerAccesorios(){
    return this.http.get(URL_SERVICIOS + 'accesorios/').pipe(
      map((resp: any) => {

        return resp.accesorios;
      })
    );
  }
}
