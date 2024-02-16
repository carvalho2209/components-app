import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductDashboardComponent } from "./product-dashboard/product-dashboard.component";
import { ProductDetailComponent } from "./components/product-card-detail.component";

import { ProductRoutingModule } from "./product.route";
import { ProductCountComponent } from "./components/product-count.component";
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductAppComponent } from "./product.app.component";
import { ProductService } from "./services/product.service";


@NgModule({
  declarations: [
    ProductAppComponent,
    ProductDashboardComponent,
    ProductDetailComponent,
    ProductCountComponent,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [],
  providers: [
    ProductService
  ]
})

export class ProductModule{}
