import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductDashboardComponent } from "./product-dashboard/product-dashboard.component";
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductAppComponent } from "./product.app.component";
import { ProductsResolve } from "./services/product.resolve";

const productRouterConfig: Routes = [
  {
    path: '', component: ProductAppComponent,
    children: [
      //{ path: '', redirectTo: 'all' },
      {
        path: ':state', component: ProductDashboardComponent,
        resolve: ProductsResolve
      },
      { path: 'edit/:id', component: EditProductComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(productRouterConfig)
  ],
  exports:[RouterModule]
})

export class ProductRoutingModule{}
