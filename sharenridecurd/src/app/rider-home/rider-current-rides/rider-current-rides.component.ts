import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/user';
import {PostRide} from '../../shared/post-ride';
import {Http, Headers, HttpModule} from '@angular/http';
import {CurrentRides} from '../../shared/current_ride';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-rider-current-rides',
  templateUrl: './rider-current-rides.component.html',
  styleUrls: ['./rider-current-rides.component.css']
})
export class RiderCurrentRidesComponent implements OnInit {

  user = new User();
  currentride= new CurrentRides();
  postedRides=new PostRide();
  //availRides:PostRide = [];
  currentRides:Array<CurrentRides>;
  successMsg:string;
  status:string;
  currentUserId:any;
  
  
  constructor(private http:Http) {
    debugger;
    
    this.user=JSON.parse(sessionStorage.getItem("currentuser"));
    this.currentUserId=this.user['user_id'];
    debugger;
    this.getRiderCurrentride(this.currentUserId);
    
   }

  ngOnInit() {
  }


  public getRiderCurrentride(user_id){ 

    debugger; 
    let header=new Headers({'Content-Type': 'application/json','Accept':'application/json'});
    
    let user = {
      "user_id" : user_id
    }
    this.http.post('http://localhost/practiceapi/getcuurrentRiderrides.php',user,{headers:header})
    //.(response => response.json())
    .subscribe(result => {
      debugger;
      this.currentRides = result.json();
      console.log(this.currentRides);
      //console.log("Naresh"+result)
        ///if (result != null) {
           
       // }
    },
    err => console.log(err)
    );

}


}
