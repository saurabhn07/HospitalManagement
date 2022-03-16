import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/adminlogin.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http :HttpClient) { }
  
  
  
  public loginAdminFromRemote(admin :Admin):Observable<any>{
     return this._http.post<any>("http://localhost:8081/adminlogin",admin)
  }

  public registerAdminFromRemote(admin :Admin):Observable<any>{
    return this._http.post<any>("http://localhost:8081/registerAdmin",admin)
  }
}
