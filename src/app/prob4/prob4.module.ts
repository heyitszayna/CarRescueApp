import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prob4PageRoutingModule } from './prob4-routing.module';

import { Prob4Page } from './prob4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prob4PageRoutingModule
  ],
  declarations: [Prob4Page]
})
export class Prob4PageModule {}
