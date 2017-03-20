import { LoginGodGuard } from './../login-god.guard';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { CardsComponent } from './../cards/cards.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [
    CardsComponent,
    DashboardComponent,
    LayoutComponent],
  providers: [LoginGodGuard]
})
export class LayoutModule { }
