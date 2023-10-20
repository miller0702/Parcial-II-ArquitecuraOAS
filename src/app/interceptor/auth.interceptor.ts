import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable , finalize} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let cloneReq = request;

    if(localStorage.getItem("token_auth")){
      cloneReq =  request.clone({
        setHeaders: {
          Authorization : localStorage.getItem("token_auth")!
        }
      })
    }
    console.log(localStorage.getItem("token_auth"));
    return next.handle(cloneReq).pipe(
      finalize(()=>{

      })
    );
  }
}
