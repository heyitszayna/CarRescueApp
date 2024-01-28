import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prob2Page } from './prob2.page';

const routes: Routes = [
  {
    path: '',
    component: Prob2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prob2PageRoutingModule {}
