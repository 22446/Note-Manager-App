import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const routeer=inject(Router)
  const _PLATFORM_ID=inject(PLATFORM_ID)
  if(isPlatformBrowser(_PLATFORM_ID)){
  if(localStorage.getItem('UserToken')==null){
    routeer.navigate(['/login'])
    return false
    

  }else{
    return true
  }
}
  return false;
};
