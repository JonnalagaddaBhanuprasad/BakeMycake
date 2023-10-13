import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CakesService } from '../services/cakes.service';
import { CakesRouterService } from '../services/cakes-router.service';
import { Cake } from 'src/models/cake';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent {
  constructor(private activatedRoute: ActivatedRoute, 
    private CakesService: CakesService,private cakesRouter: CakesRouterService) { 
  }
  ngOnInit(): void {
    // code to read value of route parameter `id` and use it to fetch the corresponding image
  }
  @Input()
  cake!: Cake;

}
