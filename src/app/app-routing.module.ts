import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navigation/home/home/home.component';
import { AboutComponent } from './institutional/about/about/about.component';
import { ContactComponent } from './institutional/contact/contact/contact.component';
import { RegisterComponent } from './demo/reactiveforms/register/register.component';
import { NotFoundComponent } from './navigation/not-found/not-found.component';
import { AuthGuard } from './services/app.guard';
import { RegisterGuard } from './services/register.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'register', component: RegisterComponent,
    canDeactivate: [
      RegisterGuard
    ]
  },
  {
    path: 'products',
    loadChildren: () => import('./demo/architecture-components/product.module')
      .then(m => m.ProductModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },


  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
