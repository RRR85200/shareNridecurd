import { BrowserModule } from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {RouterModule } from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/share.module';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Http,Headers} from '@angular/http';
import { RiderHomeComponent} from './rider-home.component';
//import {DriverHomeRoutingModule} from './driver-home-routing.module';
import {RequestCostumRideComponent} from './request-costum-ride/request-costum-ride.component';
import {RiderCurrentRidesComponent} from './rider-current-rides/rider-current-rides.component';
import {RiderHomeRoutingModule} from './rider-home-routing.module';
import {RiderRideHistoryComponent} from  './rider-ride-history/rider-ride-history.component';
import {TopnavComponent} from '../shared/topnav/topnav.component';
//import { AvailableRidesComponent } from '../shared/available-rides/available-rides.component';


// import {DriverRideHistoryComponent};
// import {PostRideComponent};
@NgModule({
    declarations:[
      RiderCurrentRidesComponent,RiderHomeComponent,RiderRideHistoryComponent,RequestCostumRideComponent
        
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CommonModule,
        RouterModule,
        RiderHomeRoutingModule,
        ReactiveFormsModule,
        SharedModule
        
      ],
      providers: [HttpModule]

})
export class RiderHomeModule{

}