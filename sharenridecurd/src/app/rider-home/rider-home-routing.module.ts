import { NgModule }       from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
//import { SignUpservice } from '../home/signup/signup.service';
//import { HttpModule } from '@angular/http';
//import { SigninComponent } from '../home/signin/signin.component';
//import { SignInService } from '../home/signin/signin.service';

import { RiderHomeComponent } from '../rider-home/rider-home.component';

import {RequestCostumRideComponent} from './request-costum-ride/request-costum-ride.component';
import {RiderCurrentRidesComponent} from './rider-current-rides/rider-current-rides.component';
import {RiderRideHistoryComponent} from './rider-ride-history/rider-ride-history.component';
//import {HomeRoutingModule} from './home/home.routes';
import { TopnavComponent } from '../shared/topnav/topnav.component';
import { AvailableRidesComponent } from '../shared/available-rides/available-rides.component';

 
const riderHomeRouting:Routes=[
    {
      path: 'rider-home',
      component: RiderHomeComponent,
      children: [
        {path:'',redirectTo:'available-rides',pathMatch:'full'},
        {
          path: 'rider-ride-history',
          component: RiderRideHistoryComponent           
        },
        {
          path: 'request-ride',
          component: RequestCostumRideComponent,
        },
        {
            path: 'rider-current-rides',
            component: RiderCurrentRidesComponent
        },
        
        {
            path: 'available-rides',
            component: AvailableRidesComponent
        }
        
      ]
    }
  ];
@NgModule({
 
  imports: [
  RouterModule.forChild(riderHomeRouting)    
  ],
 exports:[RouterModule]
  
})
export class RiderHomeRoutingModule { }
