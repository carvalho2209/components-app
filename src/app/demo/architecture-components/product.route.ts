import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductDashboardComponent } from "./product-dashboard/product-dashboard.component";

const productRouterConfig: Routes = [
  { path: '', component: ProductDashboardComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(productRouterConfig)
  ],
  exports:[RouterModule]
})

export class ProductRoutingModule{}
