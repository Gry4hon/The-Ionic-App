import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedCrochetPageRoutingModule } from './med-crochet-routing.module';

import { MedCrochetPage } from './med-crochet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedCrochetPageRoutingModule
  ],
  declarations: [MedCrochetPage]
})
export class MedCrochetPageModule {}
