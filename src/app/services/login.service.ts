import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL = 'http://192.168.0.141:8090/api/v1';


  constructor(private http: HttpClient) { }

  newLogin(roleId:any, user:Object): Observable<Object>{
    return this.http.post(`${this.baseURL}/users/register/${roleId}`, user);
  }
}
