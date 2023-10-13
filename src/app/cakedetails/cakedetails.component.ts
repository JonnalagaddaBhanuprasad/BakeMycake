import { Component, ViewChild,OnInit} from '@angular/core';
import { OrderrequestService } from '../services/orderrequest.service';
import { CustomerRequest } from 'src/models/customer';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cakedetails',
  templateUrl: './cakedetails.component.html',
  styleUrls: ['./cakedetails.component.css']
})
export class CakedetailsComponent implements OnInit {
    
  displayedColumns: string[] = ['dateOfOrder', 'customerName', 'customerEmail', 'customerPhone','street','city','state','pinCode','NoofItems','TotalBill'];
  // 'orderName'
  customerRequests: CustomerRequest[] = [];
  dataSource!: MatTableDataSource<CustomerRequest>;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator)paginator!:MatPaginator

  constructor(private customerRequestService: OrderrequestService ) { }

  ngOnInit(): void {       

    this.customerRequestService. getAllOrderReqeusts().subscribe({

      next: data => {
        this.customerRequests = data;
        this.dataSource=new MatTableDataSource(this.customerRequests);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
        
      },
      error: err => {
        alert(err);
      }
    
    });
    
  }
  filtering($event: any) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}