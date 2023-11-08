import { ProductoInterface } from './../../../interface/producto-interface';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ListaComponent } from '../../components/lista/lista.component';
import { HeaderComponent } from 'src/app/public/header/header.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  constructor(private service : ServiceService){}

  elementos :  ProductoInterface[] = [];

  ngOnInit() : void{
    this.service.getAll().subscribe(
      (res :any)=>{
        this.elementos = res;
      } ,
      (ERR :any)=> {
        console.log("error");
      },
      ()=>{
        console.log("finis");
      }

    );

  }

}
