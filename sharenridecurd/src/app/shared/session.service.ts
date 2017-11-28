import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http} from '@angular/http'
import { Router } from '@angular/router';

@Injectable()
export class  sessionService{

    constructor(){

    }

    public getIsInSession():Observable<boolean>{
        if(sessionStorage.getItem('currentuser')){
      return Observable.create(observer=>{
            observer.next(true);
        })
    }
    else{
        return Observable.create(observer=>{
            observer.next(false);

        });
    }
}



}