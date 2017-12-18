import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/user';
import { PostRide } from '../../shared/post-ride';
import { Http, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { CurrentRides } from '../../shared/current_ride';
import { Car } from '../../shared/car';

@Component({
  selector: 'app-driver-custom-rides',
  templateUrl: './driver-custom-rides.component.html',
  styleUrls: ['./driver-custom-rides.component.css']
})
export class DriverCustomRidesComponent implements OnInit {

  user = new User();
  postedRides = new PostRide();
  //availRides:PostRide = [];
  availableRides: Array<PostRide>;
  currentride = new CurrentRides();
  public currentUserID: any;
  public price: any;
  successMsg: string;
  status: string;
  public noavailablerides: boolean = false;
  public userCar: Car;
  public useCar: Car;
  public driverAvailabity=false;



  constructor(private http: Http) {
    this.user = JSON.parse(sessionStorage.getItem("currentuser"));
    this.currentUserID = this.user['user_id']

  }

  ngOnInit() {
    this.getAvailableCostumnride();
    this.getUserCar(this.currentUserID);
    
  }
  public getUserCar(user_id) {

    let user = {
      "user_id": user_id
    }
    this.http.post('http://localhost/practiceapi/getUserCarapi.php',user)
      //.(response => response.json())     
      .subscribe(result => {
        debugger;
        let gotCar = result.json();
        if (gotCar.length > 0) {
          let isuserCar: Car = gotCar[0];
          this.userCar=isuserCar;
        //  Object.assign(this.userCar, isuserCar);
          //console.log("Hi my car in costumn rides accept" + (JSON.stringify(this.userCar)));
          sessionStorage.setItem('userCar', JSON.stringify(this.userCar));
        } else {


        }


      },
      err => console.log(err)
      );

  }


  public getAvailableCostumnride() {
    let header = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

    this.http.get('http://localhost/practiceapi/getCostumRidesapi.php')
      //.(response => response.json())
      .subscribe(result => {
        debugger;
        let availRides: Array<PostRide> = result.json();
        if (availRides.length > 0) {
          this.availableRides = result.json()
        } else {
          this.noavailablerides = true;
        }

      },
      err => console.log(err)
      );

  }

  public acceptRide(rds, eprice) {
    this.currentride.destination = rds.destination;
    this.currentride.ride_rider_name = rds.postedBy;
    this.currentride.ride_driver_name = this.user['firstname'] + ' ' + this.user['lastname'];
    this.currentride.driver_id = this.user['user_id'];
    this.currentride.rider_id = rds.user_id;
    this.currentride.origin = rds.origin;
    this.currentride.ridetime = rds.date;
    this.currentride.ride_id = rds.ride_id;
    this.currentride.carModel = this.userCar.model;
    this.currentride.carNumber = this.userCar.vehicle_num;
    this.currentride.seats = rds.seats;
    this.currentride.price = eprice;
    debugger;
    let checkDetails = {
      "driver_id": this.currentride.driver_id ,
      "ridetime": this.currentride.ridetime,
      "user_id":this.currentride.driver_id,
      "ridedate":this.currentride.ridetime
    };

    console.log(this.currentride);
    debugger;
    this.http.post("http://localhost/practiceapi/getDriverPostedRidesAvailabilityapi.php", JSON.stringify(checkDetails))
    .subscribe(result => {
      debugger;
      let info = result.json();
      if (info.length == 0) {
        this.driverAvailabity = false;
       this.http.post("http://localhost/practiceapi/getDriverAvailabilityapi.php", JSON.stringify(checkDetails))
          .subscribe(result => {
            debugger;
            let resp = result.json();
             if (resp.length == 0) {
              this.driverAvailabity = false;
              this.http.post("http://localhost/practiceapi/insertcurrentrideapi.php", JSON.stringify(this.currentride))
              
                    .subscribe(result => {
                      debugger;
                      this.successMsg = JSON.parse(result['_body']).message;
                      this.status = JSON.parse(result['_body']).status;
                      // alert(JSON.parse(result['_body']).message);
                      if (this.status === 'success') {
                        this.successMsg = JSON.parse(result['_body']).message;
                        this.http.post("http://localhost/practiceapi/deleteAvailableRideapi.php",rds)
                        .subscribe(result => {
                          console.log(result);
                          this.getAvailableCostumnride();
                        });
                      } else if ((this.status === 'failure')) {
                        this.successMsg = JSON.parse(result['_body']).message;
                      }
                    });
                 
                }          

            else {
              this.driverAvailabity = true;
            }

          });

      } else {
        this.driverAvailabity = true;
      }

    });



}
    

}
