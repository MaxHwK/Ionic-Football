import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FootballersListPage } from './footballers-list.page';

const routes: Routes = [
  {
    path: '',
    component: FootballersListPage
  },
  {
    path: ':id',
    loadChildren: () => import('./footballer/footballer.module').then( m => m.FootballerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootballersListPageRoutingModule {}
