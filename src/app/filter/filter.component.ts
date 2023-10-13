import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  filtering:string = '';

  ngOnInit(): void { };
  
  @Output()
  filterTextChanged:EventEmitter<any> = new EventEmitter<any>();

  filterMethod(){
    console.log('filterComponent method');
    this.filterTextChanged.emit(this.filtering);
    console.log('filterComponent method after');
  }
}
