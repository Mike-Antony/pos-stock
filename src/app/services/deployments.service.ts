import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeploymentsService {
  private baseURL = 'http://192.168.0.141:8090/api/v1';


  constructor(private http: HttpClient) { }

  createDeployment(userid:any, terminalid:any, deployment:Object): Observable<Object>{
    console.log("Hello Antony "+ userid + deployment);
    return this.http.post(`${this.baseURL}/deployments/create-deployment/${userid}/${terminalid}
    `, deployment);
  }
} 