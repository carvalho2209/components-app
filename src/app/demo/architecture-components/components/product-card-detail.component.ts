import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "../Models/product";

@Component({
  selector: 'product-card-detail',
  templateUrl: './product-card-detail.component.html'
})

export class ProductDetailComponent {
  @Input()
  product!: Product;

  @Output()
  status: EventEmitter<any> = new EventEmitter();

  issueEvent() {
    this.status.emit(this.product);
  }
}
