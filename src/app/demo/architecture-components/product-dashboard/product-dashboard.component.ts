import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html'
})
export class ProductDashboardComponent implements OnInit {

  products!: Product[]

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
}
