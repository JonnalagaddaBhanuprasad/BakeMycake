import { RouterStateSnapshot, UrlTree,ActivatedRouteSnapshot, CanActivate } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { CakesRouterService } from './cakes-router.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private authService: AuthService, 
    private routeService: CakesRouterService){}

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authService.isLoggedIn){
          this.routeService.toLogin();
          return false;
      }
      else
          return true;
  }
}