import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedPatternPage } from './med-pattern.page';

const routes: Routes = [
  {
    path: '',
    component: MedPatternPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedPatternPageRoutingModule {}
