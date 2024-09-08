import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/env';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 private _HttpClient=inject(HttpClient)
 SubmitRegistration(body:object):Observable<any>{
  return this._HttpClient.post(`${environment.BaseUrl}/api/v1/users/signUp`,body)
 }
}
