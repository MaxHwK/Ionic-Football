import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FootballersListPageRoutingModule } from './footballers-list-routing.module';

import { FootballersListPage } from './footballers-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FootballersListPageRoutingModule
  ],
  declarations: [FootballersListPage]
})
export class FootballersListPageModule {}
