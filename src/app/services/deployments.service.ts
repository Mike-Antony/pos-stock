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
    console.log("Hello Universe "+ userid + deployment);
    return this.http.post(`${this.baseURL}/deployments/create-deployment/${userid}/${terminalid}
    `, deployment);
  }

  getDeployments(): Observable<any>{
    
    return this.http.get(`${this.baseURL}/deployment`);
    }

  deleteDeployment(id:any): Observable<any> {
      return this.http.delete(`${this.baseURL}/deployment/${id}`);
    }

  getDeploymentsById(id:any): Observable<any>{
    return this.http.get(`${this.baseURL}
    /deployments/${id}`);
  }

  getDeploymentsCreatedByUser(userid:any):Observable<any>{
    return this.http.get(`${this.baseURL}
    /deployments/created-by-user/${userid}`);
  }

  getDeploymentsByDeplymentNote():Observable<any>{
    return this.http.get(`${this.baseURL}/deployments/deployment-by-deployment-note-number
    `);
  }

  getDeploymentsByMerchantCode():Observable<any>{
    return this.http.get(`${this.baseURL}/deployments/deployment-by-merchant-code`);
  }

  

} 



