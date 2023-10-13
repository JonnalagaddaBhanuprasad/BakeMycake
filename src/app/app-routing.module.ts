import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CakesComponent } from './cakes/cakes.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { canDeactivateGuard } from './services/candiactivated.guard';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  // {path: "", redirectTo: "/login", pathMatch: "full" },
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"cakedetails",component:CakedetailsComponent,canActivate:[AuthGuard] },
  // c
  {path:"home",component:HomeComponent},
  {path:"cakes/:id",component:CakesComponent },
  {path:"cakedetails",component:CakedetailsComponent},
  {path:"order/:id",component:OrderComponent, canDeactivate:[canDeactivateGuard]}, 
  // 
  {path: "**", component: PageNotFoundComponent }  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
