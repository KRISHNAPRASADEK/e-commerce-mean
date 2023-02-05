import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    ProductsComponent,
    AllProductsComponent,
    CartComponent,
    WishListComponent,
    ViewProductComponent,
    FilterPipe,
  ],
  imports: [CommonModule, ProductsRoutingModule, HttpClientModule],
})
export class ProductsModule {}
