import { BestCalendarEverComponent } from './../best-calendar-ever/best-calendar-ever.component';
import { AdvcComponent } from './../advc/advc.component';
import { Form2Component } from './../form2/form2.component';
import { FormComponent } from './../form/form.component';
import { LoginGodGuard } from './../login-god.guard';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { CardsComponent } from './../cards/cards.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'adv', component: AdvcComponent },
      {path:'cal',component:BestCalendarEverComponent},
      { path: '', redirectTo: '/cal', pathMatch: 'full' },
      {
        path: 'form',
        component:FormComponent
      },
      {
        path: 'form2',
        component:Form2Component
      },
      {
        path: 'cards',
        component: CardsComponent
      },
      {
        path: 'cards/:num',
        component:CardsComponent
      },
      {
        path: 'dash',
        component: DashboardComponent
      },
      {
        path: 'charts',
        loadChildren: '../charts/charts.module#ChartsModule',
        canActivate:[LoginGodGuard]
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
