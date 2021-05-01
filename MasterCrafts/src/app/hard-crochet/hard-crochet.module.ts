import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HardCrochetPageRoutingModule } from './hard-crochet-routing.module';

import { HardCrochetPage } from './hard-crochet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HardCrochetPageRoutingModule
  ],
  declarations: [HardCrochetPage]
})
export class HardCrochetPageModule {}
