import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FooterComponent } from "./footer/footer/footer.component";
import { HomeComponent } from "./home/home/home.component";
import { MenuComponent } from "./menu/menu/menu.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ],
  declarations: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
  ],
  exports: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
  ]
})

export class NavigationModule{}
