import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prob2PageRoutingModule } from './prob2-routing.module';

import { Prob2Page } from './prob2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prob2PageRoutingModule
  ],
  declarations: [Prob2Page]
})
export class Prob2PageModule {}
