import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cake } from 'src/models/cake';

@Injectable({
  providedIn: 'root'
})
export class CakesService {
  URL:string= "http://localhost:3000/cake";
  constructor(private http: HttpClient) { }

  getAllCakes():Observable<Array<Cake>>{
    return this.http.get<Array<Cake>>(this.URL);
  }
 
  getCake(id?: string) : Observable<Cake> {
    return this.http.get<Cake>(`${this.URL}/${id}`);
  }

} 