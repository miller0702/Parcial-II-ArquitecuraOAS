import { HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor (private http : AuthService) {}

  ngOnInit(){
    this.http.getToken({
      "email": "john@mail.com",
      "password": "changeme"
    }).subscribe((res : any) :void => {

      localStorage.setItem('token_auth' , res.access_token);
    })
  }

}
