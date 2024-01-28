import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prob1PageRoutingModule } from './prob1-routing.module';

import { Prob1Page } from './prob1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prob1PageRoutingModule
  ],
  declarations: [Prob1Page]
})
export class Prob1PageModule {}
