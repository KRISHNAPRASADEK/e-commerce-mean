import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  productId: any;
  viewProduct: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private cart: CartService
  ) {}
  ngOnInit(): void {
    // fetch path parameter from url
    this.activatedRoute.params.subscribe((data: any) => {
      console.log(data['id']);
      this.productId = data['id'];
    });
    // to get detailes of requested product
    this.api.viewProduct(this.productId).subscribe((result: any) => {
      this.viewProduct = result.product;
    });
  }

  addToWishList(product: any) {
    this.api.addToWishList(product).subscribe(
      (result: any) => {
        alert(result.message);
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
