import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navigation/home/home/home.component';
import { AboutComponent } from './institutional/about/about/about.component';
import { ContactComponent } from './institutional/contact/contact/contact.component';
import { RegisterComponent } from './demo/reactiveforms/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products',
          loadChildren: () => import('./demo/architecture-components/product.module')
          .then(m => m.ProductModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
