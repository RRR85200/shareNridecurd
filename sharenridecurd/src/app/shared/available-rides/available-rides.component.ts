import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/user';
import { PostRide } from '../../shared/post-ride';
import { Http, Headers, HttpModule } from '@angular/http';
import { CurrentRides } from '../current_ride';
import { Coupon } from '../coupon';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';
import { NgModel } from '@angular/forms';
import { Car } from '../car';
@Component({
  selector: 'app-available-rides',
  templateUrl: './available-rides.component.html',
  styleUrls: ['./available-rides.component.css']
})
export class AvailableRidesComponent implements OnInit {
  user = new User();
  public no_passengers: number;
  currentride: CurrentRides = new CurrentRides();
  postedRides: PostRide = new PostRide();
  // public userCoupon=new Coupon;
  userCoupon: Coupon = new Coupon;
  // availRides:PostRide = [];
  availableRides: Array<PostRide>;
  public currentUserID: any;
  successMsg: string;
  status: string;
  public sameDriver: boolean;
  public noavailablerides = false;
  hasCoupon = false;
  hasNoCoupon = false;
  public useCar: Car;
  public price: any;


  constructor(private http: Http) { }

  ngOnInit() {
    this.getAvailableride();

    this.user = JSON.parse(sessionStorage.getItem('currentuser'));
    this.currentUserID = this.user['user_id'];
    this.getUserCoupon(this.currentUserID);
    this.price = 20;
    // if(sessionStorage.getItem("userCar")){
    //   this.useCar=JSON.parse(sessionStorage.getItem("userCar"))
    //   this.currentride.carModel=this.useCar.model;
    //   this.currentride.carNumber=this.useCar.vehicle_num;};


  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }


  public getAvailableride() {
   // let header = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

    this.http.get('http://localhost/practiceapi/getridesapi.php').subscribe(result => {
        debugger;
        let availRides: Array<PostRide> = result.json();
        if (availRides.length > 0) {
          this.availableRides = result.json();
          console.log(JSON.stringify(this.availableRides));
        } else {
          this.availableRides = result.json();
          this.noavailablerides = true;
        }

      },
      err => window.alert("err")
      );

  }

  public getUserCoupon(user_id) {

    let user = {
      "user_id": user_id
    }
    this.http.post('http://localhost/practiceapi/getUserCouponapi.php', user)
      //.(response => response.json())
      .subscribe(result => {
        debugger;
        let gotCoupon = result.json();
        if (gotCoupon.length > 0) {
          let isuserCoupon: Coupon = gotCoupon[0];

          Object.assign(this.userCoupon, gotCoupon[0]);
          console.log("Hi" + (this.userCoupon));
          console.log(typeof (this.userCoupon));
          this.hasCoupon = true;
          console.log("I have a coupon" + JSON.stringify(this.userCoupon));
        } else {
          this.hasNoCoupon = true;
          this.hasCoupon = false;
          console.log("I have No coupon" + this.userCoupon);

        }
        // sessionStorage.setItem('userCoupon',JSON.stringify(this.userCoupon));

      },
      err => console.log(err)
      );

  }
  public updateCouponRides(){

  this.http.post("http://localhost/practiceapi/updateCouponRide.php", JSON.stringify(this.userCoupon))

      .subscribe(result => {
   console.log(result.json());
  });
}




  public joinRide(rds, noSeats, totalprice) {
    debugger;
    console.log(noSeats);
    console.log(totalprice.value);
    //public joinRide(rds) {
    debugger;
    this.currentride.destination = rds.destination;
    this.currentride.ride_rider_name = this.user['firstname'] + ' ' + this.user['lastname'];
    this.currentride.ride_driver_name = rds.postedBy;
    this.currentride.driver_id = rds.user_id;
    this.currentride.rider_id = this.user['user_id'];
    this.currentride.origin = rds.origin;
    this.currentride.ridetime = rds.date;
    this.currentride.ride_id = rds.ride_id;
    this.currentride.carModel = rds.carModel;
    this.currentride.carNumber = rds.carNumber;
    this.currentride.seats = noSeats;
    this.currentride.price = totalprice.value;
    // this.currentride.seats = 1;
    //  this.currentride.price = rds.price;
    console.log(this.currentride);
    debugger;
    this.http.post("http://localhost/practiceapi/insertcurrentrideapi.php", JSON.stringify(this.currentride))

      .subscribe(result => {
        debugger;
        this.successMsg = JSON.parse(result['_body']).message;
        this.status = JSON.parse(result['_body']).status;
        // alert(JSON.parse(result['_body']).message);
        if (this.status === 'success') {
          this.successMsg = JSON.parse(result['_body']).message;
          this.http.post("http://localhost/practiceapi/updateRideSeats.php", JSON.stringify(this.currentride))
            .subscribe(res => {
              debugger;
              this.getAvailableride();
              this.updateCouponRides();
              this.getUserCoupon(this.currentUserID);

            });

        } else if ((this.status === 'failure')) {
          this.successMsg = JSON.parse(result['_body']).message;
        }
        console.log("current ride joined & Inserted Succesfully");

      },
      err => console.log(err)
      );

  }

}



