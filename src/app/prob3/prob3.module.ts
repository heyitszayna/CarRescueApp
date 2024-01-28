import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prob3PageRoutingModule } from './prob3-routing.module';

import { Prob3Page } from './prob3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prob3PageRoutingModule
  ],
  declarations: [Prob3Page]
})
export class Prob3PageModule {}
