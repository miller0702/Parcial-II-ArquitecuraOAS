import { ProductoModule } from './producto/producto.module';
import { HomeModule } from './home/home.module';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
 


const roters : Routes  =[  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(roters),
    HomeModule,
    ProductoModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
