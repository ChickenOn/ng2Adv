import { FlotComponent } from './../charts/flot/flot.component';
import { LayoutComponent } from './layout.component';
import { ChartsRoutingModule } from './../charts/charts-routing.module';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { CardsComponent } from './../cards/cards.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
    { path: '', redirectTo:'/dash', pathMatch:'full' },
      {
        path: 'cards',
        component: CardsComponent
      },
      {
        path: 'dash',
        component: DashboardComponent
      },
      {
        path: 'charts',
        redirectTo: '/charts/flot',
        pathMatch:'full'
      },
      {
        path: 'charts/flot',
        component: FlotComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LayoutRoutingModule { }
