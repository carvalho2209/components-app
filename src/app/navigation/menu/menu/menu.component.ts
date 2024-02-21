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
      exact: false,
      admin: false
    },
    {
      link: '/movies',
      name: 'Movies',
      exact: false,
      admin: false
    },
    {
      link: '/register',
      name: 'Register',
      exact: false,
      admin: false
    },
    {
      link: '/products',
      name: 'Products',
      exact: false,
      admin: false
    },
    {
      link: '/bar',
      name: 'Bar',
      exact: false,
      admin: false
    },
    {
      link: '/todo',
      name: 'To Do',
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
