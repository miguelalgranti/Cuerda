import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
url = "url de nuestra api";
currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) { 
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}' ))
  }
  IniciarSesion(credenciales:any):Observable<any>
  {
    return this.http.post(this.url, credenciales).pipe(map(data=> {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      
      return data;
    }))
  }
}
