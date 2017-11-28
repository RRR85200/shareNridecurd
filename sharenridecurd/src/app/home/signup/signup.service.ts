import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from '../../shared/user';

@Injectable()

export class SignUpservice{

    
    constructor(private http:Http){}


    addUser(info:User){
        
       return this.http.post("http://localhost/api/insertUser.php",info).map(res=>res);
     //   return this.http.post("http://localhost/practiceapi/registerapi.php",info).map(res=>res);
        
    }



}
