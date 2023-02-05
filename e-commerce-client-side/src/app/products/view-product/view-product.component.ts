import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

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
    private api: ApiService
  ) {}
  ngOnInit(): void {
    // fetch path parameter from url
    this.activatedRoute.params.subscribe((data: any) => {
      console.log(data['id']);
      this.productId = data['id'];
    });
    // to get detailes of requested product
    this.api.viewProduct(this.productId).subscribe((result: any) => {
      console.log(result.product);
      this.viewProduct = result.product;
    });
  }
}
