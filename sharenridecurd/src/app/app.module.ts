import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SignupComponent } from './home/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms'
import {Http,Headers} from '@angular/http';
import { SignUpservice } from './home/signup/signup.service';
import { HttpModule } from '@angular/http';
import { SigninComponent } from './home/signin/signin.component';
import { SignInService } from './home/signin/signin.service';
import { RiderHomeComponent } from './rider-home/rider-home.component';
import { DriverHomeComponent } from './driver-home/driver-home.component';
//import {HomeRoutingModule} from './home/home.routes';
import { TopnavComponent } from './shared/topnav/topnav.component';
import { AvailableRidesComponent } from './shared/available-rides/available-rides.component';
import {DriverHomeModule} from './driver-home/driver-home.module';
//import { RiderRideHistoryComponent } from './rider-home/rider-ride-history/rider-ride-history.component';
import {RiderHomeModule} from './rider-home/rider-home.module';
import {SharedModule} from './shared/share.module';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,    
    SigninComponent,
    //RiderHomeComponent, DriverHomeComponent, TopnavComponent, 
    //AvailableRidesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    DriverHomeModule,RiderHomeModule,
    SharedModule
    //HomeRoutingModule
    
  ],
  providers: [SignUpservice,SignInService,HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
