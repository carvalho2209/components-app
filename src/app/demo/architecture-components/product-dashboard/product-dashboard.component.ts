import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Product } from '../Models/product';
import { Observable, fromEvent, map, of } from 'rxjs';
import { ProductCountComponent } from '../components/product-count.component';
import { ProductDetailComponent } from '../components/product-card-detail.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html'
})
export class ProductDashboardComponent implements OnInit, AfterViewInit {

  products!: Product[]

  @ViewChild(ProductCountComponent, { static: false }) count!: ProductCountComponent;
  @ViewChild('test', { static: false }) message!: ElementRef;

  @ViewChildren(ProductDetailComponent) botton!: QueryList<ProductDetailComponent>

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ data }) => { this.products = data; });
    //this.route.params.subscribe(params => {this.products = this.productService.getAll(params['state']);});
  }

  ngAfterViewInit(): void {

    console.log('object from counter: ', this.count.product);

    console.log(this.botton);
    this.botton.forEach(p => {
      console.log(p.product);
    });

    let clickText: Observable<any> = fromEvent(this.message.nativeElement, 'click');
    clickText.subscribe(() => {
      alert('clicked on text!');
      return;
    });
  }

  changeStatus(event: Product) {
    event.active = !event.active;
  }
}
