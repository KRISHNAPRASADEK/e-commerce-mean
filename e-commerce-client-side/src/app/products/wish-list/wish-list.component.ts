import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent implements OnInit {
  wishListProduct: any;
  wishListStatus = '';
  constructor(private api: ApiService, private cart: CartService) {}

  ngOnInit(): void {
    // to get wishlist  product
    this.api.getWishList().subscribe((result: any) => {
      console.log(result.wishlist);
      this.wishListProduct = result.wishlist;
      if (this.wishListProduct.length == 0) {
        this.wishListStatus = 'wishlist empty';
      }
    }),
      (result: any) => {
        console.log('error message');
        if (result.error.message) {
          this.wishListStatus = 'wishlist empty';
        }
      };
  }
  removeItem(productId: any) {
    this.api.removeItemFromWishlist(productId).subscribe(
      (result: any) => {
        this.wishListProduct = result.wishlist;
        if (this.wishListProduct.length == 0) {
          this.wishListStatus = 'wishlist empty';
        }
      },
      (result: any) => {
        alert(result.error.message);
      }
    );
  }

  addToCart(product: any) {
    this.cart.addToCart(product);
  }
}
