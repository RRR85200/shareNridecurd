
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
public regStatus:boolean=false;
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
       debugger;
       let userDetails = res.json();
       if(userDetails.length>0){
         let user:User = userDetails[0];

        Object.assign(this.user,userDetails[0]);
       console.log("Hi" + (this.user));
       console.log(typeof(userDetails[0]));




          sessionStorage.setItem('currentuser',JSON.stringify(this.user));
          this.signinservice.isLogedIn();
         // debugger;
          if(this.user.userType ==="Driver"){
            this.route.navigate(['/driver-home']);
          }else  if(this.user.userType === "Rider") {
            this.route.navigate(['/rider-home']);
          };
        }else{
          this.regStatus=true;
        }

      }
    },error=>{console.error(error)},()=>{console.log(' got user back')});

  }

}
