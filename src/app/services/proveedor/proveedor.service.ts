import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {URL_SERVICIOS} from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http: HttpClient) { }

  obtenerProveedor(){
    return this.http.get(URL_SERVICIOS + 'proveedor/').pipe(
      map((resp: any) => {        
        return resp.proveedor;
      })
    );
  }
}
