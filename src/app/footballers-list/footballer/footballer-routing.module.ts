import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FootballerPage } from './footballer.page';

const routes: Routes = [
  {
    path: '',
    component: FootballerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootballerPageRoutingModule {}
