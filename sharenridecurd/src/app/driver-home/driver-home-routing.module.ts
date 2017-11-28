import { NgModule }       from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
//import { SignUpservice } from '../home/signup/signup.service';
//import { HttpModule } from '@angular/http';
//import { SigninComponent } from '../home/signin/signin.component';
//import { SignInService } from '../home/signin/signin.service';

import { DriverHomeComponent } from '../driver-home/driver-home.component';
import {CurrentRidesComponent} from '../driver-home/current-rides/current-rides.component';
import {DriverCustomRidesComponent} from '../driver-home/driver-custom-rides/driver-custom-rides.component';
import {DriverRideHistoryComponent} from  '../driver-home/driver-ride-history/driver-ride-history.component';
import {PostRideComponent} from '../driver-home/post-ride/post-ride.component';
//import {HomeRoutingModule} from './home/home.routes';
import { TopnavComponent } from '../shared/topnav/topnav.component';
import { AvailableRidesComponent } from '../shared/available-rides/available-rides.component';
import {HowItWorksComponent} from '../shared/topnav/how-it-works/how-it-works.component';
import { AboutUsComponent } from '../shared/topnav/about-us/about-us.component';
import { BenifitsComponent } from '../shared/topnav/benifits/benifits.component';

 
const driverHomeRouting:Routes=[
    {
      path: 'driver-home',
      component: DriverHomeComponent,
      children: [
        {path:'',redirectTo:'available-rides',pathMatch:'full'},
        {
          path: 'driver-ride-history',
          component: DriverRideHistoryComponent           
        },
        {
          path: 'post-ride',
          component: PostRideComponent
        },
        {
            path: 'current-rides',
            component: CurrentRidesComponent
        },
        {
            path: 'driver-custom',
            component: DriverCustomRidesComponent
        },
        {
            path: 'available-rides',
            component: AvailableRidesComponent
        },
        {
          path: 'About-us',
          component: AboutUsComponent
        },
        {
            path: 'Benifits',
            component: BenifitsComponent
        },
        {
            path: 'how-it-works',
            component: HowItWorksComponent
        },
        {
            path: 'driver-home',
            component: DriverHomeComponent
          }
               
      ]
    },
  
  ];
@NgModule({
 
  imports: [
  RouterModule.forChild(driverHomeRouting)    
  ],
 exports:[RouterModule]
  
})
export class DriverHomeRoutingModule { }
