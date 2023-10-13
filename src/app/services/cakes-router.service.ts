import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CakesRouterService {
  navigateToHome() {
    throw new Error('Method not implemented.');
  }
  constructor(private routerService: Router) { }

  toHome() {
    this.routerService.navigate([""]);
  }
  
  navigateToCustomerRequestsView() {
    this.routerService.navigate(["cakedetails"]);
  }
  
  toLogin() {
    this.routerService.navigate(["login"]);
  }
}
