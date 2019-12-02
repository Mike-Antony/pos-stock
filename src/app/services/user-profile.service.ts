import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private baseURL = 'http://192.168.0.141:8090/api/v1';


  constructor(private http: HttpClient) { }

  createUserProfile(roleId:any, userProfile:Object): Observable<Object>{
    return this.http.post(`${this.baseURL}/users/register/${roleId}`, userProfile);
  }

  getUsers():Observable<any>{
    return this.http.get(`${this.baseURL}/users
    `);
  }

  getUsersById(id:any):Observable<any>{
    return this.http.get(`${this.baseURL}/users/${id}`);
  }

  deleteUsersByid(id:any):Observable<any>{
    return this.http.delete(`${this.baseURL}/users/delete/${id}`);
  }

  updateUsers(id:any ,value:any):Observable<any>{
    return this.http.put(`${this.baseURL}`, value);
  }

  

}
