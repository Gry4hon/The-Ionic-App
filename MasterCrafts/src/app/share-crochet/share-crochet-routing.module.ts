import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareCrochetPage } from './share-crochet.page';

const routes: Routes = [
  {
    path: '',
    component: ShareCrochetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareCrochetPageRoutingModule {}
