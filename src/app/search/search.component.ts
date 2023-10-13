import { Component, EventEmitter, Output } from '@angular/core';
import { CakesService } from '../services/cakes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = "";

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {}
                                            
  search() {    
    this.searchTextChanged.emit(this.searchText);
  }
}
