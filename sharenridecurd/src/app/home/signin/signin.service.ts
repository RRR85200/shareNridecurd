import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs';
import 'rxjs/add/operator/map';
import {User} from '../../shared/user';
import { Observable } from 'rxjs/Observable';
import { sessionService } from '../../shared/session.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class SignInService{

    userDetails=new User();
    isloggedIn:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
    constructor(private http:Http){}


    getUser(info:User){
        console.log(info);
        console.log(info);        
        let header=new Headers({'Content-Type': 'application/json','Accept':'application/json'});
        return this.http.post("http://localhost/practiceapi/loginapi.php",info, 
        {headers: header}
        )
        .map(response=>response);
    
    }
    public isLogedIn(){
       
           if(sessionStorage.getItem('currentuser')){
            this.isloggedIn.next(true);
            console.log(true);
            }
           else{
               this.isloggedIn.next(false);
               console.log('hi false');
               }
    }



}
