import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
today=new Date();

  user = new User();
  successMsg: string;
  status: string;
  statuscar: string;
  statusUpdateCar:string;
  public car = new Car;
  userCar: Car = new Car;
  hasCar: boolean = false;
  public currentUserID: any;
  postRideForm: FormGroup;
  carDetails: FormGroup;
  updateCar:FormGroup;
  useCar:Car;
  isUpdateCar:boolean=true;
  constructor(private http: Http) {

  }

  ngOnInit() {
    //   this.destinations=['UCM main campus','Lee summit Campus','Walmart warrensburg','Sedali','Kansas City','Overland Park','Olathe','Independence','Shawnee',
    //   'KCI Airport','Kansas Zoo Area','Lone Jack','Centerview','Knob Knoster','Bristle Ridge','Post Oak','Lions Lake',
    //  'Dallas','Chicago'];
    this.user = JSON.parse(sessionStorage.getItem("currentuser"));
    this.currentUserID = this.user['user_id'];
    this.getUserCar(this.currentUserID);
    this.campuses = ['UCM main campus', 'Lee summit Campus'];
    this.carDetails = new FormGroup({
      'model': new FormControl('', Validators.required),
      'year': new FormControl('', Validators.required),
      'company': new FormControl('', Validators.required),
      'vehicleNum': new FormControl('', Validators.required),
      'seats': new FormControl('', Validators.required)

    });
    this.updateCar=new FormGroup({
  
        'model': new FormControl(this.userCar.model, Validators.required),
        'year': new FormControl(this.userCar.year, Validators.required),
        'company': new FormControl(this.userCar.company, Validators.required),
        'vehicleNum': new FormControl(this.userCar.vehicle_num, Validators.required),
        'seats': new FormControl(this.userCar.seats, Validators.required)  

    });
    /////////////////////
    this.postRideForm = new FormGroup({
      'origin': new FormControl('UCM main campus', Validators.required),
      'destination': new FormControl('Lee summit Campus', Validators.required),
      'seats': new FormControl('', Validators.required),
      'date': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required)
    });
    this.user = JSON.parse(sessionStorage.getItem("currentuser"));
    console.log("USer identified from session" + this.user);
    
    ///////
    this.car.user_id = this.user['user_id'];
    ////////
    
    ////
    this.useCar=JSON.parse(sessionStorage.getItem("userCar"));
 


  }
 public  editCar(){
   this.isUpdateCar=false;
   document.getElementById("showcardetails").style.display="none";
 }
  public UpdateCar(){
    console.log(this.userCar);
    debugger;
    this.http.post("http://localhost/practiceapi/updateCarapi.php", JSON.stringify(this.userCar))
    .subscribe(result => {
      
      console.log("updated Car Succesfully");
      this.getUserCar(this.currentUserID);
      this.successMsg = JSON.parse(result['_body']).message;
      this.statusUpdateCar = JSON.parse(result['_body']).status;
      document.getElementById("showcardetails").style.display="block";
      this.isUpdateCar=true;
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
    this.http.post("http://localhost/practiceapi/inserCar.php", JSON.stringify(this.car))
      .subscribe(result => {
        this.carDetails.reset();
        console.log("posted Ride Succesfully");
        this.successMsg = JSON.parse(result['_body']).message;
        this.statuscar = JSON.parse(result['_body']).status;
        // alert(JSON.parse(result['_body']).message);
        if (this.statuscar === 'success') {
          this.successMsg = JSON.parse(result['_body']).message;
          this.hasCar=true;
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
    this.postride.carNumber=this.userCar.vehicle_num;
    this.postride.carModel=this.userCar.model;
    console.log(JSON.stringify(this.postride));

    // this.headers = new Headers();
    //this.headers.append('Content-Type', 'application/json');
    // this.http.post("http://localhost/practiceapi/postrideapi.php",this.postride).map(res=>
    // { if (res){
    //   console.log(res);
    // }
    this.http.post("http://localhost/practiceapi/postrideapi.php", JSON.stringify(this.postride))
      .subscribe(result => {
        this.postRideForm.reset();debugger;
        console.log("posted Ride Succesfully");
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
