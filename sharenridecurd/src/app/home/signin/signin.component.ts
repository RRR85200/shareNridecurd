import { Component, OnInit,Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../shared/user';
import {SignInService} from '../signin/signin.service';
import {Router} from '@angular/router';

 @Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
user=new User();
// @Input() signInValue:boolean=false;
  constructor(private signinservice:SignInService,private route:Router) { }

  ngOnInit() {
  }

  goToSignUp(){
this.route.navigate(['home']);
  }


  onSignIn(user:User){
  //  debugger;
    this.signinservice.getUser(user).subscribe(res=>{
      if(res){
       // debugger;
          let userDetails:User=res.json();
         // debugger;
          console.log(userDetails);
          sessionStorage.setItem('currentuser',JSON.stringify(userDetails));
          this.signinservice.isLogedIn();
         // debugger;
          if(userDetails.userType ==="Driver"){
            this.route.navigate(['/driver-home']);
          }else  if(userDetails.userType === "Rider") {
            this.route.navigate(['/rider-home']);
          };

        
      }
    },error=>{console.error(error)},()=>{console.log(' got user back')});

  }

}
