import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prob1Page } from './prob1.page';

const routes: Routes = [
  {
    path: '',
    component: Prob1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prob1PageRoutingModule {}
