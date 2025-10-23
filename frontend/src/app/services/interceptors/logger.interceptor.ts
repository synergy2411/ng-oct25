import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Logger interceptor works!');
    console.log('[OUTGOING_REQUEST]', req);

    const clonedReq = req.clone({
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });

    return next.handle(clonedReq);
  }
}

// import { HttpInterceptorFn } from '@angular/common/http';

// export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };
