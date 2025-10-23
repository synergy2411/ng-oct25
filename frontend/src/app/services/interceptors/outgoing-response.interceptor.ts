import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class IncomingResponseInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((value) => {
        console.log('[INCOMING_RESPONSE]', value);
      }),
      catchError((err: HttpErrorResponse) => {
        // if (err.status === 404) {
        //   console.log('Client side error');
        // } else if (err.status === 501) {
        //   console.log('Server side error');
        // } else {
        // }
        // console.log('ERROR MESSAGE : ', err.message);
        // console.log('ERROR STATUS : ', err.status);
        return throwError(() => new Error(err.message));
      })
    );
  }
}
