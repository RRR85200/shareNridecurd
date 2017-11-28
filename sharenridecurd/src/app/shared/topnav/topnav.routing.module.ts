import { NgModule }       from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes,CanActivate} from '@angular/router';
//import { SignUpservice } from '../home/signup/signup.service';
//import { HttpModule } from '@angular/http';
//import { SigninComponent } from '../home/signin/signin.component';
//import { SignInService } from '../home/signin/signin.service';


import { AvailableRidesComponent } from '../available-rides/available-rides.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {BenifitsComponent} from './benifits/benifits.component';
import {HowItWorksComponent} from './how-it-works/how-it-works.component';
import { DriverHomeComponent } from '../../driver-home/driver-home.component';
import {AuthGuard} from '../auth.guard.service';


 
const topnavHomeRouting:Routes=[ 
       
        
        
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
            path: 'driver-home/About-us',
            component: AboutUsComponent
          },
        
      
    
  ];
@NgModule({
 
  imports: [
  RouterModule.forChild(topnavHomeRouting)    
  ],
 exports:[RouterModule],
 providers:[AuthGuard]
  
})
export class TopNavRoutingModule { }
