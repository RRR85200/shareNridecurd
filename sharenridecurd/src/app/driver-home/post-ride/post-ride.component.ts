import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, PatternValidator, MaxLengthValidator } from '@angular/forms';
import { User } from '../../shared/user';
import { PostRide } from '../../shared/post-ride';
import { Car } from '../../shared/car';
import { Http, Headers, HttpModule } from '@angular/http';

@Component({
  selector: 'app-post-ride',
  templateUrl: './post-ride.component.html',
  styleUrls: ['./post-ride.component.css']
  //providers: [HttpModule]
})
export class PostRideComponent implements OnInit {
  public campuses: Array<String>;
  public destinations: Array<String> = ['UCM main campus', 'Lee summit Campus', 'Walmart warrensburg', 'Sedali', 'Kansas City', 'Overland Park', 'Olathe', 'Independence', 'Shawnee',
    'KCI Airport', 'Kansas Zoo Area', 'Lone Jack', 'Centerview', 'Knob Knoster', 'Bristle Ridge', 'Post Oak', 'Lions Lake',
    'Dallas', 'Chicago'];
  public postride = new PostRide;
  today = new Date();

  user = new User();
  successMsg: string;
  status: string;
  statuscar: string;
  statusUpdateCar: string;
  public car = new Car;
  userCar: Car = new Car;
  hasCar: boolean = false;
  public currentUserID: any;
  postRideForm: FormGroup;
  carDetails: FormGroup;
  updateCar: FormGroup;
  useCar: Car;
  postRideStatus: boolean = false;
  isUpdateCar: boolean = true;
  constructor(private http: Http) {

  }

  ngOnInit() {
    //   this.destinations=['UCM main campus','Lee summit Campus','Walmart warrensburg','Sedali','Kansas City','Overland Park','Olathe','Independence','Shawnee',
    //   'KCI Airport','Kansas Zoo Area','Lone Jack','Centerview','Knob Knoster','Bristle Ridge','Post Oak','Lions Lake',
    //  'Dallas','Chicago'];
    this.postride.ridedate = new Date();
    this.user = JSON.parse(sessionStorage.getItem("currentuser"));
    this.currentUserID = this.user['user_id'];
    this.getUserCar(this.currentUserID);
    this.campuses = ['UCM main campus', 'Lee summit Campus'];
    this.carDetails = new FormGroup({
      'model': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*'), Validators.maxLength(7)]),
      'year': new FormControl('', [Validators.required, this.minMaxYear, Validators.pattern('[0-9]*')]),
      'company': new FormControl('', [Validators.required, Validators.pattern('[A-Za-z\\s]+')]),
      'vehicleNum': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*'), Validators.maxLength(7)]),
      // 'vehicleNum': new FormControl('', [Validators.required,Validators.maxLength(7)]),
      'seats': new FormControl('', [Validators.required, this.minMax, Validators.pattern('[0-9]*')])

    });
    this.updateCar = new FormGroup({

      'model': new FormControl(this.userCar.model, [Validators.required, Validators.pattern('^[a-zA-Z0-9]*'), Validators.maxLength(7)]),
      'year': new FormControl(this.userCar.year, [Validators.required, this.minMaxYear, Validators.pattern('[0-9]*')]),
      'company': new FormControl(this.userCar.company, [Validators.required, Validators.pattern('[A-Za-z\\s]+')]),
      'vehicleNum': new FormControl(this.userCar.vehicle_num, [Validators.required, Validators.pattern('^[a-zA-Z0-9]*'), Validators.maxLength(7)]),
      'seats': new FormControl(this.userCar.seats, [Validators.required, this.minMax, Validators.pattern('[0-9]*')])

    });
    /////////////////////
    this.postRideForm = new FormGroup({
      'origin': new FormControl('UCM main campus', Validators.required),
      'destination': new FormControl('Lee summit Campus', Validators.required),
      'seats': new FormControl('', [Validators.required, this.minMax, Validators.pattern('[0-9]*')]),
      'date': new FormControl('', [Validators.required]),
      'price': new FormControl('', [Validators.required, this.minMaxPrice, Validators.pattern('[0-9]*')])
    });
    this.user = JSON.parse(sessionStorage.getItem("currentuser"));
    console.log("USer identified from session" + this.user);
    this.car.user_id = this.user['user_id'];
    this.useCar = JSON.parse(sessionStorage.getItem("userCar"));
  }

  /////////////custom validators///////////
  minMaxPrice(control: FormControl) {
    return parseInt(control.value) > 0 && parseInt(control.value) <= 70 ? null : {
      minMaxPrice: true
    }
  }
  minMax(control: FormControl) {
    return parseInt(control.value) > 0 && parseInt(control.value) <= 5 ? null : {
      minMax: true
    }
  }
  validateYear(control: FormControl) {
    let currentDate = new Date().toUTCString();
    let selectedDate = control.value.toUTCString();
    console.log(currentDate + "this is today");
    console.log(selectedDate + "this is selected date");
    return selectedDate > currentDate ? null : {
      validateYear: true
    }

  }

