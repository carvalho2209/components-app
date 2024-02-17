import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  nav: Nav[] = [
    {
      link: '/home',
      name: 'Home',
      exact: true,
      admin: false
    },
    {
      link: '/about',
      name: 'About',
      exact: true,
      admin: false
    },
    {
      link: '/register',
      name: 'Register',
      exact: true,
      admin: false
    },
    {
      link: '/products',
      name: 'Products',
      exact: false,
      admin: false
    },
    {
      link: '/admin',
      name: 'Admin',
      exact: false,
      admin: false
    },
  ];
}


interface Nav {
  link: string,
  name: string,
  exact: boolean,
  admin: boolean
}
