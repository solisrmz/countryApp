import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  base_url: string = 'https://restcountries.eu/rest/v2';
  constructor(private http: HttpClient) { }

  porNombre(termino: string): Observable<Pais[]>{
    const url = `${this.base_url}/name/${termino}`
    return this.http.get<Pais[]>(url).pipe( 
      catchError ( err => of([]))
    );
  }

  porCapital(termino: string): Observable<Pais[]>{
    const url = `${this.base_url}/capital/${termino}`
    return this.http.get<Pais[]>(url).pipe( 
      catchError ( err => of([]))
    );
  }

  verPais( codigo: string){
    const url = `${this.base_url}/alpha/${codigo}`
    return this.http.get<Pais>(url);
  }
}
