import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Product } from '../Models/product';
import { Observable, fromEvent } from 'rxjs';
import { ProductCountComponent } from '../components/product-count.component';
import { ProductDetailComponent } from '../components/product-card-detail.component';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html'
})
export class ProductDashboardComponent implements OnInit, AfterViewInit {

  products!: Product[]

  @ViewChild(ProductCountComponent, { static: false }) count!: ProductCountComponent;
  @ViewChild('test', { static: false }) message!: ElementRef;

  @ViewChildren(ProductDetailComponent) botton!: QueryList<ProductDetailComponent>

  constructor() { }

  ngOnInit(): void {
    this.products = [{
      id: 1,
      name: 'test',
      active: true,
      amount: 100,
      image: 'celular.jpg'
    },
    {
      id: 2,
      name: 'Teste 2',
      active: true,
      amount: 200,
      image: 'gopro.jpg'
    },
    {
      id: 3,
      name: 'Teste 3',
      active: true,
      amount: 300,
      image: 'laptop.jpg'
    },
    {
      id: 4,
      name: 'Teste 4',
      active: true,
      amount: 400,
      image: 'mouse.jpg'
    },
    {
      id: 5,
      name: 'Teste 5',
      active: true,
      amount: 500,
      image: 'teclado.jpg'
    },
    {
      id: 6,
      name: 'Teste 6',
      active: false,
      amount: 600,
      image: 'headset.jpg'
    }]
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
