import { Component, Input, input } from "@angular/core";
import { Product } from "../Models/product";

@Component({
  selector: 'product-card-detail',
  templateUrl: './product-card-detail.component.html'
})

export class ProductDetailComponent{
  @Input()
  product!: Product;
}
