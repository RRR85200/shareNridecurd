import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/user';
import { PostRide } from '../../shared/post-ride';
import { RidesHistory } from '../../shared/rides_history';
import { Http, Headers, HttpModule } from '@angular/http';
import { CurrentRides } from '../../shared/current_ride';
import 'rxjs/add/operator/map';
import { Coupon } from '../../shared/coupon';

@Component({
  selector: 'app-rider-ride-history',
  templateUrl: './rider-ride-history.component.html',
  styleUrls: ['./rider-ride-history.component.css']
})
export class RiderRideHistoryComponent implements OnInit {


  user = new User();
  allcoupon: Array<Coupon>;
  usercoupon: Coupon;
  buycoupon = new Coupon();
  currentride = new CurrentRides();
  postedRides = new PostRide();
  historyRides = new RidesHistory();
  //availRides:PostRide = [];
  historyList: Array<RidesHistory>;
  public noUserCoup: boolean = false;
  public noRiderrides: boolean = false;


  successMsg: string;
  status: string;
  currentUserId: any;
  constructor(private http: Http) {

    this.user = JSON.parse(sessionStorage.getItem("currentuser"));
    this.currentUserId = this.user['user_id'];
    this.getRiderHistory(this.currentUserId);
    this.getAvailable_coupon();
    this.getUserCoupon(this.currentUserId);
  }

  ngOnInit() {
  }


  public getRiderHistory(user_id) {

    debugger;
    let header = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

    let user = {
      "user_id": user_id
    }
    this.http.post('http://localhost/practiceapi/getRiderhistory.php', user, { headers: header })
      //.(response => response.json())
      .subscribe(result => {
        debugger;
        let availHistory: Array<RidesHistory> = result.json();
        if (availHistory.length > 0) {
          this.historyList = result.json();
        } else {
          this.noRiderrides = true;
        }

        console.log("Got rider history " + this.historyList);

      },
      err => console.log(err)
      );

  }


  public getAvailable_coupon() {
    debugger;
    this.http.get('http://localhost/practiceapi/getAllCouponsapi.php')
      //.(response => response.json())
      .subscribe(result => {
        debugger;
        debugger;
        this.allcoupon = result.json();
        console.log(this.allcoupon);

      },
      err => console.log(err)
      );

  }

  public buyCoupon(coop) {
    debugger;
    this.buycoupon.coupon_code = coop.coupon_code;
    this.buycoupon.coupon_type = coop.coupon_type;
    this.buycoupon.coupon_validity = coop.coupon_validity;
    this.buycoupon.coupon_price = coop.coupon_price;
    this.buycoupon.coupon_seq = coop.coupon_seq;
    this.buycoupon.user_id = this.currentUserId;
    this.buycoupon.coupon_rides = coop.coupon_rides;
    console.log(this.buycoupon);
    this.http.post("http://localhost/practiceapi/buyCouponApi.php", JSON.stringify(this.buycoupon))

      .subscribe(result => {
        this.successMsg = JSON.parse(result['_body']).message;
        this.status = JSON.parse(result['_body']).status;
        // alert(JSON.parse(result['_body']).message);
        if (this.status === 'success') {
          this.successMsg = JSON.parse(result['_body']).message;

        } else if ((this.status === 'failure')) {
          this.successMsg = JSON.parse(result['_body']).message;
        }
      });


  }

  public getUserCoupon(user_id) {

    let user = {
      "user_id": user_id
    }
    this.http.post('http://localhost/practiceapi/getUserCouponapi.php', user)
         .subscribe(result => {
        debugger;
        let gotCoupon: Array<Coupon> = result.json();
        if (gotCoupon.length > 0) {
          this.usercoupon = gotCoupon[0];
          console.log(typeof (this.usercoupon));
          console.log(this.usercoupon);
          // sessionStorage.setItem('userCoupon',JSON.stringify(this.userCoupon));
        } else {
          this.noUserCoup = true;
        }
      },
      err => console.log(err)
      );

  }
}
