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
      link: '/contact',
      name: 'Contact',
      exact: true,
      admin: false
    },
    {
      link: '/movies',
      name: 'Movies',
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
      exact: true,
      admin: false
    },
    {
      link: '/bar',
      name: 'Bar',
      exact: true,
      admin: false
    },
    {
      link: '/admin',
      name: 'Admin',
      exact: true,
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
