import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [DashboardComponent, MenuComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
