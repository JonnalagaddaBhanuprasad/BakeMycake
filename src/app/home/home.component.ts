import { Component } from '@angular/core';
import { Cake } from 'src/models/cake';
import { CakesService } from '../services/cakes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
    
    onSearchTextChanged(searchText: string) {
      this.cakeService.getAllCakes().subscribe({
        next: data => {
          if (searchText || searchText !== '') {
          // this.cakes = data.filter(cake => cake.category="Cup");
            this.cakes = data.filter(cake => cake.name?.toLowerCase().includes(searchText.toLowerCase()));
          }
          else
            this.cakes = data;
        },
        error: e => {
          alert("Network Error !! Please Try Again Later");
        }
      })
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
    
    
 
  

