import { Product } from '../Models/product';

export class ProductService {
  products: Product[];

  constructor() {

    this.products = [{
      id: 1,
      name: 'Test',
      active: true,
      amount: 100,
      image: 'celular.jpg'
    },
    {
      id: 2,
      name: 'Test 2',
      active: true,
      amount: 200,
      image: 'gopro.jpg'
    },
    {
      id: 3,
      name: 'Test 3',
      active: true,
      amount: 300,
      image: 'laptop.jpg'
    },
    {
      id: 4,
      name: 'Test 4',
      active: true,
      amount: 400,
      image: 'mouse.jpg'
    },
    {
      id: 5,
      name: 'Test 5',
      active: true,
      amount: 500,
      image: 'teclado.jpg'
    },
    {
      id: 6,
      name: 'Test 6',
      active: false,
      amount: 600,
      image: 'headset.jpg'
    }];
  }

  getAll(state: string): Product[] {

    if (state === 'actives') {
      return this.products.filter(prod => prod.active);
    }

    return this.products;
  }

  getProductById(productId: number): Product | undefined {
    return this.products.find(p => p.id == productId);
  }
}
