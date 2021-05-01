import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasyPatternPage } from './easy-pattern.page';

const routes: Routes = [
  {
    path: '',
    component: EasyPatternPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasyPatternPageRoutingModule {}
