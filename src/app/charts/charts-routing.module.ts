import { FlotComponent } from './flot/flot.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'charts',
    redirectTo: '/charts/flot',
    pathMatch: 'full'
  },
  {
    path: 'charts/flot',
    component: FlotComponent
  }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChartsRoutingModule { }
