import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  constructor(private producto : ServiceService ) {}

  ngOnInit(){
    this.producto.getAll().subscribe((res :any)=>{
      console.log(res);
    })
  }

}
