import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoiceRecorderPage } from './voice-recorder.page';

const routes: Routes = [
  {
    path: '',
    component: VoiceRecorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoiceRecorderPageRoutingModule {}
