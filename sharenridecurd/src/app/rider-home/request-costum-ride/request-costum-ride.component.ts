import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/user';
import { PostRide } from '../../shared/post-ride';
import { Http, Headers, HttpModule } from '@angular/http';

@Component({
  selector: 'app-request-costum-ride',
  templateUrl: './request-costum-ride.component.html',
  styleUrls: ['./request-costum-ride.component.css']
})
export class RequestCostumRideComponent implements OnInit {
  public campuses: Array<String>;
  public destinations: Array<String>;
  public requestride = new PostRide;
  user = new User();
  successMsg: string;
  status: string;
  today = new Date();

  requestRideForm: FormGroup;
  constructor(private http: Http) { }

  ngOnInit() {

    this.destinations = ['UCM main campus', 'Lee summit Campus', 'Walmart warrensburg', 'Sedali', 'Kansas City', 'Overland Park',
      'Olathe', 'Independence', 'Shawnee',
      'KCI Airport', 'Kansas Zoo Area', 'Lone Jack', 'Centerview', 'Knob Knoster', 'Bristle Ridge', 'Post Oak', 'Lions Lake',
      'Dallas', 'Chicago'];
    this.campuses = ['UCM main campus', 'Lee summit Campus'];
    this.requestRideForm = new FormGroup({
      'origin': new FormControl('', Validators.required),
      'destination': new FormControl('', Validators.required),
      'seats': new FormControl('', Validators.required),
      'date': new FormControl('', Validators.required)
    });
    this.user = JSON.parse(sessionStorage.getItem('currentuser'));
    console.log('USer identified from session' + this.user);
    debugger;
    this.requestride.user_id = this.user['user_id'];
    this.requestride.userMobile = this.user.mobile;
    this.requestride.user_type = this.user.userType;
    this.requestride.RiderName = this.user['firstname'] + this.user['lastname'];
    this.requestride.price = 0.00;
  }

  public validateRide(): boolean {

    debugger;
    if ((this.requestRideForm.get('destination').value === this.requestRideForm.get('origin').value) &&
      (this.requestRideForm.get('destination').touched && this.requestRideForm.get('origin').touched)) {
      return true;

    } else if ((new Date(this.requestRideForm.get('date').value) < this.today) &&
      this.requestRideForm.get('date').touched) {
        console.log("selected date" +this.requestRideForm.get('date').value);
        console.log("today" + this.today);
      return true;

    } else if (!this.requestRideForm.valid) {
      return true;
    } else if (this.requestRideForm.valid) {
      return false;

    }
  }

  requestRide() {
    debugger;
    console.log(this.requestride);

    this.http.post("http://localhost/practiceapi/costumnRidePostapi.php", JSON.stringify(this.requestride))
      .subscribe(result => {
        this.requestRideForm.reset();
        console.log("Costumn Ride Request made Succesfully");
        this.successMsg = JSON.parse(result['_body']).message;
        this.status = JSON.parse(result['_body']).status;
        // alert(JSON.parse(result['_body']).message);
        if (this.status === 'success') {
          this.successMsg = JSON.parse(result['_body']).message;
        } else if ((this.status === 'failure')) {
          this.successMsg = JSON.parse(result['_body']).message;
        };
        err => console.log(err)
      });
  }
}
