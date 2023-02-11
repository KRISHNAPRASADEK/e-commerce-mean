import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  grantTotal: number = 0;
  discount: number = 0;
  discountTotal: number = 0;
  checkoutMsg: string = '';
  constructor(private cart: CartService, private router: Router) {}
  ngOnInit(): void {
    this.cart.cartItemList.subscribe((data: any) => {
      this.cartItems = data;
    });
    let total = this.cart.grantTotal();
    this.grantTotal = Number(total.toFixed(2));
    this.discountTotal = this.grantTotal;
  }
  removeItem(product: any) {
    this.cart.removeCartItem(product);
    let total = this.cart.grantTotal();
    this.grantTotal = Number(total.toFixed(2));
  }
  emptyCart() {
    this.cart.emptyCart();
  }
  discount3percent() {
    this.discount = this.grantTotal * 0.03;
    this.discountTotal -= this.discount;
  }
  discount10percent() {
    this.discount = this.grantTotal * 0.1;
    this.discountTotal -= this.discount;
  }
  discount50percent() {
    this.discount = this.grantTotal * 0.5;
    this.discountTotal -= this.discount;
  }

  checkout() {
    this.checkoutMsg = 'Successfully placed your order, Thank You';

    setTimeout(() => {
      this.emptyCart();
      window.location.reload();
    }, 3000);
  }
}
