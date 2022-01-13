import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FootballerAddPage } from './footballer-add.page';

const routes: Routes = [
  {
    path: '',
    component: FootballerAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootballerAddPageRoutingModule {}
