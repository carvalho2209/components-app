import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminRoutingModele } from "./admin.route";

@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModele
  ],
  providers: [],
  exports:[]
})

export class AdminModule{}
