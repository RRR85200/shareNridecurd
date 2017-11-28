import { BrowserModule } from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {RouterModule } from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Http,Headers} from '@angular/http';
import { DriverHomeComponent} from './driver-home.component';
//import {DriverHomeRoutingModule} from './driver-home-routing.module';
import {CurrentRidesComponent} from './current-rides/current-rides.component';
import {DriverCustomRidesComponent} from './driver-custom-rides/driver-custom-rides.component';
import {DriverRideHistoryComponent} from './driver-ride-history/driver-ride-history.component';
import {PostRideComponent} from './post-ride/post-ride.component';
import {TopnavComponent} from '../shared/topnav/topnav.component';
//import { AvailableRidesComponent } from '../shared/available-rides/available-rides.component';
import {SharedModule} from '../shared/share.module';
import {DriverHomeRoutingModule} from './driver-home-routing.module';
// import {DriverRideHistoryComponent};
// import {PostRideComponent};
@NgModule({
    declarations:[     
      DriverHomeComponent,
        DriverCustomRidesComponent,
        PostRideComponent,
        CurrentRidesComponent,
        DriverRideHistoryComponent,
        
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CommonModule,
        RouterModule,
        DriverHomeRoutingModule,
        ReactiveFormsModule,
        SharedModule
        
      ],
      providers: [HttpModule]

})
export class DriverHomeModule{

}