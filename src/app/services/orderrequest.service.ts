import { Injectable } from '@angular/core';
import { CustomerRequest } from 'src/models/customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderrequestService {
   cust_URL: string = " http://localhost:3000/Orderdetail";
  constructor(private http: HttpClient) { }

  getAllOrderReqeusts() : Observable<Array<CustomerRequest>> {
    return this.http.get<Array<CustomerRequest>>(`${this.cust_URL}`);
  }

  saveOrderRequest(customerRequest? :CustomerRequest) : Observable<CustomerRequest> {
    return this.http.post<CustomerRequest>(`${this.cust_URL}`, customerRequest)
  }



}

