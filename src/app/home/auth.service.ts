import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http  : HttpClient) { }

  baseUrl = "https://api.escuelajs.co/api/v1/auth/login";

  getToken (informacion : { email : string , password: string}) {
    //return this.http.get(`${this.baseUrl}${informacion}`);
    return this.http.post<{token_auth : string, access_token: string}>(`${this.baseUrl}`, informacion);
  }



}
