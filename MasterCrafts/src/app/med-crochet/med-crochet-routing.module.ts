import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedCrochetPage } from './med-crochet.page';

const routes: Routes = [
  {
    path: '',
    component: MedCrochetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedCrochetPageRoutingModule {}
