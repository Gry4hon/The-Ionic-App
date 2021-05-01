import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HardPatternPage } from './hard-pattern.page';

const routes: Routes = [
  {
    path: '',
    component: HardPatternPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HardPatternPageRoutingModule {}
