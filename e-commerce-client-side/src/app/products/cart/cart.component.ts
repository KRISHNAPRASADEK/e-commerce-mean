import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  cartTotal: number = 0;
  constructor(private cart: CartService) {}
  ngOnInit(): void {
    this.cart.cartItemList.subscribe((data: any) => {
      this.cartItems = data;
    });
    let total = this.cart.grantTotal();
    this.cartTotal = Number(total.toFixed(2));
  }
  removeItem(product: any) {
    this.cart.removeCartItem(product);
    let total = this.cart.grantTotal();
    this.cartTotal = Number(total.toFixed(2));
  }
  emptyCart() {
    this.cart.emptyCart();
  }
}
