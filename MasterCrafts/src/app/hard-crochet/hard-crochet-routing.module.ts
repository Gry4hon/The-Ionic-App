import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HardCrochetPage } from './hard-crochet.page';

const routes: Routes = [
  {
    path: '',
    component: HardCrochetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HardCrochetPageRoutingModule {}
