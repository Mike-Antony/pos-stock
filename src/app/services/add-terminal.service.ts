import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {
  private baseURL = 'http://192.168.0.141:8090/api/v1';


  constructor(private http: HttpClient) { }

  createTerminal(terminaltypeid:any,  terminal:Object): Observable<Object>{
    console.log("Hello Universe"+ terminaltypeid + terminal);
    return this.http.post(`${this.baseURL}/terminals/add/{terminal-type-id}
    `, terminal);
  }
} 



