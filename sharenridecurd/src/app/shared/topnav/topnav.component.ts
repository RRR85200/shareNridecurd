import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{sessionService} from '../session.service';
import {SignInService} from '../../home/signin/signin.service';
import {User} from '../user';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
public isLoggedIn:boolean=false;

  constructor(private route:Router,private signInService:SignInService) { }

  ngOnInit() {
        debugger;
        this.signInService.isLogedIn();
        this.signInService.isloggedIn.subscribe(res =>{
          this.isLoggedIn=res;
          console.log(this.isLoggedIn);
        } );
    } 

  logout(){
    sessionStorage.removeItem('currentuser');
    sessionStorage.removeItem('userCar');
    this.signInService.isLogedIn();
    this.route.navigate(['/home']);
  }

 public  homeRoute(){
    if(sessionStorage.getItem('currentuser')){
        let myUser:User=JSON.parse(sessionStorage.getItem('currentuser'));
        
        debugger;
        if(myUser.userType === "Driver"){
          this.route.navigate(['/driver-home']);
         
        }else if (myUser.userType === "Rider"){
          this.route.navigate(['/rider-home']);
      
        }

    }else{
      console.log("Bye Bye");
      this.logout();

    }
  }

}
