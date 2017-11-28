import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
//import {HomeRoutingModule} from './home.routes';
import {SigninComponent} from './signin/signin.component';
import {SignInService} from './signin/signin.service';
import {SignupComponent} from './signup/signup.component';
import {SignUpservice} from './signup/signup.service';
//import {DriverHomeModule} from './driver-home/driver-home.module';
import {HomeComponent} from './home.component';
import {TopnavComponent} from '../shared/topnav/topnav.component';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import {CurrentRidesComponent} from './driver-home/current-rides/current-rides.component';
// import {DriverCustomRidesComponent} from './driver-home/driver-custom-rides/driver-custom-rides.component';
// import {DriverRideHistoryComponent} from  './driver-home/driver-ride-history/driver-ride-history.component';
// import {PostRideComponent} from './driver-home/post-ride/post-ride.component';
// import { AvailableRidesComponent } from './../shared/available-rides/available-rides.component';
// import {DriverHomeComponent} from '../home/driver-home/driver-home.component';

@NgModule({
    declarations: [
      HomeComponent,
      SigninComponent,
      SignupComponent,TopnavComponent,
    ],
    imports: [
        FormsModule,BrowserModule
    ],
    providers: [
        SignInService,SignUpservice
    ]
  })
export class HomeModule{

}