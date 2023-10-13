import { Component } from '@angular/core';
import { Cake } from 'src/models/cake';
import { CAKES } from 'src/models/cakesdata';
import { CakesService } from '../services/cakes.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  title:string="Just Bake Cake "
  cakes: Array<Cake> = [];
  
  constructor(private cakeService:  CakesService) { }

  ngOnInit(): void {
    this.cakeService.getAllCakes().subscribe({
      next: data => {
        this.cakes = data;
      },
      error: err => {
        alert(err);
      }
    });
    this.cakeService.getAllCakes().subscribe({
      next: data => {
        this.cakes = data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    });
     
  }
   filterCake($event:any){
          this.cakeService.getAllCakes().subscribe({
            next:(data) => {
              if($event.trim()!=='')
              {
                this.cakes = data.filter(cake=>cake.category?.toLowerCase().includes($event.toLowerCase()));
        
              }
              else
              {
                this.cakes = data;
              }
            },
            error:(err) => {
              alert(err);
            }
          });
     
          }
         
      
    
}
