import { Component, OnInit,Input } from '@angular/core';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
signInvalue=false;
  constructor() { 
    sessionStorage.removeItem('currentuser');
  }

  ngOnInit() {
    sessionStorage.removeItem('currentuser');
  }
  showSignIn(event){
    console.log(event);
    this.signInvalue=event;
  }

}
