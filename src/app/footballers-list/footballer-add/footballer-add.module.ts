import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FootballerAddPageRoutingModule } from './footballer-add-routing.module';
import { FootballerAddPage } from './footballer-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FootballerAddPageRoutingModule
  ],
  declarations: [FootballerAddPage]
})
export class FootballerAddPageModule {}
