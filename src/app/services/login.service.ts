import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = 'http://192.168.0.141:8090/api/v1';

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, ) {
  }

  attemptAuth( userCredentials:Object): Observable<any> {
   
    return this.http.post<{ access_token: string }>(`${this.baseURL}/users/login`, userCredentials).pipe(tap(res => {
      console.log('Status: 200');  
    }));
  }
}