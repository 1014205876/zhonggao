import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import status from '../state';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  constructor(private auth:AuthService,private route:Router){}
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.getAuthorization(status.cookieName)){
      return true;
    }
    this.route.navigate(['/login']);
    return false;
  }
}
