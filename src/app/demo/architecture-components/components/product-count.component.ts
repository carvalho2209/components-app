import { Component, Input } from "@angular/core";
import { Product } from "../Models/product";

@Component({
  selector: 'product-count',
  templateUrl: './product-count.component.html'
})

export class ProductCountComponent {

 @Input()
  product!: Product[];

  countActives(): number {
    return this.product.filter((products: Product) => products.active).length
  }
}
