import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/env';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  router=inject(Router)
  private _httpClient=inject(HttpClient)
  PostLoign(body:object):Observable<any>{
    return this._httpClient.post(`${environment.BaseUrl}/api/v1/users/signIn`,body)
  }

  logout(){
    if(localStorage.getItem('UserToken')!==null){
    localStorage.removeItem('UserToken')
    this.router.navigate(['/login'])
    }

  }
}