  minMaxYear(control: FormControl) {
    return parseInt(control.value) > 1980 && parseInt(control.value) <= 2019 ? null : {
      minMaxYear: true
    }
  }
  public validateRide(): boolean {
    if ((this.postRideForm.get('destination').value === this.postRideForm.get('origin').value) &&
      (this.postRideForm.get('destination').touched && this.postRideForm.get('origin').touched)) {
      return true;

    }
    else if (
      (Date.parse((this.postRideForm.get('date').value).toString()) <= Date.parse((this.today).toString()))
    ) {
      debugger;
      console.log("selected date" + Date.parse((this.postRideForm.get('date').value).toString()));
      console.log("today" + Date.parse((this.today).toString()));
      return true;

    } else if (!this.postRideForm.valid) {
      return true;
    } else if (this.postRideForm.valid) {
      return false;

    }
  }
  //////

  public editCar() {
    this.isUpdateCar = false;
    document.getElementById("showcardetails").style.display = "none";
  }
  public UpdateCar() {
    console.log(this.userCar);
    debugger;
    this.userCar.company = this.userCar.company.toLocaleUpperCase();
    this.userCar.vehicle_num = this.userCar.vehicle_num.toLocaleUpperCase();

    this.http.post("http://localhost/practiceapi/updateCarapi.php", JSON.stringify(this.userCar))
      .subscribe(result => {

        console.log("updated Car Succesfully");
        this.getUserCar(this.currentUserID);
        this.successMsg = JSON.parse(result['_body']).message;
        this.statusUpdateCar = JSON.parse(result['_body']).status;
        document.getElementById("showcardetails").style.display = "block";
        this.isUpdateCar = true;
        // alert(JSON.parse(result['_body']).message);
        if (this.statusUpdateCar === 'success') {
          this.successMsg = JSON.parse(result['_body']).message;
        } else if ((this.statusUpdateCar === 'failure')) {
          this.successMsg = JSON.parse(result['_body']).message;
        };
        err => console.log(err)

      });

  }

  public postCar() {
    this.car.company = this.car.company.toLocaleUpperCase();
    this.car.company = this.car.vehicle_num.toLocaleUpperCase();

    this.http.post("http://localhost/practiceapi/inserCar.php", JSON.stringify(this.car))
      .subscribe(result => {
        this.carDetails.reset();
        console.log("posted Ride Succesfully");
        this.successMsg = JSON.parse(result['_body']).message;
        this.statuscar = JSON.parse(result['_body']).status;
        // alert(JSON.parse(result['_body']).message);
        if (this.statuscar === 'success') {
          this.successMsg = JSON.parse(result['_body']).message;
          this.hasCar = true;
          this.getUserCar(this.currentUserID);

        } else if ((this.statuscar === 'failure')) {
          this.successMsg = JSON.parse(result['_body']).message;
        };
        err => console.log(err)

      });

  }

  public getUserCar(user_id) {

    let user = {
      "user_id": user_id
    }
    this.http.post('http://localhost/practiceapi/getUserCarapi.php', user)
      //.(response => response.json())     
      .subscribe(result => {
        debugger;
        let gotCar = result.json();
        if (gotCar.length > 0) {
          let isuserCar: Car = gotCar[0];
          Object.assign(this.userCar, gotCar[0]);
          console.log("Hi my car" + (JSON.stringify(this.userCar)));
          this.hasCar = true;
          sessionStorage.setItem('userCar', JSON.stringify(this.userCar));
        } else {
          this.hasCar = false;

        }


      },
      err => console.log(err)
      );

  }

  public createRide() {
    this.postride.user_id = this.user['user_id'];
    this.postride.userMobile = this.user.mobile;
    this.postride.user_type = this.user.userType;
    this.postride.Drivername = this.user['firstname'] + this.user['lastname'];
    this.postride.carNumber = this.userCar.vehicle_num.toLocaleUpperCase();;
    this.postride.carModel = this.userCar.model.toLocaleUpperCase();;
    console.log(JSON.stringify(this.postride));
    let checkDetails = {
      "driver_id": this.postride.user_id,
      "ridetime": this.postride.ridedate
    };

    // this.headers = new Headers();
    //this.headers.append('Content-Type', 'application/json');
    // this.http.post("http://localhost/practiceapi/postrideapi.php",this.postride).map(res=>
    // { if (res){
    //   console.log(res);
    // }
    this.http.post("http://localhost/practiceapi/getDriverPostedRidesAvailabilityapi.php", JSON.stringify(this.postride))
      .subscribe(result => {
        debugger;
        let info = result.json();
        if (info.length == 0) {
          this.postRideStatus = false;
         this.http.post("http://localhost/practiceapi/getDriverAvailabilityapi.php", JSON.stringify(checkDetails))
            .subscribe(result => {
              debugger;
              let resp = result.json();
               if (resp.length == 0) {
                this.postRideStatus = false;

                this.http.post("http://localhost/practiceapi/postrideapi.php", JSON.stringify(this.postride))
                  .subscribe(result => {
                    this.postRideForm.reset();
                    debugger;
                    this.postride.ridedate = new Date();
                    console.log("posted Ride Succesfully")
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

              } else {
                this.postRideStatus = true;
              }

            });

        } else {
          this.postRideStatus = true;
        }

      });



  }

}
