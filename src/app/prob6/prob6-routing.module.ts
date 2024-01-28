import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prob6Page } from './prob6.page';

const routes: Routes = [
  {
    path: '',
    component: Prob6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prob6PageRoutingModule {}
