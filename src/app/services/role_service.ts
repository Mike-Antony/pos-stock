import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private baseURL = 'http://192.168.0.141:8090/api/v1';


  constructor(private http: HttpClient) { }

 

  getRoles():Observable<any>{
    return this.http.get(`${this.baseURL}/roles`);
  }

  getRolesById(id:any):Observable<any>{
    return this.http.get(`${this.baseURL}/roles/${id}`);
  }

  getRolesByName():Observable<any>{
    return this.http.get(`${this.baseURL}/roles/roles-by-name`);
  }

  

}
