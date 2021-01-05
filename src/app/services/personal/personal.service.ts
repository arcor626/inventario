import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {URL_SERVICIOS} from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http: HttpClient) { }

  obtenerPersonal(){
    return this.http.get(URL_SERVICIOS + 'personal/').pipe(
      map((resp: any) => {        
        return resp.personal;
      })
    );
    }
}
