import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prob4Page } from './prob4.page';

const routes: Routes = [
  {
    path: '',
    component: Prob4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prob4PageRoutingModule {}
