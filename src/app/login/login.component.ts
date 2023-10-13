import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CakesRouterService } from '../services/cakes-router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    
  adminPassword:string="";
  // constructor() { }
  constructor(private authService: AuthService, private routeService: CakesRouterService) { }

  ngOnInit(): void {
  }
  
  validateAdmin() {
    this.authService.login(this.adminPassword);
    if(this.authService.isLoggedIn) {
        this.routeService.navigateToCustomerRequestsView();
    }
}

}