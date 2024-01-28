import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prob3Page } from './prob3.page';

const routes: Routes = [
  {
    path: '',
    component: Prob3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prob3PageRoutingModule {}
