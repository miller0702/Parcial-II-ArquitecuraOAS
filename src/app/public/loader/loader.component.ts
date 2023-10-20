import { LoaderService } from './../../shared/loader.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  constructor( private activeLoader : LoaderService){}

  active$ =  this.activeLoader.active$;
  activeDos =  this.activeLoader.activeDos;
  
  ngOnChange(){
    this.activeLoader.activeDos
  }


  quitar(){
    console.log("11");
    console.log(this.activeLoader.activeDos)
    this.activeLoader.setInactive()
    console.log(this.activeLoader.activeDos)

  }
}
