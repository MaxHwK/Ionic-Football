import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FootballerPageRoutingModule } from './footballer-routing.module';

import { FootballerPage } from './footballer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FootballerPageRoutingModule
  ],
  declarations: [FootballerPage]
})
export class FootballerPageModule {}
