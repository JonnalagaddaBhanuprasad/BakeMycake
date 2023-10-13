import { Component, OnInit } from '@angular/core';
import { Cake } from 'src/models/cake';
import { CAKES } from 'src/models/cakesdata';
import { CakesService } from '../services/cakes.service';
import { OrderrequestService } from '../services/orderrequest.service';
import { CakesRouterService } from '../services/cakes-router.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerRequest } from 'src/models/customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    submitStatus:any=false; 
    cake?: Cake;
    stars: Array<number> = [];
    cakeReq: CustomerRequest = {};
    // min:any;
    // mindate=new Date();

   
  
    constructor(private activatedRoute: ActivatedRoute, private builder: FormBuilder,
      private cakeService: CakesService,
      private customerRequestService: OrderrequestService,
      private routeService: CakesRouterService,
      private snackBar: MatSnackBar) { 
        // this. mindate.setDate(this. mindate.getDate() - 0)
      }
  

      orderForm = this.builder.group({
        customerName: ['',[Validators.pattern( /^[A-Za-z\s'-]{2,50}$/)]],
        customerEmail:['',Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
        customerPhone: ['',[Validators.pattern(/^[789]\d{9,9}$/)]],
        address: this.builder.group({
          street: ['',Validators.required],
          city: ['',[Validators.pattern( /^[A-Za-z\s'-]{2,50}$/)]],
          state: ['',[Validators.pattern( /^[A-Za-z\s'-]{2,50}$/)]],
          pinCode: ['',[Validators.pattern(/^[0-9]{5,6}$/)]],
         
        }),
        NoofItems:['',[Validators.pattern(/^[1-9]\d*$/)]],
        dateOfOrder:['',Validators.required]
        
        
      });
      
      get dateOfOrder(){return this.orderForm.get("dateOfOrder")}
      get NoofItems(){return this.orderForm.get('NoofItems')}
      get customerName(){return this.orderForm.get("customerName")}
      get customerEmail(){return this.orderForm.get("customerEmail")}
      get customerPhone(){return this.orderForm.get("customerPhone")}
      get street(){return this.orderForm.get('street')}
      get city(){return this.orderForm.get('city')}
      get state(){return this.orderForm.get('state')}
      get pinCode(){return this.orderForm.get('pinCode')}
  
      ngOnInit(): void {
            this.activatedRoute.paramMap.subscribe(param => {
                let id = param.get("id") ?? "";
                this.cakeService.getCake(id).subscribe(data => {
                    this.cake = data;
                    this.stars = new Array(this.cake.rating);
                    this.submitStatus = false;
                })
            })
        }
  
        cakeRequest() {
      if (this.cakeReq.TotalBill && this.cakeReq.NoofItems && this.cakeReq.customerName && this.cakeReq.customerEmail && this.cakeReq.dateOfOrder && this.cakeReq.street && this.cakeReq.city && this.cakeReq.state && this.cakeReq.pinCode) {
        if(this.cake){
        this.cakeReq.TotalBill = this.cake.price * this.cakeReq.NoofItems;
        }
          this.customerRequestService.saveOrderRequest(this.cakeReq).subscribe({
          next: data => {
              this.snackBar.open("Request Submitted,Your Order Will be delivered within a 1hr", "",{
              duration: 3000
              });
              this.submitStatus = true;
              this.routeService.toHome();
          },
          error: err => {
              alert(err);
          }
            
          });
        
      }
      }
     
      calculateTotalBill() {
        if (this.cakeReq.NoofItems && this.cake) {
          this.cakeReq.TotalBill = this.cakeReq.NoofItems * this.cake.price;
        } else {
          this.cakeReq.TotalBill = 0;
        }
      }
   
      canDeactivate() {
        if (!this.submitStatus)
            this.submitStatus = confirm("You have not submitted a order. Any details entered will be lost. Are you sure you want to leave?");
        return this.submitStatus;
      }
  }

