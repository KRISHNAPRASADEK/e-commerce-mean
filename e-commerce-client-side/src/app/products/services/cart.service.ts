import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // to hold products added to the cart
  cartItemList = new BehaviorSubject([]);
  cartItemArray: any = [];
  constructor() {}

  addToCart(product: any) {
    this.cartItemArray.push(product);
    this.cartItemList.next(this.cartItemArray);
    this.grantTotal();
  }

  grantTotal() {
    let total = 0;
    this.cartItemArray.map((product: any) => {
      total += product.price;
    });
    return total;
  }

  removeCartItem(product: any) {
    this.cartItemArray.map((item: any, index: any) => {
      if (product.id == item.id) {
        this.cartItemArray.splice(index, 1);
        this.cartItemList.next(this.cartItemArray);
      }
    });
  }
  emptyCart() {
    this.cartItemArray = [];
    this.cartItemList.next(this.cartItemArray);
  }
}
