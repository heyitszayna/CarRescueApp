import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prob6PageRoutingModule } from './prob6-routing.module';

import { Prob6Page } from './prob6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prob6PageRoutingModule
  ],
  declarations: [Prob6Page]
})
export class Prob6PageModule {}
