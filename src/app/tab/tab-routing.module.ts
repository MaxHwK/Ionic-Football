import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabPage,
    children: [
      {
        path: 'footballers',
        loadChildren: () => import('../footballers-list/footballers-list.module').then( m => m.FootballersListPageModule)
      },
      {
        path: 'add',
        loadChildren: () => import('../footballers-list/footballer-add/footballer-add.module').then( m => m.FootballerAddPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'about-me',
        loadChildren: () => import('../about-me/about-me.module').then( m => m.AboutMePageModule)
      },
      {
        path: 'photos',
        loadChildren: () => import('../photos/photos.module').then( m => m.PhotosPageModule)
      },
      {
        path: 'voice-recorder',
        loadChildren: () => import('../voice-recorder/voice-recorder.module').then( m => m.VoiceRecorderPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tab/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TabPageRoutingModule {}
