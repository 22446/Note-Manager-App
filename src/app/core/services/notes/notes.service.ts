import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/env';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private _Htppclient=inject(HttpClient)
  AddNote(data:object):Observable<any>{
    return this._Htppclient.post(`${environment.BaseUrl}/api/v1/notes`,data)
  }
  GetNotes():Observable<any>{
    return this._Htppclient.get(`${environment.BaseUrl}/api/v1/notes`)
  }
  UpdateNotes(id:string|null,body:object):Observable<any>{
    return this._Htppclient.put(`${environment.BaseUrl}/api/v1/notes/${id}`,body)
  }
  DeleteNotes(id:string|null):Observable<any>{
    return this._Htppclient.delete(`${environment.BaseUrl}/api/v1/notes/${id}`)
  }

}
