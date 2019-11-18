import { Injectable } from '@angular/core';

import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TokenStorage } from './token.storage';

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor( private router: Router, private tokenStorage: TokenStorage) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token: string = this.tokenStorage.getToken();
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', token) });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {

                if (event instanceof HttpResponse) {
                  
                    if(token =="undefined"){
                
                        this.tokenStorage.saveToken(event.headers.get('Authorization'));
                    }
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status == 401) {
                    this.router.navigate(['login']);
                }
                return throwError(error);
            }));
    }
}