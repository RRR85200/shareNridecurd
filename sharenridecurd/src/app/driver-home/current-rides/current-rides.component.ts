import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/user';
import {PostRide} from '../../shared/post-ride';
import {Http, Headers, HttpModule} from '@angular/http';
import {CurrentRides} from '../../shared/current_ride';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-current-rides',
  templateUrl: './current-rides.component.html',
  styleUrls: ['./current-rides.component.css']
})
export class CurrentRidesComponent implements OnInit {

  user = new User();
  currentride= new CurrentRides();
  postedRides=new PostRide();
  //availRides:PostRide = [];
  currentRides:Array<CurrentRides>;
  currentRiderRides:Array<CurrentRides>;
  successMsg:string;
  status:string;
  currentUserId:any;
  public noavailablerides:boolean=false;
  public noavailableriderrides:boolean=false;
  statusRidermsg:string;
  
  
  constructor(private http:Http) {
    debugger;
    
    this.user=JSON.parse(sessionStorage.getItem("currentuser"));
    this.currentUserId=this.user['user_id'];
    debugger;
    this.getCurrentride(this.currentUserId);
    this.getCurrentriderRides(this.currentUserId);
    
   }

  ngOnInit() {
  }


  public getCurrentride(user_id){ 

    debugger; 
    let header=new Headers({'Content-Type': 'application/json','Accept':'application/json'});
    
    let user = {
      "user_id" : user_id
    }
    this.http.post('http://localhost/practiceapi/getcuurrentDriverrides.php',user,{headers:header})
    //.(response => response.json())
    .subscribe(result => {
      debugger;
      let currentRds:Array<PostRide>  = result.json();
      if(currentRds.length>0){
       this.currentRides=result.json()
     } else {
       this.noavailablerides=true;
     }       
      if(result.json()!==null){
      this.currentRides = result.json();
      console.log(this.currentRides);
      //console.log("Naresh"+result)
        ///if (result != null) {
           
        }else{
          window.alert("No currnt Rides available");
        }
    },
    err => console.log(err)
    );

}

public getCurrentriderRides(user_id){ 
  
      debugger; 
      let header=new Headers({'Content-Type': 'application/json','Accept':'application/json'});
      
      let user = {
        "user_id" : user_id
      }
      this.http.post('http://localhost/practiceapi/getcuurrentRiderrides.php',user,{headers:header})
      //.(response => response.json())
      .subscribe(result => {
        debugger;
        let currentRds:Array<PostRide>  = result.json();
        if(currentRds.length>0){
         this.currentRiderRides=result.json()
       } else {
         this.noavailableriderrides=true;
         this.statusRidermsg="No Rides scheduled ";
       }       
        
        //console.log("Naresh"+result)
          ///if (result != null) {
             
         
      },
      err => console.log(err)
      );
  
  }

stopRide(rds:CurrentRides){
  debugger; 
  console.log(JSON.stringify(rds));
  this.http.post("http://localhost/practiceapi/historyrideinsertapi.php", rds)    

  .subscribe(result => {
    debugger;
    this.successMsg = JSON.parse(result['_body']).message;
    this.status = JSON.parse(result['_body']).status;
   // alert(JSON.parse(result['_body']).message);
    if(this.status === 'success'){
      this.successMsg = JSON.parse(result['_body']).message;
    }else{
      this.successMsg = JSON.parse(result['_body']).message;
    }
    console.log("current ride j Inserted in history Succesfully");
    this.http.post("http://localhost/practiceapi/deleteCurrentRideapi.php", rds)    
    
     .subscribe(result => {
     //  console.log(JSON.parse(result['_body']).message);
       this.getCurrentride(this.currentUserId);
     });    
      
  },
  err => console.log(err)
  );

}
  



startRide(){}

}


