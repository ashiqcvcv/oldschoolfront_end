import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService : AuthService,private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.headers.get('noauth')){
      return next.handle(request.clone());
    }else{
      const clonedrequest = request.clone({
        headers : request.headers.set("Authorization","Bearer"+this.authService.getToken())
      });
      return next.handle(clonedrequest).pipe(
        tap(
          event => {},
          err =>{
            if(err.error.auth==false){
              this.router.navigateByUrl('/landing');
            }
          }
        )
      )
    }
  }
}
