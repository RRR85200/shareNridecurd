import{ NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';


// import {SignupComponent} from'./home/signup/signup.component';

const appRoutes:Routes=[
    {path:'home',component:HomeComponent},
    {path:'',redirectTo:'/home', pathMatch:'full'}
    // {path:'**',component:HomeComponent, pathMatch:'full'}
  
];

@NgModule({
   
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule],
    
})

export class AppRoutingModule {}