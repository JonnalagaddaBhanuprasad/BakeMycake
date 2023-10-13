import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MatFormField } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { OrderComponent } from './order/order.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {LayoutModule} from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { CakesComponent } from './cakes/cakes.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './filter/filter.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

// import { FontAwesomeModule}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavBarComponent,
    LoginComponent,
    CakesComponent,
    HomeComponent,
    SearchComponent,
    CakedetailsComponent,
    OrderComponent,
    FooterComponent,
    FilterComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    LayoutModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,  
    HttpClientModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatTableModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
