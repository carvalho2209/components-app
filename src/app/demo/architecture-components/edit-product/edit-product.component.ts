import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../Models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html'
})

export class EditProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  product: Product | undefined;

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.product = this.productService.getProductById(params['id']);
      });
  }

  save() {
    throw new Error('Method not implemented.');
  }
}
