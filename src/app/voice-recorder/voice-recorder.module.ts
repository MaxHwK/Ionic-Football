import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoiceRecorderPageRoutingModule } from './voice-recorder-routing.module';

import { VoiceRecorderPage } from './voice-recorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoiceRecorderPageRoutingModule
  ],
  declarations: [VoiceRecorderPage]
})
export class VoiceRecorderPageModule {}
