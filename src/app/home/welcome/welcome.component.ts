import { LoaderService } from './../../shared/loader.service';
import { HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor (private http : AuthService, private load : LoaderService) {}

  ngOnInit(){
    this.http.getToken({
      "email": "john@mail.com",
      "password": "changeme"
    }).subscribe((res : {token_auth : string, access_token: string}) :void => {

      localStorage.setItem('token_auth' , res.access_token);
    })
  }

  active(){
    console.log("11111111111111111111");
    this.load.setActive();
  }

}
