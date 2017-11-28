import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../shared/user';
import {SignUpservice} from './signup.service';
import {FormsModule,FormControl,FormGroup,FormControlDirective} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = new User();
  userTypeOptions:string[]=['Driver','Rider'];
  registerOK:Boolean=true;
  constructor(private signupservice:SignUpservice) { }
  @Output() signInValue= new EventEmitter<boolean>();
  sinin=false;
  ngOnInit() {
    this.user.userType=this.userTypeOptions[0];
    
  }
 
  onSignUp(user:User){
  console.log(user);
    this.signupservice.addUser(user).subscribe(res=>{
      if(res){
          this.registerOK=false;
      }
    },error=>{console.error(error)},()=>{console.log('complet')});
    
    console.log(this.user);

  }

  gotoSignIn(value){
   console.log(value);
   this.signInValue.emit(value);
  }


}
