import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedCrochetPage } from './saved-crochet.page';

const routes: Routes = [
  {
    path: '',
    component: SavedCrochetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedCrochetPageRoutingModule {}
