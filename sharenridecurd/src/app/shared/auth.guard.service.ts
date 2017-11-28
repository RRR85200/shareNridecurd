import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

        constructor(private router: Router) { }
        canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
                return this.checkUserActivated();
        }
        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
                return this.checkUserActivated();
        }
        private checkUserActivated(): boolean {
                if (!sessionStorage.getItem('currentuser')) {
                    this.router.navigate(['/home']);
               
        }else{
                
            return true;
        };
    }
        

}