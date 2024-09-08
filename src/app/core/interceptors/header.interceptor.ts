import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {

 const cc=inject(PLATFORM_ID)

 if(localStorage.getItem('UserToken')!==null){
  if(isPlatformBrowser(cc)){
  
  
     req=req.clone({setHeaders:{token:'3b8ny__'+localStorage.getItem("UserToken")}})
    
  
}}

  return next(req);
};
