import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectorService implements HttpInterceptor{

  constructor() { }

  //Importar primero el observable
  intercept( 
    req:HttpRequest<any>,
    next:HttpHandler):
    Observable<HttpEvent<any>>{
      console.log("interceptamos")
        const newReq = req.clone({setHeaders:{
          Authorization: '<----------------Interceptado----------------->'
        }})

        return next.handle(newReq);
    }

}
