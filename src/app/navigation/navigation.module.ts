import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FooterComponent } from "./footer/footer/footer.component";
import { HomeComponent } from "./home/home/home.component";
import { MenuComponent } from "./menu/menu/menu.component";
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ],
  declarations: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  exports: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
  ]
})

export class NavigationModule{}
