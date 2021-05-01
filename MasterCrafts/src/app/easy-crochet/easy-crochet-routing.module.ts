import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasyCrochetPage } from './easy-crochet.page';

const routes: Routes = [
  {
    path: '',
    component: EasyCrochetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasyCrochetPageRoutingModule {}
