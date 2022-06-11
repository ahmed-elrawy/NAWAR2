import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token!: string;
  private readonly stateKey = 'state';
  private state!:any;

  constructor(
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.state = localStorage.getItem(this.stateKey) as any ;
    let accessToken
    if(JSON.parse(this.state) && JSON.parse(this.state).accessToken){
      accessToken= JSON.parse(this.state).accessToken 

    }else{     accessToken= ''    }

    request = request.clone({
      setHeaders: {
        device: 'web',
        Authorization: `Bearer ${ accessToken}`,
        Accept: 'application/json'
      },
    });
    // console.log(request)
    return next.handle(request);
  }
}
