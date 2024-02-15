import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductDashboardComponent } from "./product-dashboard/product-dashboard.component";
import { ProductDetailComponent } from "./components/product-card-detail.component";

import { ProductRoutingModule } from "./product.route";
import { ProductCountComponent } from "./components/product-count.component";

@NgModule({
  declarations: [
    ProductDashboardComponent,
    ProductDetailComponent,
    ProductCountComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: []
})

export class ProductModule{}
