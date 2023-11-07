import { ProductoInterface } from './../interface/producto-interface';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) {}

  baseUrl = environment.api +"/products";

  getAll() : Observable<any>{
    return this.http.get(this.baseUrl)
  }

  getOne(id : string){
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  postProducto(producto: ProductoInterface): Observable<any> {
    return this.http.post(this.baseUrl, producto);
  }

  putProducto(producto: ProductoInterface): Observable<any> {
    return this.http.put(`${this.baseUrl}/${producto.id}`, producto);
  }

  deleteProducto(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }


}
