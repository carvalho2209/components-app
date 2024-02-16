import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../Models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html'
})

export class EditProductComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router) { }

  product: Product | undefined;

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.product = this.productService.getProductById(params['id']);
      });
  }

  save() {
    this.router.navigate(['/products']);
  }
}
