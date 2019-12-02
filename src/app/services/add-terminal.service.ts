import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {
  private baseURL = 'http://192.168.0.141:8090/api/v1';


  constructor(private http: HttpClient) { }

  createTerminal(terminaltypeid:any,  terminal:Object): Observable<Object>{
    console.log("Hello Universe"+ terminaltypeid + terminal);
    return this.http.post(`${this.baseURL}/terminals/add/{terminal-type-id}
    `, terminal)
    .catch(this.errorHandler);
  }

  errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message || "Server Error")
  }

  getTerminals():Observable<any>{
    return this.http.get(`${this.baseURL}/terminals
`    );
  }

  getTerminalsById(id:any):Observable<any>{
    return this.http.get(`${this.baseURL}/terminals/${id}`);
  }

  getTerminalsByPhysicalTerminalId():Observable<any>{
    return this.http.get(`${this.baseURL}/terminals/by-physical-terminal-id`);
  }

  getTerminalsByTerminalType(terminaltypeid:any):Observable<any>{
    return this.http.get(`${this.baseURL} /terminals/by-terminal-type/${terminaltypeid}`);
  }

  deleteTerminalsById(id:any):Observable<any>{
    return this.http.delete(`${this.baseURL}/terminals/delete/${id}
    `);
  }

  getTerminalsBydeployment():Observable<any>{
    return this.http.get(`${this.baseURL}/terminals/deployed`);
  }

  updateTerminals(terminalTypeId:any, value:any):Observable<any>{
    return this.http.put(`${this.baseURL}/terminals/edit/${terminalTypeId}`,value);
  }
  
  getRentedOutTerminals(deployed:any,rentedout:any):Observable<any>{
    return this.http.get(`${this.baseURL}/terminals/deployed/${deployed}/rented-out/${rentedout}`)
  }

//Terminal Types

 getTerminalTypes():Observable<any>{
   return this.http.get(`${this.baseURL}/terminal-types`);
 }

 getTerminalTypeById(id:any):Observable<any>{
   return this.http.get(`${this.baseURL}/terminal-types/${id}
   `);
 }

 addterminalType(terminalType:Object):Observable<any>{
   return this.http.post(`${this.baseURL}/terminal-types/add-terminal`,terminalType);
 }

 getTerminalTypeByMake():Observable<any>{
   return this.http.get(`${this.baseURL}/terminal-types/by-make`);
 }

 getTerminalTypeByMakeAndModel():Observable<any>{
  return this.http.get(`${this.baseURL}/terminal-types/by-make-and-model`);
  }

  getTerminalTypeByModel():Observable<any>{
    return this.http.get(`${this.baseURL}/terminal-types/by-model`);
  }

  deleteTerminalTypeById(id:any):Observable<any>{
    return this.http.delete(`${this.baseURL}/terminal-types/delete/${id}`);
  }

  updateExistingTerminalType(value:any):Observable<any>{
    return this.http.put(`${this.baseURL}/terminal-types/edit`,value);
  }

} 



