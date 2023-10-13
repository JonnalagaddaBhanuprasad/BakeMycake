export type CustomerRequest={
    SNo?: string;
    orderName?: string;
    dateOfOrder?: Date;
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    street?:string;
    city?:string;
    state?:string;
    pinCode?:string;
    NoofItems?:number;
    TotalBill?:number;

}