import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prob5PageRoutingModule } from './prob5-routing.module';

import { Prob5Page } from './prob5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prob5PageRoutingModule
  ],
  declarations: [Prob5Page]
})
export class Prob5PageModule {}
