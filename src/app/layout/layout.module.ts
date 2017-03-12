import { LayoutComponent } from './layout.component';
import { ChartsModule } from './../charts/charts.module';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { CardsComponent } from './../cards/cards.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ChartsModule
  ],
  declarations: [
    CardsComponent,
    DashboardComponent,
    LayoutComponent]
})
export class LayoutModule { }
