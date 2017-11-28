
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {RouterModule } from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms';
import{TopnavComponent} from './topnav/topnav.component';
import {AvailableRidesComponent} from '../shared/available-rides/available-rides.component';
import {User} from './user';
import { HowItWorksComponent } from './topnav/how-it-works/how-it-works.component';
import { BenifitsComponent } from './topnav/benifits/benifits.component';
import { AboutUsComponent } from './topnav/about-us/about-us.component';
import {TopNavRoutingModule} from './topnav/topnav.routing.module';
import {sessionService} from './session.service';
import {SignInService} from '../home/signin/signin.service';
@NgModule({
    declarations:[
      AvailableRidesComponent,TopnavComponent, HowItWorksComponent, BenifitsComponent, AboutUsComponent
    ],
    imports: [   
      BrowserModule,CommonModule,ReactiveFormsModule,
      TopNavRoutingModule,FormsModule
    ],
    exports:[AvailableRidesComponent,TopnavComponent,
      TopNavRoutingModule
    ],
    providers: [
      sessionService,SignInService
        
    ]
  })





export class SharedModule{

  }