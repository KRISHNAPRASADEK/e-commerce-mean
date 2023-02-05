import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // to hold search key from header component
  searchKey = new BehaviorSubject('');
  constructor(private http: HttpClient) {}

  //all products api
  getAllProducts() {
    return this.http.get('http://localhost:3000/all-products');
  }

  //view products api
  viewProduct(productId: any) {
    return this.http.get('http://localhost:3000/view-product/' + productId);
  }
}
