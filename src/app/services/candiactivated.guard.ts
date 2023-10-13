import { CanDeactivate, CanDeactivateFn } from '@angular/router';

import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderComponent } from '../order/order.component';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class canDeactivateGuard implements CanDeactivate<OrderComponent>{
  canDeactivate(
    component: OrderComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate ? component.canDeactivate() :  true;
  }

}